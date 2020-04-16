///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
let weelName = "";
let copyState = 0;






// add the embed link together //
function embed(link, midle, tale){
    return link + "?" + midle + "&playlist=" + tale;
}

let all = "&autoplay=1&loop=1&controls=0&mute=1";
let control = "&autoplay=1&loop=1&controls=1&mute=1";
let still = "&autoplay=0&loop=1&controls=0";
let mute = "&mute=1";
let unmute = "&mute=0";


let background = embed("https://www.youtube.com/embed/4l7Uw-o-RC4?", all, "4l7Uw-o-RC4");

let empty = embed("https://?");
let bookipia = embed("http://bookipia.com?");
let superCute = embed("https://www.youtube.com/embed/4l7Uw-o-RC4?", all, "4l7Uw-o-RC4");
let aljazeera = embed("https://www.youtube.com/embed/WisZM9CMlTo", control);
let duckduckgo = "https://duckduckgo.com/search.html?prefill=Search DuckDuckGo";
let skyNews = embed("https://www.youtube.com/embed/9Auq9mYxFEE", control);
let bloomberg = embed("https://www.bloomberg.com/markets/commodities");
let ert = embed("https://webtv.ert.gr/ert1-live/");
let coindesk = embed("https://www.coindesk.com/price/bitcoin");
let threejs =  "https://threejs.org/examples/#webgl_helpers";
let techcrunch = "https://techcrunch.com/";
let action = "https://neal.fun/auction-game/";
let play = "https://play.gl/";

let weel = [
    bookipia, play, superCute, skyNews,
	aljazeera, bloomberg, ert, coindesk, 
	duckduckgo, empty, empty, threejs,
    techcrunch, action, empty, empty,
    duckduckgo, duckduckgo, duckduckgo, duckduckgo
];
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
// create db //
mongoose.connect("mongodb://localhost:27017/urlDB", {useNewUrlParser: true});

const itemsUrlSchema = {
    name: String
};
const ItemUrl = mongoose.model("ItemUrl", itemsUrlSchema);


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



// defaultUrls
const defaultUrls = [
    itemUrl1, itemUrl2, itemUrl3, itemUrl4,
    itemUrl5, itemUrl6, itemUrl7, itemUrl8,
    itemUrl9, itemUrl10, itemUrl11, itemUrl12,
    itemUrl13, itemUrl14, itemUrl15, itemUrl16,
    itemUrl17, itemUrl18, itemUrl19, itemUrl20,
    itemUrl21, itemUrl22, itemUrl23, itemUrl24
];
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\

const weelsUrlSchema = {
    name: String,
    items: [itemsUrlSchema]
};
const Weel= mongoose.model("Weel", weelsUrlSchema);


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
// GET
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\

// weel default
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
                backgroundBox:background,
                videoBox: foundItems
            });
        }
    }); 
});


//Weel Memories

app.get("/weel0", function(req, res){
    copyState = 0;
    weelName = "weel0";
    Weel.findOne({name: weelName},function(err, foundWeel){
        if (!err){
            if (!foundWeel){
                const weel = new Weel({
                    name :weelName,
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel0");
            }else{
                res.render("home", {
                    backgroundBox:background,
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
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel1");
            }else{
                res.render("home", {
                    backgroundBox:background,
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
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel2");
            }else{
                res.render("home", {
                    backgroundBox:background,
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
                    items: defaultUrls
                });
                weel.save();
                res.redirect("/weel3");
            }else{
                res.render("home", {
                    backgroundBox:background,
                    videoBox: foundWeel.items
                });
            }
        }
    })
})


///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
//  POST
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\

// Update  Weels
app.post("/", function(req, res){
    const UrlId = req.body.button;
    const inputUrl = req.body.postUrl; 

    switch (weelName) {
        case "weelDefault":
            ItemUrl.findOneAndUpdate({_id:UrlId}, {name: inputUrl},function(err, foundList){
                if(!err){
                    res.redirect("/");  
                }
            });
            break;
        case "weel0":   
            Weel.update(
                {"name" : "weel0", "items._id": UrlId },
                {"$set":{"items.$.name": inputUrl}},
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
                {"$set":{"items.$.name": inputUrl}},
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
                {"$set":{"items.$.name": inputUrl}},
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
                {"$set":{"items.$.name": inputUrl}},
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


// weel puttons hub
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
})


// after copying
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

// Copy
app.post("/copy", function(req ,res){
    copyState;
    console.log(copyState);
    if (req.body.copy != "on"){
        copyState = 0;
    }else{
        copyState = 1;
    }
});
///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\



// PORT
app.listen(3000, function(){
    console.log("Listening on port 3000");
});


