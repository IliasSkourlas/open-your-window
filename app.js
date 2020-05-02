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


//Using MongoDB Atlas
mongoose.connect("mongodb+srv://admin-ilias:test123@cluster0-riqh2.mongodb.net/urlDB", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//Using MongoDB
// mongoose.connect("mongodb://localhost:27017/urlDB", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\Items Schema
const itemsUrlSchema = new mongoose.Schema({
    name: String
});
const ItemUrl = mongoose.model("ItemUrl", itemsUrlSchema);


// defaultUrl
    const itemUrl1 = new ItemUrl({
        name: ""
    });
    const itemUrl2 = new ItemUrl({
        name: ""
    });
    const itemUrl3 = new ItemUrl({
        name: ""
    });
    const itemUrl4 = new ItemUrl({
        name: ""
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
    const itemUrl25 = new ItemUrl({
        name: ""
    });
    const itemUrl26 = new ItemUrl({
        name: ""
    });
    const itemUrl27 = new ItemUrl({
        name: ""
    });
    const itemUrl28 = new ItemUrl({
        name: ""
    });
    const itemUrl29 = new ItemUrl({
        name: ""
    });
    const itemUrl30 = new ItemUrl({
        name: ""
    });
    const itemUrl31 = new ItemUrl({
        name: ""
    });
    const itemUrl32 = new ItemUrl({
        name: ""
    });


    const itemUrl33 = new ItemUrl({
        name: ""
    });
    const itemUrl34 = new ItemUrl({
        name: ""
    });
    const itemUrl35 = new ItemUrl({
        name: ""
    });
    const itemUrl36 = new ItemUrl({
        name: ""
    });
    const itemUrl37 = new ItemUrl({
        name: ""
    });
    const itemUrl38 = new ItemUrl({
        name: ""
    });
    const itemUrl39 = new ItemUrl({
        name: ""
    });
    const itemUrl40 = new ItemUrl({
        name: ""
    });
    const itemUrl41 = new ItemUrl({
        name: ""
    });
    const itemUrl42 = new ItemUrl({
        name: ""
    });
    const itemUrl43 = new ItemUrl({
        name: ""
    });
    const itemUrl44 = new ItemUrl({
        name: ""
    });
    const itemUrl45 = new ItemUrl({
        name: ""
    });
    const itemUrl46 = new ItemUrl({
        name: ""
    });
    const itemUrl47 = new ItemUrl({
        name: ""
    });
    const itemUrl48 = new ItemUrl({
        name: ""
    });
//Aray
const defaultUrls = [
    itemUrl1, itemUrl2, itemUrl3, itemUrl4,
    itemUrl5, itemUrl6, itemUrl7, itemUrl8,
    itemUrl9, itemUrl10, itemUrl11, itemUrl12,
    itemUrl13, itemUrl14, itemUrl15, itemUrl16,

    itemUrl17, itemUrl18, itemUrl19, itemUrl20,
    itemUrl21, itemUrl22, itemUrl23, itemUrl24,
    itemUrl25, itemUrl26, itemUrl27, itemUrl28,
    itemUrl29, itemUrl30, itemUrl31, itemUrl32,

    itemUrl33, itemUrl34, itemUrl35, itemUrl36,
    itemUrl37, itemUrl38, itemUrl39, itemUrl40,
    itemUrl41, itemUrl42, itemUrl43, itemUrl44,
    itemUrl45, itemUrl46, itemUrl47, itemUrl48,
];

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\LivingRooms Schema
const commonsSchema = new mongoose.Schema({
    name: String,
    password: String,
    background: String,
    weel0: [itemsUrlSchema]
});
const Common = mongoose.model("Common", commonsSchema );

const common0 = new Common ({
    name: "default",
    password: "default",
    background: "https://www.youtube.com/embed/4l7Uw-o-RC4?autoplay=1&mute=1&loop=1&playlist=4l7Uw-o-RC4",
    weel0: defaultUrls
});
const common1 = new Common ({
    name: "balcony",
    password: "balcony",
    background: "https://www.youtube.com/embed/4l7Uw-o-RC4?autoplay=1&mute=1&loop=1&playlist=4l7Uw-o-RC4",
    weel0: defaultUrls
});
const common2 = new Common ({
    name: "Dimosthenis",
    password: "Dimosthenis",
    background: "https://www.youtube.com/embed/4l7Uw-o-RC4?autoplay=1&mute=1&loop=1&playlist=4l7Uw-o-RC4",
    weel0: defaultUrls
});

const livingRoomArray = [common0, common1, common2];

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>Users Schema & a.r
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    background: [String],
    weel1: [itemsUrlSchema],
    weel2: [itemsUrlSchema],
    weel3: [itemsUrlSchema],
    weel4: [itemsUrlSchema],
    weel5: [itemsUrlSchema] 
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
let livingroomNow = "balcony";
let copyState = 0;
let UrlId = "";
let inputUrl = "https://iliasskourlas.github.io/Canvas5/";
let defaultRightPanel = "https://iliasskourlas.github.io/Canvas6Tapestrie/";

let rightPanel = "";

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

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>FUNCTIONS
// automaticaly embed youtube, vimeo
function toEmbedVideo(url){
    if ((url.includes("youtube.")) & (url.includes("watch?")) & (url.includes("&list="))){

        return url.replace("watch", "embed") + "&";

    }
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

// replace empty rightPanel with something.. (so that you can always see something there)
function defaultOrPanel(){
    if (inputUrl === ""){ 
        return defaultRightPanel;
    }else{
        return inputUrl;
    }
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
                    videoBox: foundItems,
                   
                });
            }
        }); 

    Common.find({}, function(err, foundCommon){
        if(foundCommon.length === 0){
            Common.insertMany(livingRoomArray, function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("Success with inserting livingRoomArray");
                }
            });
        }
    })

    
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

        Common.findOne({name: livingroomNow},function(err, foundWeel){
            if (err){
                console.log(err);
                }else{
                    if(!foundWeel){
                        livingroomNow = "default";
                        res.redirect("/common")
                    }else{
                        let panel = defaultOrPanel();
                        res.render("common", {
                            backgroundVideo:foundWeel.background,
                            videoBox: foundWeel.weel0,
                            backgroundSound: backgroundSound,
                            inputUrl: inputUrl,
                            livingroomNow: livingroomNow,
                            rightPanel: panel
                            })
                    }
                }
            });
        
    }else{
        res.redirect("/login");
    }
});

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\Weel Memories
app.get("/weel0", function(req, res){
    copyState = 0;
    weelName = "weel0";

   
   

    if(req.isAuthenticated()){

        //This is a hack: ...acording to userNow name switch to livingroom by name
        Common.findOne({name: livingroomNow},function(err, foundWeel){
            if (err){
                console.log(err);
               
                }else{
                    let panel = defaultOrPanel();
                    res.render("common", {
                        backgroundVideo:foundWeel.background,
                        videoBox: foundWeel.weel0,
                        backgroundSound: backgroundSound,
                        inputUrl: inputUrl,
                        livingroomNow: livingroomNow,
                        rightPanel: panel
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

    console.log("/weel1");
    

    if(req.isAuthenticated()){
        
        User.findOne({username: userNow},function(err, foundWeel){

            if (err){
                console.log(err);
               
                }else{
                    let panel = defaultOrPanel();
                    res.render("common", {
                        backgroundVideo: foundWeel.background[1],
                        videoBox: foundWeel.weel1,
                        backgroundSound: backgroundSound,
                        inputUrl: inputUrl,
                        livingroomNow: livingroomNow,
                        rightPanel: panel
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
                    let panel = defaultOrPanel();
                    res.render("common", {
                        backgroundVideo:foundWeel.background[2],
                        videoBox: foundWeel.weel2,
                        backgroundSound: backgroundSound,
                        inputUrl: inputUrl,
                        livingroomNow: livingroomNow,
                        rightPanel: panel
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
                    let panel = defaultOrPanel();
                    res.render("common", {
                        backgroundVideo:foundWeel.background[3],
                        videoBox: foundWeel.weel3,
                        backgroundSound: backgroundSound,
                        inputUrl: inputUrl,
                        livingroomNow: livingroomNow,
                        rightPanel: panel
                    });
                }
            });
        
        }else{
            res.redirect("/login");
        }
    
});
app.get("/weel4", function(req, res){
    copyState = 0;
    weelName = "weel4";
    
    

    if(req.isAuthenticated()){
        User.findOne({username: userNow},function(err, foundWeel){
            if (err){
                console.log(err);
               
                }else{
                    let panel = defaultOrPanel();
                    res.render("common", {
                        backgroundVideo:foundWeel.background[4],
                        videoBox: foundWeel.weel4,
                        backgroundSound: backgroundSound,
                        inputUrl: inputUrl,
                        livingroomNow: livingroomNow,
                        rightPanel: panel
                    });
                }
            });
        
        }else{
            res.redirect("/login");
        }
    
});
app.get("/weel5", function(req, res){
    copyState = 0;
    weelName = "weel5";

    if(req.isAuthenticated()){
        
        User.findOne({username: userNow},function(err, foundWeel){
            if (err){
                console.log(err);
               
                }else{
                    let panel = defaultOrPanel();
                    res.render("common", {
                        backgroundVideo:foundWeel.background[5],
                        videoBox: foundWeel.weel5,
                        backgroundSound: backgroundSound,
                        inputUrl: inputUrl,
                        livingroomNow: livingroomNow,
                        rightPanel: panel
                    });
                }
            });
        
        }else{
            res.redirect("/login");
        }
    
});


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ >copy too weel x

app.get("/copyWeel1", function(req, res){

    User.findOne({username: userNow},function(err, foundUser){
        switch (weelName) {
            case "weel0":
                //stays the same ....must change
                weelObject = foundUser.weel1;
                console.log("can not copy to weel0");
                

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
            case "weel4":
                weelObject = foundUser.weel4;
                break;
            case "weel5":
                weelObject = foundUser.weel5;
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
                 //stays the same ....must change
                weelObject = foundUser.weel2;
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
            case "weel4":
                weelObject = foundUser.weel4;
                break;
            case "weel5":
                weelObject = foundUser.weel5;
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
                 //stays the same ....must change
                weelObject = foundUser.weel3;
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
            case "weel4":
                weelObject = foundUser.weel4;
                break;
            case "weel5":
                weelObject = foundUser.weel5;
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
app.get("/copyWeel4", function(req, res){

    User.findOne({username: userNow},function(err, foundUser){
        switch (weelName) {
            case "weel0":
                 //stays the same ....must change
                weelObject = foundUser.weel4;
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
            case "weel4":
                weelObject = foundUser.weel4;
                break;
            case "weel5":
                weelObject = foundUser.weel5;
                break;
            default:
                break;
        }
        if(err){
            console.log(err);
        }else{
            weelName = "weel4"
            User.findOneAndUpdate({username: userNow},{weel4: weelObject}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel4");  
                }
            })
        }   
    })
})

let xx;
app.get("/copyWeel5", function(req, res){
    
    

    User.findOne({username: userNow},function(err, foundUser){
        switch (weelName) {
            case "weel0":
                 //stays the same ....must change
                 weelObject = foundUser.weel5;
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
            case "weel4":
                weelObject = foundUser.weel4;
                break;
            case "weel5":
                weelObject = foundUser.weel5;
                break;
            default:
                break;
        }
        if(err){
            console.log(err);
        }else{
            weelName = "weel5"
            User.findOneAndUpdate({username: userNow},{weel5: weelObject}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel5");  
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
      
        if (inputUrl.includes(autoplayMute) ){
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
   
        case "weel0": 

        // UrlId might get lost.....between common after update ...users!
           Common.update(
                {"name" : livingroomNow, "weel0._id": UrlId },
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
        case "weel4":
            User.update(
                {"username" : userNow, "weel4._id": UrlId },
                {"$set":{"weel4.$.name":  toEmbedVideo(finalUrl)}},
                function(err, foundList){
                if(!err){
                    console.log("Succesfuly updated " + UrlId);
                    res.redirect("/weel4");  
                }else{
                    console.log("Error in uptating" + UrlId);
                }
            });
            break;
        case "weel5":
            User.update(
                {"username" : userNow, "weel5._id": UrlId },
                {"$set":{"weel5.$.name":  toEmbedVideo(finalUrl)}},
                function(err, foundList){
                if(!err){
                    console.log("Succesfuly updated " + UrlId);
                    res.redirect("/weel5");  
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
app.post("/livingroomInput", function(req, res){
    livingroomNow = req.body.livingroomInput;
    res.redirect("/common");
});

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>BackgroundVideo
app.post("/backgroundVideo", function(req, res){
    console.log("backgroundVideo Button pressed ");
    switch (weelName) {
        
        case "weel0":
                Common.update({'name': livingroomNow}, {'$set': {
                    'background': inputUrl}}, function(err) { 
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
        case "weel4":
            User.update({'username': userNow}, {'$set': {
                'background.4': inputUrl}}, function(err) { 
                if(!err){
                    res.redirect("/weel4");  
                    }else{
                        console.log("Problem with background video update");
                    }
                });
            break;
        case "weel5":
            User.update({'username': userNow}, {'$set': {
                'background.5': inputUrl}}, function(err) { 
                if(!err){
                    res.redirect("/weel5");  
                    }else{
                        console.log("Problem with background video update");
                    }
                });
            break;
        default:
            break;
    }  
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
            case "weel4":
                res.redirect("/weel4")
                break;
            case "weel5":
                res.redirect("/weel5")
                break;
            default:
                break;
        }
    }
    else{  ///////////////////if copyState = 1\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ Copy a weel to another weel
        switch (memory) {
            case "weel0":
                console.log("copy "  + weelName + "to weel0 is not allowed");
                res.redirect("/weel0")
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
            case "weel4":
                console.log("copy "  + weelName);
                res.redirect("/copyWeel4")
                break;
            case "weel5":
                console.log("copy "  + weelName);
                res.redirect("/copyWeel5")
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
                    weel3: defaultUrls,
                    weel4: defaultUrls,
                    weel5: defaultUrls
                  },function(err, foundList){
                    if(!err){
                        res.redirect("/common");   
                    }else{
                        console.log("Problem with background video initialization");
                    }
                });
               
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







///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\>BackgroundSound
// app.post("/backgroundSound", function(req, res){

//     switch (weelName) {  
//         // must have controls=1 
//         case "weel0":
//             console.log("Play background sound 0");
//             backgroundSound = "https://www.youtube.com/embed/H8_BAoVwoaM"
//             res.redirect("/weel0");   
//             break;
//         case "weel1":
//             console.log("Play background sound 1");
//             backgroundSound = "https://www.youtube.com/embed/v4UkD7U88NQ?list=PLfwQKRKOBmguidyvjX5KAPXMztjgQVoXs"
//             res.redirect("/weel1"); 
//             break;
//         case "weel2":
//             console.log("Play background sound 2");
//             res.redirect("/weel2"); 
//             break;
//         case "weel3":
//             console.log("Play background sound 3");
//             res.redirect("/weel3"); 
                
//             break;
//         default:
//             break;
//     };

// });          