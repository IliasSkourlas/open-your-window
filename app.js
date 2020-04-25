///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\SETUP
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require('lodash');
//(authenticate requests = a.r
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
//a.r)

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//(a.r 
app.use(session({
    secret: "This is a camera.",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
//a.r)



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>DB
mongoose.connect("mongodb://localhost:27017/urlDB", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\Items Schema
const itemsUrlSchema = new mongoose.Schema({
    name: String
});
const ItemUrl = mongoose.model("ItemUrl", itemsUrlSchema);


// defaultUrls
const itemUrl1 = new ItemUrl({
    name: "http://bookipia.com?"
});
const itemUrl2 = new ItemUrl({
    name: "https://play.gl?"
});
const itemUrl3 = new ItemUrl({
    name: "https://www.youtube.com/embed/WisZM9CMlTo?"
});
const itemUrl4 = new ItemUrl({
    name: "https://duckduckgo.com/search.html?prefill=Search DuckDuckGo?"
});
const itemUrl5 = new ItemUrl({
    name: ""
});
const itemUrl6 = new ItemUrl({
    name: ""
});
const itemUrl7 = new ItemUrl({
    name: ""
});
const itemUrl8 = new ItemUrl({
    name: ""
});
const itemUrl9 = new ItemUrl({
    name: ""
});
const itemUrl10 = new ItemUrl({
    name: ""
});
const itemUrl11 = new ItemUrl({
    name: ""
});
const itemUrl12 = new ItemUrl({
    name: ""
});
const itemUrl13 = new ItemUrl({
    name: ""
});
const itemUrl14 = new ItemUrl({
    name: ""
});
const itemUrl15 = new ItemUrl({
    name: ""
});
const itemUrl16 = new ItemUrl({
    name: ""
});
const itemUrl17 = new ItemUrl({
    name: ""
});
const itemUrl18 = new ItemUrl({
    name: ""
});
const itemUrl19 = new ItemUrl({
    name: ""
});
const itemUrl20 = new ItemUrl({
    name: ""
});
const itemUrl21 = new ItemUrl({
    name: ""
});
const itemUrl22 = new ItemUrl({
    name: ""
});
const itemUrl23 = new ItemUrl({
    name: ""
});
const itemUrl24 = new ItemUrl({
    name: ""
});

const defaultUrls = [
    itemUrl1, itemUrl2, itemUrl3, itemUrl4,
    itemUrl5, itemUrl6, itemUrl7, itemUrl8,
    itemUrl9, itemUrl10, itemUrl11, itemUrl12,
    itemUrl13, itemUrl14, itemUrl15, itemUrl16,
    itemUrl17, itemUrl18, itemUrl19, itemUrl20,
    itemUrl21, itemUrl22, itemUrl23, itemUrl24
];

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\Weels Schema
const weelsUrlSchema = new mongoose.Schema({
    name: String,
    background: String,
    items: [itemsUrlSchema]
});
const Weel= mongoose.model("Weel", weelsUrlSchema);

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>Users Schema & a.r
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    background: [String],
    weel0: [itemsUrlSchema],
    weel1: [itemsUrlSchema],
    weel2: [itemsUrlSchema],
    weel3: [itemsUrlSchema],
    
});

//(a.r
userSchema.plugin(passportLocalMongoose);
//a.r)

const User = new mongoose.model("User", userSchema);

//(a.r 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//a.r)



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\GLOBAL >VARIABLES
let userNow;
let weelName = "";
let copyState = 0;
let UrlId = "";
let inputUrl = "";
let  youtubeString = "watch?v=";
let youtubeReplace = "embed/";
let vimeoString = "vimeo.com";
let vimeoReplace = "player.vimeo.com/video";
let  weelObject;

let backgroundMain = "https://www.youtube.com/embed/4l7Uw-o-RC4?autoplay=1&mute=1&loop=1&playlist=4l7Uw-o-RC4";
let backgroundSound = "https://www.youtube.com/embed/v1P0cAzXR6g?autoplay=1&loop=1&controls=0&mute=1&playlist=v1P0cAzXR6g"
let backgroundArray = [backgroundMain, backgroundMain, backgroundMain, backgroundMain];
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\CLEAN UP AND DELLET AFTER
let superCute = "https://www.youtube.com/embed/4l7Uw-o-RC4?autoplay=1&mute=1&loop=1&playlist=4l7Uw-o-RC4";
let talkToParot = "https://www.youtube.com/embed/v1P0cAzXR6g?autoplay=1&loop=1&controls=0&mute=1&playlist=v1P0cAzXR6g";
let realBirds = "https://www.youtube.com/embed/PwylW_sUfQY?autoplay=1&mute=1&loop=1&playlist=PwylW_sUfQY";
let kittenCuteness = "https://www.youtube.com/embed/dzFKG6rkWpU?autoplay=1&mute=1&loop=1&playlist=dzFKG6rkWpU";
let chen = "https://www.youtube.com/embed/Iwpr55PZEJ8?";

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\FUNCTIONS
// automaticaly embed youtube, vimeo
function toEmbedVideo(url){
    if(url.includes("youtube.com") & url.includes(youtubeString)){
           return url.replace(youtubeString, youtubeReplace); // replace if contains list first "%" with "?"
    }
    if(url.includes(vimeoReplace)){
        return url;
    }
    if(url.includes("vimeo.com") & url.includes(vimeoString) & !url.includes(vimeoReplace)){
            return url.replace(vimeoString, vimeoReplace);
    }
    else{
        return url;
    }
};

// 
function findCommon(res){
    ItemUrl.find({}, function(err, foundItems){
        if(!err){
            res.render("common", {
                backgroundVideo: backgroundMain,
                videoBox: foundItems
            })
        }
    })
};


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
// >GET
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\

// Home  ----  default Urls
app.get("/", function(req, res){
    weelName = "weelDefault"

    ItemUrl.find({}, function(err, foundItems){
        if(foundItems.length === 0){
            ItemUrl.insertMany(defaultUrls, function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("Success with inserting default Urls");
                }
            });
            res.redirect("/");
        }else{
            res.render("home", {
                backgroundVideo: backgroundMain,
                videoBox: foundItems
            });
        }
    }); 
});
// register  ----  default Urls
app.get("/register", function(req, res){
    ItemUrl.find({}, function(err, foundItems){
        if(!err){
            res.render("register", {
                backgroundVideo: backgroundMain,
                videoBox: foundItems
            })
        }
    })     
})
// login  ----  default Urls
app.get("/login", function(req, res){
    ItemUrl.find({}, function(err, foundItems){
        if(!err){
            res.render("login", {
                backgroundVideo: backgroundMain,
                videoBox: foundItems
            })
        }
    })     
})

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>common weel
app.get("/common", function(req, res){
    weelName = "weel0";

    if(req.isAuthenticated()){

        User.findOne({username: userNow},function(err, foundCommonWeel){
            if (err){
                console.log(err);
            }else{
                res.render("common", {
                    backgroundVideo:foundCommonWeel.background[0],
                    videoBox: foundCommonWeel.weel0,
                    backgroundSound: backgroundSound
                });
            }
        })
    }else{
        res.redirect("/login");
    }
});

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\Weel Memories
app.get("/weel0", function(req, res){
    copyState = 0;
    weelName = "weel0";

    if(req.isAuthenticated()){
        //>>>>> Chosing a weel from one user wile another dose not... might mix who is userNow ???;;;
        User.findOne({username: userNow},function(err, foundWeel){
            if (err){
                console.log(err);
               
                }else{
                    res.render("common", {
                        backgroundVideo:foundWeel.background[0],
                        videoBox: foundWeel.weel0,
                        backgroundSound: backgroundSound
                    });
                }
            });
        
        }else{
            res.redirect("/login");
        }
    
});

