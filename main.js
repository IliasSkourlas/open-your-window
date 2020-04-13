initialHidden();
openSidenav();
closeSidenav();

giveId();
giveInputId();

// ReplaceBackgroundVideo();
// VARIABLES // // VARIABLES // // VARIABLES // // VARIABLES //
let dayNumber = 0;

let all = "&autoplay=1&loop=1&controls=0&mute=1";
let control = "&autoplay=1&loop=1&controls=1&mute=1";
let still = "&autoplay=0&loop=1&controls=0";
let mute = "&mute=1";
let unmute = "&mute=0";


// variables & Arrais of videos //
// let testV1 = ""; 
// testV1 = ChangeVar();
// let testV1 =  `${ChangeVar()}`;
let thisWeelIndex = 0;
let thisVideoId = 1;
let thisInputId = "i7";
let replacement;
let backgroundVideo = embed("https://www.youtube.com/embed/4l7Uw-o-RC4?", all, "4l7Uw-o-RC4");
let empty = embed("https://?");
let talkToParot = embed("https://www.youtube.com/embed/v1P0cAzXR6g?", all, "v1P0cAzXR6g" );
let bookipia = embed("http://bookipia.com?");
let wikiCorona = embed("https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic");
let superCute = embed("https://www.youtube.com/embed/4l7Uw-o-RC4?", all, "4l7Uw-o-RC4");
let realBirds = embed("https://www.youtube.com/embed/PwylW_sUfQY?", all, "PwylW_sUfQY");
let kittenCuteness = embed("https://www.youtube.com/embed/dzFKG6rkWpU?", all, "dzFKG6rkWpU");
let chen = embed("https://www.youtube.com/embed/Iwpr55PZEJ8?", all, "Iwpr55PZEJ8");

// embed string with control
let talkToParotControl = embed("https://www.youtube.com/embed/v1P0cAzXR6g?", control, "v1P0cAzXR6g" );
let superCuteControl = embed("https://www.youtube.com/embed/4l7Uw-o-RC4?", control, "4l7Uw-o-RC4");
let realBirdsControl = embed("https://www.youtube.com/embed/PwylW_sUfQY?", control, "PwylW_sUfQY");
let kittenCutenessControl = embed("https://www.youtube.com/embed/dzFKG6rkWpU?", control, "dzFKG6rkWpU");
let chenControl = embed("https://www.youtube.com/embed/Iwpr55PZEJ8?", control, "Iwpr55PZEJ8");

// embed string with still
let talkToParotStill = embed("https://www.youtube.com/embed/v1P0cAzXR6g?", still, "v1P0cAzXR6g" );
let superCuteStill = embed("https://www.youtube.com/embed/4l7Uw-o-RC4?", still, "4l7Uw-o-RC4");
let realBirdsStill = embed("https://www.youtube.com/embed/PwylW_sUfQY?", still, "PwylW_sUfQY");
let kittenCutenessStill = embed("https://www.youtube.com/embed/dzFKG6rkWpU?", still, "dzFKG6rkWpU");
let chenStill = embed("https://www.youtube.com/embed/Iwpr55PZEJ8?", still, "Iwpr55PZEJ8");

// //
let touchMe = embed("https://www.youtube.com/embed/4l7Uw-o-RC4?", all, "4l7Uw-o-RC4");


let emptyWeel =[
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty
];
let thirdArray =[
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty,
	empty, empty, empty, empty
];
let firstWeel = [
	talkToParot,wikiCorona,bookipia,talkToParot,
	superCute,superCute,realBirds,kittenCuteness,
	realBirds,superCute,talkToParot,chen,
	bookipia,bookipia,realBirdsStill,realBirds,

	talkToParotStill,realBirds,realBirdsStill,chen,
	superCute,realBirds,talkToParot,bookipia,
	realBirdsStill,realBirdsStill,realBirds,realBirds,
	superCute,realBirds,talkToParotStill,chen,

	// talkToParot,chenStill,chen,superCuteStill
];

