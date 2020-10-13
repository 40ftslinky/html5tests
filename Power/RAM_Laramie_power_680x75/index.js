(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[1006,249,208,54],[595,137,656,110],[0,0,593,402],[595,0,1297,135],[595,249,409,88],[1253,137,550,120]]},
		{name:"index_atlas_NP_", frames: [[0,0,1456,180]]}
];


// symbols:



(lib.cta_728x90 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image_power_728x90 = function() {
	this.initialize(ss["index_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo_728x90_v2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.text1pngcopy = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.text2pngcopy = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.text2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],4);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-99.1,-32.3)).s().p("AvfB1IAAjpIe/AAIAADpg")
	}.bind(this);
	this.shape.setTransform(512.9,14.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.8,2.9,198.3,23.400000000000002);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],4);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-99.1,-10.3)).s().p("AvfBnIAAjNIe/AAIAADNg")
	}.bind(this);
	this.shape.setTransform(512.4,10.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.3,0.5,198.3,20.6);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-107.3,-33.7)).s().p("Av/FSIAAqiIf/AAIAAKig")
	}.bind(this);
	this.shape.setTransform(85.675,48.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,14.3,204.79999999999998,67.5);


(lib.power = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-576,-33.7)).s().p("ArUFSIAAqjIWpAAIAAKjg")
	}.bind(this);
	this.shape.setTransform(72.475,33.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,67.5);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo_728x90_v2();
	this.instance.parent = this;
	this.instance.setTransform(25.85,-28,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.9,-28,328,55);


(lib.image_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_power_728x90();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,728,90);


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
	this.instance = new lib.cta_728x90();
	this.instance.parent = this;
	this.instance.setTransform(314.5,-148,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(314.5,-148,104,27);


(lib.texty2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3/EiIAApDMAv/AAAIAAJDg");
	mask.setTransform(461.225,24.5);

	// Layer_3
	this.instance = new lib.text2b("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(356.8,27.55,1,1,0,0,0,88.3,10);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:88.3},14,cjs.Ease.get(1)).wait(26));

	// Layer_2
	this.instance_1 = new lib.text2a("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.8,8.5,1,1,0,0,0,89.3,8.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:89.3},14,cjs.Ease.get(1)).wait(32));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EAvVAEfIAApDIBFAAIAAJDg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAvVAEiIAApDIBFAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:309.825,y:-29.3}).wait(1).to({graphics:mask_1_graphics_1,x:309.825,y:-20.1557}).wait(1).to({graphics:mask_1_graphics_2,x:309.825,y:-11.8224}).wait(1).to({graphics:mask_1_graphics_3,x:309.825,y:-4.6002}).wait(1).to({graphics:mask_1_graphics_4,x:309.825,y:1.5109}).wait(1).to({graphics:mask_1_graphics_5,x:309.825,y:6.5109}).wait(1).to({graphics:mask_1_graphics_6,x:309.825,y:10.3998}).wait(1).to({graphics:mask_1_graphics_7,x:309.825,y:13.1776}).wait(1).to({graphics:mask_1_graphics_8,x:309.825,y:14.8443}).wait(1).to({graphics:mask_1_graphics_9,x:309.825,y:15.3998}).wait(51));

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],4);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-201.4,-22)).s().p("AgeDcIAAm3IA9AAIAAG3g")
	}.bind(this);
	this.shape.setTransform(614.85,22.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,618,44.4);