app.get("/weel1", function(req, res){
    copyState = 0;
    weelName = "weel1";

    if(req.isAuthenticated()){
        
        User.findOne({username: userNow},function(err, foundWeel){
            if (err){
                console.log(err);
               
                }else{
                    res.render("common", {
                        backgroundVideo:foundWeel.background[1],
                        videoBox: foundWeel.weel1,
                        backgroundSound: backgroundSound
                    });
                }
            });
        
        }else{
            res.redirect("/login");
        }
    
});

app.get("/weel2", function(req, res){
    copyState = 0;
    weelName = "weel2";

    if(req.isAuthenticated()){
        
        User.findOne({username: userNow},function(err, foundWeel){
            if (err){
                console.log(err);
               
                }else{
                    res.render("common", {
                        backgroundVideo:foundWeel.background[2],
                        videoBox: foundWeel.weel2,
                        backgroundSound: backgroundSound
                    });
                }
            });
        
        }else{
            res.redirect("/login");
        }
    
    
});

app.get("/weel3", function(req, res){
    copyState = 0;
    weelName = "weel3";

    if(req.isAuthenticated()){
        
        User.findOne({username: userNow},function(err, foundWeel){
            if (err){
                console.log(err);
               
                }else{
                    res.render("common", {
                        backgroundVideo:foundWeel.background[3],
                        videoBox: foundWeel.weel3,
                        backgroundSound: backgroundSound
                    });
                }
            });
        
        }else{
            res.redirect("/login");
        }
    
});


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ copy too weel x