// general Wheel //
let aljazeera = embed("https://www.youtube.com/embed/WisZM9CMlTo", control)
let duckduckgo = "https://duckduckgo.com/search.html?prefill=Search DuckDuckGo";
let skyNews = embed("https://www.youtube.com/embed/9Auq9mYxFEE", control);
let bloomberg = embed("https://www.bloomberg.com/markets/commodities");
let ert = embed("https://webtv.ert.gr/ert1-live/");
let coindesk = embed("https://www.coindesk.com/price/bitcoin");
let aida = embed("https://www.youtube.com/embed/6_MD_Wo0kjY?", still);
let threejs =  "https://threejs.org/examples/#webgl_helpers";
let techcrunch = "https://techcrunch.com/"

let generalWeel = [
	bookipia, bookipia, superCute, skyNews,
	aljazeera, bloomberg, ert, coindesk, 
	duckduckgo, empty, empty, threejs,
	techcrunch, empty, empty, empty


];
	
// an array of all the arrays  //
let allWeels = [emptyWeel, firstWeel, generalWeel, thirdArray];
// an array for the initial background video //
let initialArray = [superCute, superCute, threejs, bookipia];

InitialBackgroundVideo();



//EVENT LISTENERS // //EVENT LISTENERS // //EVENT LISTENERS // 

// Sidenav open //
function initialHidden() {
	$(document).ready(function(){
		
		$(".leftMenu").css("width", "0%");
		$(".memoryButtons").css("visibility", "hidden");
		$(".inputSearch").css("visibility", "hidden");
		$("button .enterLink").css("visibility", "hidden");
		$(" #submit ").css("visibility", "hidden");
	});
}

function openSidenav() {
	$("#hoverSpot").hover(function(){
		$(".leftMenu").css("width", "25%");
		$(".memoryButtons").css("visibility", "visible");
		$(".enterLink").css("visibility", "visible");
		$(".enterLink").css("visibility", "visible");
	});
}

// Sidenav close //
function closeSidenav() {
	$(document).ready(function(){
		$("iframe").mouseenter(function(){
			$(".leftMenu").css("width", "0%");
			$(".memoryButtons").css("visibility", "hidden");
			$(".inputSearch").css("visibility", "hidden");
			$("button .enterLink").css("visibility", "hidden");
			$("#submit ").css("visibility", "hidden");
		});	
	});
}


// FUNCTIONS // // FUNCTIONS // // FUNCTIONS // // FUNCTIONS // 

// add the embed link together //
function embed(link, midle, tale){
	return link + "?" + midle + "&playlist=" + tale;
}

// Click this memory button to choose a video array //
function Loader(x){
	thisWeelIndex = x;
	let w =  allWeels[x];
	let n = w.length;
	let arrayV = vTag(n);
	var i;
	for (i = 0; i < n; i++) {
		videoFunction(arrayV[i], w[i]); 
	}
	InitialBackgroundVideo();
}

// create an array of a ids //
function vTag(x){
	let myArray = [];
	var l = "";
	var i;
	for (i = 0; i < x+1; i++) {
		myArray[i] = l + "v" + i ;
	}
	//delete V0 from 0 position //
	myArray.shift();
	return myArray;
};

// compine the id with the link (var one = video id, var two = link) //
function videoFunction(a, b) {
	let x = document.getElementById(a);
	if (x) {
		x.src = b;
	}
	else {
		console.log("there is no: "+a+" id");
	}
}

// find elements id //
function giveId(){
	$(document).ready(function(){
		$('.position').click(function() {
			thisVideoId = Number(this.id);
			// alert(thisVideoId);
		});
	});
}

function giveInputId(){
	$(document).ready(function(){
		$('.inputId').click(function() {
			thisInputId = this.id;
			// alert(thisInputId);
		});
	});
}

// get link from window//
function ReplaceBackgroundVideo(){
	replacement = document.getElementById("writeLink").value;
	let currentWeel = allWeels[thisWeelIndex];
	currentWeel[(thisVideoId - 1)] =  replacement; 
	Loader(thisWeelIndex);
}


// replace grid Videos
function ReplaceGridVideo(){
	$(document).ready(function(){
		replacement = document.getElementById(thisInputId).value;
		let currentWeel = allWeels[thisWeelIndex];
		currentWeel[(thisVideoId - 1)] =  replacement; 
		Loader(thisWeelIndex);
	});	
}