(lib.texty1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask_power (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_114 = new cjs.Graphics().p("AskFOIAAqbIZJAAIAAKbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(114).to({graphics:mask_graphics_114,x:615.75,y:47.675}).wait(36));

	// power
	this.instance = new lib.power("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(461.5,48.1,1,1,0,0,0,72.5,33.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({x:606.5},15,cjs.Ease.get(1)).wait(21));

	// mask_unrvalled (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_69 = new cjs.Graphics().p("AShGVIAAqaIAKAAIAAKag");
	var mask_1_graphics_70 = new cjs.Graphics().p("AhgFOIAAqbIDBAAIAAKbg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Ai8FOIAAqbIF5AAIAAKbg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AkZFOIAAqbIIzAAIAAKbg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Al1FOIAAqbILrAAIAAKbg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AnRFOIAAqbIOjAAIAAKbg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AotFOIAAqbIRbAAIAAKbg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AqJFOIAAqbIUTAAIAAKbg");
	var mask_1_graphics_77 = new cjs.Graphics().p("ArlFOIAAqbIXLAAIAAKbg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AtCFOIAAqbIaFAAIAAKbg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AueFOIAAqbIc9AAIAAKbg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Av6FOIAAqbIf1AAIAAKbg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AxWFOIAAqbMAitAAAIAAKbg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AyyFOIAAqbMAllAAAIAAKbg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A0OFOIAAqbMAodAAAIAAKbg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A1rFOIAAqbMArXAAAIAAKbg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A3HFOIAAqbMAuPAAAIAAKbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_1_graphics_69,x:119.5254,y:40.525}).wait(1).to({graphics:mask_1_graphics_70,x:247.7672,y:47.675}).wait(1).to({graphics:mask_1_graphics_71,x:256.9844,y:47.675}).wait(1).to({graphics:mask_1_graphics_72,x:266.2016,y:47.675}).wait(1).to({graphics:mask_1_graphics_73,x:275.4188,y:47.675}).wait(1).to({graphics:mask_1_graphics_74,x:284.6359,y:47.675}).wait(1).to({graphics:mask_1_graphics_75,x:293.8531,y:47.675}).wait(1).to({graphics:mask_1_graphics_76,x:303.0703,y:47.675}).wait(1).to({graphics:mask_1_graphics_77,x:312.2875,y:47.675}).wait(1).to({graphics:mask_1_graphics_78,x:321.5047,y:47.675}).wait(1).to({graphics:mask_1_graphics_79,x:330.7219,y:47.675}).wait(1).to({graphics:mask_1_graphics_80,x:339.9391,y:47.675}).wait(1).to({graphics:mask_1_graphics_81,x:349.1563,y:47.675}).wait(1).to({graphics:mask_1_graphics_82,x:358.3734,y:47.675}).wait(1).to({graphics:mask_1_graphics_83,x:367.5906,y:47.675}).wait(1).to({graphics:mask_1_graphics_84,x:376.8078,y:47.675}).wait(1).to({graphics:mask_1_graphics_85,x:386.025,y:47.675}).wait(65));

	// unrivalled
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-355.6,-33.7)).s().p("A3HFSIAAqiMAuPAAAIAAKig")
	}.bind(this);
	this.shape.setTransform(386.025,48.05);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(69).to({_off:false},0).wait(81));

	// Layer_7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_14 = new cjs.Graphics().p("EgzjAGQIAAsfMBnHAAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_2_graphics_14,x:363.6,y:47.2}).wait(136));

	// Layer_4
	this.instance_1 = new lib.text1a("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-475.65,49.5,1,1,0,0,0,119.3,49.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:171.35},24,cjs.Ease.get(1)).wait(112));

	// mask_idn (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_1 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_2 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_3 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_4 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_5 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_6 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_7 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_8 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_9 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_10 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_12 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_13 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");
	var mask_3_graphics_14 = new cjs.Graphics().p("ABGQBMAAAggBIB4AAMAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:19,y:-82.306}).wait(1).to({graphics:mask_3_graphics_1,x:19,y:-75.5904}).wait(1).to({graphics:mask_3_graphics_2,x:19,y:-69.3723}).wait(1).to({graphics:mask_3_graphics_3,x:19,y:-63.6516}).wait(1).to({graphics:mask_3_graphics_4,x:19,y:-58.4284}).wait(1).to({graphics:mask_3_graphics_5,x:19,y:-53.7027}).wait(1).to({graphics:mask_3_graphics_6,x:19,y:-49.4743}).wait(1).to({graphics:mask_3_graphics_7,x:19,y:-45.7435}).wait(1).to({graphics:mask_3_graphics_8,x:19,y:-42.5101}).wait(1).to({graphics:mask_3_graphics_9,x:19,y:-39.7741}).wait(1).to({graphics:mask_3_graphics_10,x:19,y:-37.5356}).wait(1).to({graphics:mask_3_graphics_11,x:19,y:-35.7945}).wait(1).to({graphics:mask_3_graphics_12,x:19,y:-34.5509}).wait(1).to({graphics:mask_3_graphics_13,x:19,y:-33.8047}).wait(1).to({graphics:mask_3_graphics_14,x:19,y:-33.556}).wait(136));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.5,0,0,0.5,-2.4,-33.7)).s().p("AgXFSIAAqiIAvAAIAAKig")
	}.bind(this);
	this.shape_1.setTransform(33.1,47.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.7,13.9,648.3,67.89999999999999);


// stage content:
(lib.RAM_power_680x75 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		loop = 0;
	}
	this.frame_449 = function() {
		//loop++
		
		//if (loop < 2) {
		//	this.gotoAndPlay(2)
		//} else {
		//	this.stop();
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(449).call(this.frame_449).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg1HgF2MBqPAAAIAALtMhqPAAAg");
	this.shape.setTransform(340,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(450));

	// RAM_logo
	this.instance = new lib.logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(142,85.2,0.9339,0.9339,0,0,0,43.6,48.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(375).to({_off:false},0).to({alpha:1},14).wait(61));

	// CTA
	this.instance_1 = new lib.cta("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(208,193.55,0.9339,0.9339,0,0,0,48.1,12.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(389).to({_off:false},0).to({y:174.85,alpha:1},15,cjs.Ease.get(1)).wait(46));

	// text2
	this.instance_2 = new lib.texty2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(171.8,31.95,0.9339,0.9339,0,0,0,91.5,18.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).wait(130).to({mode:"single",startPosition:59},0).to({alpha:0},15).to({_off:true},1).wait(75));

	// text1
	this.instance_3 = new lib.texty1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(140.1,112.25,0.9339,0.9339,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({mode:"single",startPosition:149},0).to({alpha:0},15).to({_off:true},1).wait(235));

	// fade_black
	this.instance_4 = new lib.fade("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(339.95,37.5,2.2662,0.3362,0,0,0,150,125);
	this.instance_4.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(220));

	// image1
	this.instance_5 = new lib.image_main("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(140.1,112.25,0.9339,0.9339,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(359).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339,32.6,342,46.99999999999999);
// library properties:
lib.properties = {
	id: 'F89F51673FB59B419C72F389715AFE27',
	width: 680,
	height: 75,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_.png?1568863762065", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg?1568863762065", id:"index_atlas_NP_"}
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