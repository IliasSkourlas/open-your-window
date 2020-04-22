///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\SETUP
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\GLOBAL VARIABLES
let weelName = "";
let copyState = 0;
let UrlId = "";
let inputUrl = "";
let  youtubeString = "watch?v=";
let youtubeReplace = "embed/";
let vimeoString = "vimeo.com";
let vimeoReplace = "player.vimeo.com/video";

let backgroundMain = "https://www.youtube.com/embed/4l7Uw-o-RC4?autoplay=1&mute=1&loop=1&playlist=4l7Uw-o-RC4";
let all = "&autoplay=1&loop=1&controls=0&mute=1";
let control = "&autoplay=1&loop=1&controls=1&mute=1";
let still = "&autoplay=0&loop=1&controls=0";
let mute = "&mute=1";
let unmute = "&mute=0";

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
           return url.replace(youtubeString, youtubeReplace);
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
                backgroundBox: backgroundMain,
                videoBox: foundItems
            })
        }
    })
};

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\DB
// create db 
mongoose.connect("mongodb://localhost:27017/urlDB", {useNewUrlParser: true});

const itemsUrlSchema = new mongoose.Schema({
    name: String
});
const ItemUrl = mongoose.model("ItemUrl", itemsUrlSchema);

// create Weels collection
const weelsUrlSchema = new mongoose.Schema({
    name: String,
    background: String,
    items: [itemsUrlSchema]
});
const Weel= mongoose.model("Weel", weelsUrlSchema);

//create Users collection (soon commonWeel ==>to Aray)
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    
});
const User = new mongoose.model("User", userSchema);



// Enter initial iframes

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

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ defaultUrls Array
const defaultUrls = [
    itemUrl1, itemUrl2, itemUrl3, itemUrl4,
    itemUrl5, itemUrl6, itemUrl7, itemUrl8,
    itemUrl9, itemUrl10, itemUrl11, itemUrl12,
    itemUrl13, itemUrl14, itemUrl15, itemUrl16,
    itemUrl17, itemUrl18, itemUrl19, itemUrl20,
    itemUrl21, itemUrl22, itemUrl23, itemUrl24
];


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
// GET
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
// Home  -  weel default
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
                backgroundBox: backgroundMain,
                videoBox: foundItems
            });
        }
    }); 
});

