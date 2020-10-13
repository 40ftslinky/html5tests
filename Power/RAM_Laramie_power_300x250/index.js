(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[602,406,192,50],[602,0,240,327],[0,0,600,500],[602,329,366,75]]},
		{name:"index_atlas_NP_", frames: [[0,0,600,500]]}
];


// symbols:



(lib.CTA_300x250 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image_power = function() {
	this.initialize(ss["index_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo_300x250_v2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text1_power_300x250 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.text2_power_300x250 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-88.3,-27.5)).s().p("AtyBkIAAjHIblAAIAADHg")
	}.bind(this);
	this.shape.setTransform(88.275,9.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.6,20);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-89.3,-8.5)).s().p("At8BVIAAipIb5AAIAACpg")
	}.bind(this);
	this.shape.setTransform(89.275,8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.6,17.1);


(lib.text2_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-179.5,-18.7)).s().p("AgdC8IAAjHIgFAAIAAgFIAZAAIAAirIAsAAIAAF3g")
	}.bind(this);
	this.shape.setTransform(3.475,18.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,37.5);


(lib.text1c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-176.8,-188.5)).s().p("AzPJnIAAzNMAmfAAAIAATNg")
	}.bind(this);
	this.shape.setTransform(123.225,61.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246.5,123);


(lib.text1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-175,-63.5)).s().p("AzhJ7IAAz1IAUAAIAAPdMAlQAAAIAAvdIBfAAIAAT1g")
	}.bind(this);
	this.shape.setTransform(124.975,63.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,127.1);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-171.3,-49.5)).s().p("AyoHvIAAvdMAlRAAAIAAPdg")
	}.bind(this);
	this.shape.setTransform(119.25,49.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.5,99.1);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo_300x250_v2();
	this.instance.parent = this;
	this.instance.setTransform(-17,-25.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-25.7,120,163.5);


(lib.image_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_power();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CTA_300x250();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,25);


