var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("0A9BD850E336DA4391F8FDB920399559");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.motion();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(true,'both',true,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}





(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"motion_atlas_", frames: [[0,0,2997,2997],[0,2999,3333,688],[0,3689,1366,320]]}
];


// symbols:



(lib.football = function() {
	this.spriteSheet = ss["motion_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.grass1 = function() {
	this.spriteSheet = ss["motion_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ground = function() {
	this.spriteSheet = ss["motion_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.soil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ground();
	this.instance.parent = this;
	this.instance.setTransform(-496,-232.4,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-496,-232.4,992,232.4);


(lib.grass1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.grass1();
	this.instance.parent = this;
	this.instance.setTransform(-438.5,-181,0.263,0.263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-438.5,-181,877,181);


(lib.football_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.football();
	this.instance.parent = this;
	this.instance.setTransform(-50,-100,0.033,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-100,100,100);


// stage content:
(lib.motion = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// grass1
	this.instance = new lib.grass1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(479.7,314.6,1.14,1.14,0,0,0,-0.1,-90.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1));

	// Text
	this.text = new cjs.Text("Fun, Fitness and Family", "33px 'Papyrus'", "#0000CC");
	this.text.lineHeight = 54;
	this.text.lineWidth = 371;
	this.text.parent = this;
	this.text.setTransform(122.1,100.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(23).to({_off:false},0).wait(1).to({x:160.4},0).wait(1).to({x:195.4},0).wait(1).to({x:227.2},0).wait(1).to({x:256},0).wait(1).to({x:281.9},0).wait(1).to({x:305.1},0).wait(1).to({x:325.7},0).wait(1).to({x:343.9},0).wait(1).to({x:359.8},0).wait(1).to({x:373.6},0).wait(1).to({x:385.4},0).wait(1).to({x:395.5},0).wait(1).to({x:403.8},0).wait(1).to({x:410.6},0).wait(1).to({x:416.1},0).wait(1).to({x:420.4},0).wait(1).to({x:423.6},0).wait(1).to({x:425.9},0).wait(1).to({x:427.4},0).wait(1).to({x:428.4},0).wait(1).to({x:428.8},0).wait(1).to({x:429.1},0).wait(2));

	// football
	this.instance_1 = new lib.football_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,271,1,1,0,0,0,0,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-49.9,rotation:21.5,x:202.7,y:266.4},10).to({regY:-50.1,rotation:75,x:384.1,y:260.1},13).to({rotation:120,x:494.1},6).to({startPosition:0},17).wait(1));

	// soil
	this.instance_2 = new lib.soil("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(474.6,344.2,0.957,0.957,0,0,0,0.1,-116.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(454.3,411.6,1000,243.9);
// library properties:
lib.properties = {
	id: '0A9BD850E336DA4391F8FDB920399559',
	width: 949,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/motion_atlas_.png", id:"motion_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0A9BD850E336DA4391F8FDB920399559'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;