app.get("/copyWeel0", function(req, res){

    User.findOne({username: userNow},function(err, foundUser){
        switch (weelName) {
            case "weel0":
                weelObject = foundUser.weel0;
                break;
            case "weel1": 
                weelObject = foundUser.weel1;
                break;
            case "weel2":
                weelObject = foundUser.weel2;
                break;
            case "weel3":
                weelObject = foundUser.weel3;
                break;
            default:
                break;
        }
        if(err){
            console.log(err);
        }else{
            weelName = "weel0"
            User.findOneAndUpdate({username: userNow},{weel0: weelObject}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel0");  
                }
            })
        }   
    })
})
app.get("/copyWeel1", function(req, res){

    User.findOne({username: userNow},function(err, foundUser){
        switch (weelName) {
            case "weel0":
                weelObject = foundUser.weel0;
                break;
            case "weel1": 
                weelObject = foundUser.weel1;
                break;
            case "weel2":
                weelObject = foundUser.weel2;
                break;
            case "weel3":
                weelObject = foundUser.weel3;
                break;
            default:
                break;
        }
        if(err){
            console.log(err);
        }else{
            weelName = "weel1"
            User.findOneAndUpdate({username: userNow},{weel1: weelObject}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel1");  
                }
            })
        }   
    })
})
app.get("/copyWeel2", function(req, res){

    User.findOne({username: userNow},function(err, foundUser){
        switch (weelName) {
            case "weel0":
                weelObject = foundUser.weel0;
                break;
            case "weel1": 
                weelObject = foundUser.weel1;
                break;
            case "weel2":
                weelObject = foundUser.weel2;
                break;
            case "weel3":
                weelObject = foundUser.weel3;
                break;
            default:
                break;
        }
        if(err){
            console.log(err);
        }else{
            weelName = "weel2"
            User.findOneAndUpdate({username: userNow},{weel2: weelObject}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel2");  
                }
            })
        }   
    })
})
app.get("/copyWeel3", function(req, res){

    User.findOne({username: userNow},function(err, foundUser){
        switch (weelName) {
            case "weel0":
                weelObject = foundUser.weel0;
                break;
            case "weel1": 
                weelObject = foundUser.weel1;
                break;
            case "weel2":
                weelObject = foundUser.weel2;
                break;
            case "weel3":
                weelObject = foundUser.weel3;
                break;
            default:
                break;
        }
        if(err){
            console.log(err);
        }else{
            weelName = "weel3"
            User.findOneAndUpdate({username: userNow},{weel3: weelObject}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel3");  
                }
            })
        }   
    })
})


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
//  >POST
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ Update  Weels
app.post("/", function(req, res){
    UrlId = req.body.button;
    inputUrl = req.body.postUrl;
    let toggleAutoplay = req.body.buttonAutoplayMute;
    let autoplayMute = "?autoplay=1&mute=1&loop=1&playlist=";
    let replacedUrl = "";
    let finalUrl = "";

    // first toggle Autoplay logic
    if(toggleAutoplay === "on" & (inputUrl.includes("youtube.") || (inputUrl.includes("vimeo.")) )){
        
        if(inputUrl.includes(autoplayMute) ){
            replacedUrl = inputUrl.replace("?autoplay=1&mute=1&loop=1&playlist=", "");
            finalUrl = replacedUrl;
        }
        else{
            finalUrl = inputUrl  + autoplayMute;
        }
    }
    else{
        finalUrl = inputUrl;
    }
    console.log(finalUrl);
    console.log("Url ID: "+ UrlId);
    console.log(weelName);
    
    // then update weels   
    switch (weelName) {
        // case "weelDefault":
        //     ItemUrl.findOneAndUpdate({_id:UrlId}, {name: toEmbedVideo(finalUrl)},function(err, foundList){
        //         if(!err){
        //             res.redirect("/common");  
        //         }
        //     });
        //     break;
        case "weel0": 
           User.update(
                {"username" : userNow, "weel0._id": UrlId },
                {"$set":{"weel0.$.name":  toEmbedVideo(finalUrl)}},
                function(err, foundList){
                if(!err){
                    console.log("Succesfuly updated " + UrlId);
                    res.redirect("/weel0");  
                }else{
                    console.log("Error in uptating" + UrlId);
                }
            });
            break;
        case "weel1":
            User.update(
                {"username" : userNow, "weel1._id": UrlId },
                {"$set":{"weel1.$.name":  toEmbedVideo(finalUrl)}},
                function(err, foundList){
                if(!err){
                    console.log("Succesfuly updated " + UrlId);
                    res.redirect("/weel1");  
                }else{
                    console.log("Error in uptating" + UrlId);
                }
            });
            break;
        case "weel2":
            User.update(
                {"username" : userNow, "weel2._id": UrlId },
                {"$set":{"weel2.$.name":  toEmbedVideo(finalUrl)}},
                function(err, foundList){
                if(!err){
                    console.log("Succesfuly updated " + UrlId);
                    res.redirect("/weel2");  
                }else{
                    console.log("Error in uptating" + UrlId);
                }
            });
            break;
        case "weel3":
            User.update(
                {"username" : userNow, "weel3._id": UrlId },
                {"$set":{"weel3.$.name":  toEmbedVideo(finalUrl)}},
                function(err, foundList){
                if(!err){
                    console.log("Succesfuly updated " + UrlId);
                    res.redirect("/weel3");  
                }else{
                    console.log("Error in uptating" + UrlId);
                }
            });
            break;
        default:
        break;
    }
});


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>BackgroundVideo
app.post("/backgroundVideo", function(req, res){
    console.log("backgroundVideo Button pressed ");
    switch (weelName) {
        // case "weelDefault":
        //     Weel.findOneAndUpdate({name: "weelDefault"}, {background: inputUrl},function(err, foundList){
        //         if(!err){
        //             res.redirect("/");  
        //         }else{
        //             console.log("Problem with background video update");
        //         }
        //     });
        //     break;
        
        case "weel0":
                User.update({'username': userNow}, {'$set': {
                    'background.0': inputUrl}}, function(err) { 
                    if(!err){
                        res.redirect("/weel0");  
                        }else{
                            console.log("Problem with background video update");
                        }
                    });
            break;
        case "weel1":
            User.update({'username': userNow}, {'$set': {
                'background.1': inputUrl }}, function(err) { 
                if(!err){
                    res.redirect("/weel1");  
                    }else{
                        console.log("Problem with background video update");
                    }
                });
            break;
        case "weel2":
            User.update({'username': userNow}, {'$set': {
                'background.2': inputUrl}}, function(err) { 
                if(!err){
                    res.redirect("/weel2");  
                    }else{
                        console.log("Problem with background video update");
                    }
                });
            break;
        case "weel3":
            User.update({'username': userNow}, {'$set': {
                'background.3': inputUrl}}, function(err) { 
                if(!err){
                    res.redirect("/weel3");  
                    }else{
                        console.log("Problem with background video update");
                    }
                });
            break;
        default:
            break;
    }  
});

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>BackgroundSound
app.post("/backgroundSound", function(req, res){

    switch (weelName) {  
        // must have controls=1 
        case "weel0":
            console.log("Play background sound 0");
            backgroundSound = "https://www.youtube.com/embed/H8_BAoVwoaM"
            res.redirect("/weel0");   
            break;
        case "weel1":
            console.log("Play background sound 1");
            backgroundSound = "https://www.youtube.com/embed/v4UkD7U88NQ?list=PLfwQKRKOBmguidyvjX5KAPXMztjgQVoXs"
            res.redirect("/weel1"); 
            break;
        case "weel2":
            console.log("Play background sound 2");
            res.redirect("/weel2"); 
            break;
        case "weel3":
            console.log("Play background sound 3");
            res.redirect("/weel3"); 
                
            break;
        default:
            break;
    };

});
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\after you press a weel putton
app.post("/memory", function(req, res){
   
    const memory = req.body.memoryButton;
    if(copyState ===  0){
        switch (memory) {
            case "weel0":
                res.redirect("/weel0")
                break;
            case "weel1":
                res.redirect("/weel1")
                break;
            case "weel2":
                res.redirect("/weel2")
                break;
            case "weel3":
                res.redirect("/weel3")
                break;
            default:
                break;
        }
    }
    else{  ///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ Copy a weel to another weel
        switch (memory) {
            case "weel0":
                console.log("copy "  + weelName);
                res.redirect("/copyweel0")
                break;
            case "weel1":
                console.log("copy "  + weelName);
                res.redirect("/copyweel1")
                break;
            case "weel2":
                console.log("copy "  + weelName);
                res.redirect("/copyweel2")
                break;
            case "weel3":
                console.log("copy "  + weelName);
                res.redirect("/copyWeel3")
                break;
            default:
                break;
        }        
    }
});



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ Copy state
app.post("/copy", function(req ,res){
    copyState;
    console.log(copyState);
    if (req.body.copy != "on"){
        copyState = 0;
    }else{
        copyState = 1;
    }
});



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>REGISTER
app.post("/register", function(req, res){
    
    User.register({username: req.body.username}, req.body.password,function(err, user){
        if(err){
            console.log(err); 
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req, res, function(){

                userNow = req.body.username;
                User.findOneAndUpdate({username: req.body.username}, {
                    background: backgroundArray, 
                    weel0: defaultUrls,
                    weel1: defaultUrls,
                    weel2: defaultUrls,
                    weel3: defaultUrls
                  },function(err, foundList){
                    if(!err){
                        res.redirect("/common");   
                    }else{
                        console.log("Problem with background video initialization");
                    }
                });
                // res.redirect("/common"); 
            })
        }  
    })
});

   
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>LOGIN

app.post("/login", function(req, res){

    const user = new User({        //????
        username:req.body.username,
        password:req.body.password
    })

    req.login(user, function(err){
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req, res, function(){

                User.findOne({username: req.body.username}, function(err, foundUser){
                    if(!err){
                        console.log("userNow: " + foundUser.username);
                        userNow = foundUser.username;
                    }else{
                        console.log("could not find username!");
                    }
                });
                res.redirect("/common");
            });
        }
    }); 
}); 



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\PORT
app.listen(3000, function(){
    console.log("Listening on port 3000");
});