(lib.texty2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvADwIAAnfIeBAAIAAHfg");
	mask.setTransform(84.325,19.25);

	// Layer_3
	this.instance = new lib.text2b("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(270.05,27.55,1,1,0,0,0,88.3,10);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({x:88.3},14,cjs.Ease.get(1)).wait(25));

	// Layer_2
	this.instance_1 = new lib.text2a("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(179.3,8.5,1,1,0,0,0,89.3,8.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:89.3},14,cjs.Ease.get(1)).wait(32));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ANZDNIAAmbIBFAAIAAGbg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ANZDOIAAmbIBFAAIAAGbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:92.6,y:-20.725}).wait(1).to({graphics:mask_1_graphics_1,x:92.6,y:-12.5139}).wait(1).to({graphics:mask_1_graphics_2,x:92.6,y:-5.1806}).wait(1).to({graphics:mask_1_graphics_3,x:92.6,y:1.175}).wait(1).to({graphics:mask_1_graphics_4,x:92.6,y:6.5528}).wait(1).to({graphics:mask_1_graphics_5,x:92.6,y:10.9528}).wait(1).to({graphics:mask_1_graphics_6,x:92.6,y:14.375}).wait(1).to({graphics:mask_1_graphics_7,x:92.6,y:16.8194}).wait(1).to({graphics:mask_1_graphics_8,x:92.6,y:18.2861}).wait(1).to({graphics:mask_1_graphics_9,x:92.6,y:18.775}).wait(51));

	// Layer_1
	this.instance_2 = new lib.text2_red("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.55,18.8,1,1,0,0,0,3.5,18.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,37.5);


(lib.texty1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvQPcIAA3bMAl4AAAIAAXbg");
	mask.setTransform(144.75,98.775);

	// Layer_4
	this.instance = new lib.text1a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-37.15,49.5,1,1,0,0,0,119.3,49.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:171.35},14,cjs.Ease.get(1)).wait(62));

	// Layer_3
	this.instance_1 = new lib.text1b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.95,63.5,1,1,0,0,0,125,63.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({x:175.05},14).wait(55));

	// Layer_2
	this.instance_2 = new lib.text1c("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-33.25,188.55,1,1,0,0,0,123.2,61.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({x:176.75},14,cjs.Ease.get(1)).wait(48));

	// mask_line (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ACFMMIAA4XIB4AAIAAYXg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ACFMMIAA4XIB4AAIAAYXg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ACFMMIAA4XIB4AAIAAYXg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ACFMMIAA4XIB4AAIAAYXg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ACFMMIAA4XIB4AAIAAYXg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ACFMMIAA4XIB4AAIAAYXg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ACFMMIAA4XIB4AAIAAYXg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ACFMpIAA4XIB4AAIAAYXg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ACFNcIAA4XIB4AAIAAYXg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ACFOHIAA4XIB4AAIAAYXg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ACFOqIAA4XIB4AAIAAYXg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ACFPFIAA4XIB4AAIAAYXg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ACFPZIAA4XIB4AAIAAYXg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ACFPkIAA4XIB4AAIAAYXg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ACFPoIAA4XIB4AAIAAYXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:25.275,y:-30.95}).wait(1).to({graphics:mask_1_graphics_1,x:25.275,y:-9.8735}).wait(1).to({graphics:mask_1_graphics_2,x:25.275,y:9.6418}).wait(1).to({graphics:mask_1_graphics_3,x:25.275,y:27.5959}).wait(1).to({graphics:mask_1_graphics_4,x:25.275,y:43.9888}).wait(1).to({graphics:mask_1_graphics_5,x:25.275,y:58.8204}).wait(1).to({graphics:mask_1_graphics_6,x:25.275,y:72.0908}).wait(1).to({graphics:mask_1_graphics_7,x:25.275,y:80.9}).wait(1).to({graphics:mask_1_graphics_8,x:25.275,y:85.974}).wait(1).to({graphics:mask_1_graphics_9,x:25.275,y:90.2673}).wait(1).to({graphics:mask_1_graphics_10,x:25.275,y:93.7801}).wait(1).to({graphics:mask_1_graphics_11,x:25.275,y:96.5122}).wait(1).to({graphics:mask_1_graphics_12,x:25.275,y:98.4638}).wait(1).to({graphics:mask_1_graphics_13,x:25.275,y:99.6347}).wait(1).to({graphics:mask_1_graphics_14,x:25.275,y:100.025}).wait(76));

	// line
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-26.8,-125)).s().p("AkLTiMAAAgnDIH0AAIAAT2IAjAAIAATNg")
	}.bind(this);
	this.shape.setTransform(26.775,125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.6,0,250.9,200.1);


// stage content:
(lib.RAM_power_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		loop = 0;
	}
	this.frame_381 = function() {
		//loop++
		
		//if (loop < 2) {
		//	this.gotoAndPlay(2)
		//} else {
		//	this.stop();
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(381).call(this.frame_381).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(382));

	// RAM_logo
	this.instance = new lib.logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(152,96,1,1,0,0,0,43.5,48);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(307).to({_off:false},0).to({alpha:1},14).wait(61));

	// CTA
	this.instance_1 = new lib.cta("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152,237,1,1,0,0,0,48,12.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(321).to({_off:false},0).to({y:217,alpha:1},15,cjs.Ease.get(1)).wait(46));

	// text2
	this.instance_2 = new lib.texty2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(184,39.05,1,1,0,0,0,91.5,18.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off:false},0).wait(130).to({mode:"single",startPosition:59},0).to({alpha:0},15).to({_off:true},1).wait(75));

	// text1
	this.instance_3 = new lib.texty1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({mode:"single",startPosition:89},0).to({alpha:0},15).to({_off:true},1).wait(235));

	// fade_black
	this.instance_4 = new lib.fade("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(220));

	// image1
	this.instance_5 = new lib.image_main("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(291).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,152,127);
// library properties:
lib.properties = {
	id: 'F89F51673FB59B419C72F389715AFE27',
	width: 300,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_.png?1568787372605", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg?1568787372605", id:"index_atlas_NP_"}
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
an.compositions['F89F51673FB59B419C72F389715AFE27'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;