// initial background video
function InitialBackgroundVideo(){
	$(document).ready(function(){
		let backgroundVideo = initialArray[thisWeelIndex];
		$("#background").attr("src", backgroundVideo);
	});	
};

// replace background video
function ReplaceBackgroundVideo(){
	$(document).ready(function(){
		let currentWeel = allWeels[thisWeelIndex];
		$("#background").attr("src", currentWeel[thisVideoId - 1]);
	});	
}



// count as you reapeat weel spins //
function counter(){
	dayNumber += 1;
	var x = document.getElementsByClassName("Time");
  	x[0].innerHTML = dayNumber;
}








// visability hidden from hover on any iframe //
// function hiddenFunction() {
// 	$('iframe').hover(function () {
// 		$(this).css("visibility", "hidden");
// 	});
// 	$('iframe').mouseout(function () {
// 		$(this).css("visibility", "visible");
// 	});
// }






// RANDOM // 
// number = 7

// var randomArray1 = [talkToParot,bookipia,wikiCorona,superCute,realBirds,kittenCuteness,chen];
// function randomChooser(x) {
// 	return Math.floor(Math.random()* x);
// }
// LoaderRandom(20, randomArray1);
// function LoaderRandom(x, videoWeel){
	// 	var i;
	// 	for (i = 0; i < x; i++) {
		// 		videoFunction(arrayVTag[i], videoWeel[randomChooser(videoWeel.length)]); 
		// 	}	
		// };
		
// var randomArray1 = [talkToParot, realBirds, superCute, bookipia, realBirds, kittenCuteness, chen];
// function randomChooser(x) {
	// 	return Math.floor(Math.random() * 7);
	// }
	
	// videoFunction("r1", randomArray1[randomChooser()]);
	// videoFunction("r2", randomArray1[randomChooser()]);
	// videoFunction("r3", randomArray1[randomChooser()]);
	// videoFunction("r4", randomArray1[randomChooser()]);



// X & Y //

// window.addEventListener('mousemove', function (e) {
//     document.getElementById('x-value').textContent = e.x;
//     document.getElementById('y-value').textContent = e.y;
// });


// LOOP //			
const loop = [];let state
const scr = _ => window.pageYOffset
document.addEventListener("DOMContentLoaded", _ => {
  loop.push(document.querySelector('.video-container>.loop'))
	loop.push(loop[0].cloneNode(true))
	const wrapper = loop[0].parentNode
	const height = loop[0].scrollHeight
	loop.forEach((l,i) => {
		l.style.height = `${height}px`
		l.style.top = `${height*i}px`
	})
	wrapper.appendChild(loop[1])
	
	const currLoop = Symbol('loop')
	state = {
		[currLoop]: 0,
		get otherLoop() {return loop[state[currLoop]=(this[currLoop]+1)%2]},
		get loopScroll() {
			const cE = this.currElement
			return cE.scrollHeight+cE.offsetTop
		},
		get currElement() {return loop[this[currLoop]]},
		get currIndex() {return this[currLoop]},
		get goingDown() {return state.previous <= scr()},
		renderNext(scrollAmt) {
			
			counter()
			console.log('Render next loop1',{current: scr(), target: scrollAmt})
			const cLoop = state.otherLoop
			cLoop.style.top = `${scrollAmt}px`
			document.body.style.height = `${scrollAmt+height*2}px`
		},
		renderPrev(scrollAmt) {
			
			console.log('Render prev loop',{current: scr(), target: scrollAmt})
			const cLoop = state.otherLoop
			cLoop.style.top = `${scrollAmt-2*height}px`
			document.body.style.height = `${scrollAmt+height*2}px`
		},
	}
	window.addEventListener('scroll', e => {
		const scrollAmt = state.loopScroll
		console.log({current: scr(), target: scrollAmt})
		if (state.goingDown && scr() > scrollAmt-.2*height) state.renderNext(scrollAmt) 
		else if (!state.goingDown && scr() < scrollAmt-.8*height) state.renderPrev(scrollAmt)
		
		state.previous = scr()
	})
})