// common weel
app.get("/common", function(req, res){
    
    ItemUrl.find({}, function(err, foundItems){
        if(!err){
            res.render("common", {
                backgroundBox: backgroundMain,
                videoBoxT: foundItems
            })
        }
    })     
})
// register
app.get("/register", function(req, res){
    ItemUrl.find({}, function(err, foundItems){
        if(!err){
            res.render("register", {
                backgroundBox: backgroundMain,
                videoBox: foundItems
            })
        }
    })     
})
// login
app.get("/login", function(req, res){
    ItemUrl.find({}, function(err, foundItems){
        if(!err){
            res.render("login", {
                backgroundBox: backgroundMain,
                videoBox: foundItems
            })
        }
    })     
})
// jump
app.get("/jump", function(req, res){
    ItemUrl.find({}, function(err, foundItems){
        if(!err){
            res.render("jump", {
                backgroundBox: backgroundMain,
                videoBox: foundItems
            })
        }
    })     
})

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\Weel Memories
app.get("/weel0", function(req, res){
    copyState = 0;
    weelName = "weel0";
    Weel.findOne({name: weelName},function(err, foundWeel){
        if (!err){
            if (!foundWeel){
                const weel = new Weel({
                    name :weelName,
                    background : backgroundMain,
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel0");
            }else{
                res.render("common", {
                    backgroundBox:foundWeel.background,
                    videoBox: foundWeel.items
                });
            }
        }
    })
})

app.get("/weel1", function(req, res){
    copyState = 0;
    weelName = "weel1";
    Weel.findOne({name: weelName},function(err, foundWeel){
        if (!err){
            if (!foundWeel){
                const weel = new Weel({
                    name :weelName,
                    background : backgroundMain,
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel1");
            }else{
                res.render("common", {
                    backgroundBox:foundWeel.background,
                    videoBox: foundWeel.items
                });
            }
        }
    })
})

app.get("/weel2", function(req, res){
    copyState = 0;
    weelName = "weel2";
    Weel.findOne({name: weelName},function(err, foundWeel){
        if (!err){
            if (!foundWeel){
                const weel = new Weel({
                    name :weelName,
                    background : backgroundMain,
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel2");
            }else{
                res.render("common", {
                    backgroundBox:foundWeel.background,
                    videoBox: foundWeel.items
                });
            }
        }
    })
})

app.get("/weel3", function(req, res){
    copyState = 0;
    weelName = "weel3";
    Weel.findOne({name: weelName},function(err, foundWeel){
        if (!err){
            if (!foundWeel){
                const weel = new Weel({
                    name :weelName,
                    background : backgroundMain,
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel3");
            }else{
                res.render("common", {
                    backgroundBox:foundWeel.background,
                    videoBox: foundWeel.items
                });
            }
        }
    })
})


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ after copying a weel
app.get("/copyWeel0", function(req, res){

    Weel.findOne({name: weelName},function(err, foundWeel){
        if(err){
            console.log(err);
        }else{
            console.log(".............................");
            console.log(foundWeel.items);
            console.log(".............................");

            weelName = "weel0";
            console.log("to: " + weelName);
            Weel.findOneAndUpdate({name: weelName},{items: foundWeel.items}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel0");  
                }
            })
        }   
    })
})
app.get("/copyWeel1", function(req, res){

    Weel.findOne({name: weelName},function(err, foundWeel){
        if(err){
            console.log(err);
        }else{
            console.log(".............................");
            console.log(foundWeel.items);
            console.log(".............................");

            weelName = "weel1";
            console.log("to: " + weelName);
            Weel.findOneAndUpdate({name: weelName},{items: foundWeel.items}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel1");  
                }
            })
        }   
    })
})
app.get("/copyWeel2", function(req, res){

    Weel.findOne({name: weelName},function(err, foundWeel){
        if(err){
            console.log(err);
        }else{
            console.log(".............................");
            console.log(foundWeel.items);
            console.log(".............................");

            weelName = "weel2";
            console.log("to: " + weelName);
            Weel.findOneAndUpdate({name: weelName},{items: foundWeel.items}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel2");  
                }
            })
        }   
    })
})
app.get("/copyWeel3", function(req, res){

    Weel.findOne({name: weelName},function(err, foundWeel){
        if(err){
            console.log(err);
        }else{
            console.log(".............................");
            console.log(foundWeel.items);
            console.log(".............................");

            weelName = "weel3";
            console.log("to: " + weelName);
            Weel.findOneAndUpdate({name: weelName},{items: foundWeel.items}, function(err, updateWeel){
                if(!err){
                    res.redirect("/weel3");  
                }
            })
        }   
    })
})



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
//  POST
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
    // then update weels   
    switch (weelName) {
        case "weelDefault":
            ItemUrl.findOneAndUpdate({_id:UrlId}, {name: toEmbedVideo(finalUrl)},function(err, foundList){
                if(!err){
                    res.redirect("/common");  
                }
            });
            break;
        case "weel0": 
           Weel.update(
                {"name" : "weel0", "items._id": UrlId },
                {"$set":{"items.$.name":  toEmbedVideo(finalUrl)}},
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
            Weel.update(
                {"name" : "weel1", "items._id": UrlId },
                {"$set":{"items.$.name": toEmbedVideo(finalUrl)}},
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
            Weel.update(
                {"name" : "weel2", "items._id": UrlId },
                {"$set":{"items.$.name": toEmbedVideo(finalUrl)}},
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
            Weel.update(
                {"name" : "weel3", "items._id": UrlId },
                {"$set":{"items.$.name": toEmbedVideo(finalUrl)}},
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


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ Background
app.post("/background", function(req, res){
    console.log("background Button pressed ");
    switch (weelName) {
        case "weelDefault":
            Weel.findOneAndUpdate({name: "weelDefault"}, {background: inputUrl},function(err, foundList){
                if(!err){
                    res.redirect("/");  
                }else{
                    console.log("Problem with background video update");
                }
            });
            break;
        case "weel0":
            Weel.findOneAndUpdate({name: "weel0"}, {background: inputUrl},function(err, foundList){
                if(!err){
                    res.redirect("/weel0");  
                }else{
                    console.log("Problem with background video update");
                }
            });
            break;
        case "weel1":
            Weel.findOneAndUpdate({name: "weel1"}, {background: inputUrl},function(err, foundList){
                if(!err){
                    res.redirect("/weel1");  
                }else{
                    console.log("Problem with background video update");
                }
            });
            break;
        case "weel2":
            Weel.findOneAndUpdate({name: "weel2"}, {background: inputUrl},function(err, foundList){
                if(!err){
                    res.redirect("/weel2");  
                }else{
                    console.log("Problem with background video update");
                }
            });
            break;
        case "weel3":
            Weel.findOneAndUpdate({name: "weel3"}, {background: inputUrl},function(err, foundList){
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
    else{
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



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\ Copy a weel to another weel
app.post("/copy", function(req ,res){
    copyState;
    console.log(copyState);
    if (req.body.copy != "on"){
        copyState = 0;
    }else{
        copyState = 1;
    }
});



///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\register
app.post("/register", function(req, res){
    
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
         
        const newUser = new User({
            email: req.body.username,
            password: hash
        })
        newUser.save(function(err){
            if(err){
                console.log("1  " +err);
            }else{

                findCommon(res);  
                
            }
        });
    });
});

   
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\LOGIN

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
   
    User.findOne({email : username}, function(err, foundUser){
        if(err){
           console.log(err);
        }else{
            if(foundUser){
               bcrypt.compare(password , foundUser.password, function(err, result) {
                   if(result === true) {

                    findCommon(res);

                   }else{
                       res.redirect("/login")
                       console.log("wrong password");
                   }
               });
           }else{
               res.redirect("/login")
                       console.log("incorrect user");
           }
        }
    });
}); 




///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\PORT
app.listen(3000, function(){
    console.log("Listening on port 3000");
});

