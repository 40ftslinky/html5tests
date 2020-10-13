(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[917,209,252,65],[0,0,1236,207],[1238,0,600,405],[0,209,915,108]]},
		{name:"index_atlas_NP_", frames: [[0,0,1940,500]]}
];


// symbols:



(lib.cta_970x250 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image_towing_970x250 = function() {
	this.initialize(ss["index_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo_970x250_v2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-225.1,-40)).s().p("EgjKACMIAAkXMBGVAAAIAAEXg")
	}.bind(this);
	this.shape.setTransform(602.425,177.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.3,163.6,450.3,27.900000000000006);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-225.1,-13)).s().p("EgjKACCIAAkDMBGVAAAIAAEDg")
	}.bind(this);
	this.shape.setTransform(602.025,168.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(376.9,155,450.30000000000007,26.099999999999994);


(lib.text2_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-453.9,-27)).s().p("AgjEOIAAobIBHAAIAAIbg")
	}.bind(this);
	this.shape.setTransform(654.675,182.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(651.1,155.6,7.199999999999932,54);


(lib.text1c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-151.9,-152.3)).s().p("A2lHnIAAvNMAtLAAAIAAPNg")
	}.bind(this);
	this.shape.setTransform(410.75,49.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.2,1.3,289.2,97.4);


(lib.text1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-155.6,-90.5)).s().p("A2jC0IAAlnMAtHAAAIAAFng")
	}.bind(this);
	this.shape.setTransform(418.25,115.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.9,97.3,288.80000000000007,36.000000000000014);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-155.5,-36.5)).s().p("A2kFtIAArZMAtJAAAIAALZg")
	}.bind(this);
	this.shape.setTransform(416.375,60.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.9,24.3,289,73);


(lib.logo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo_970x250_v2();
	this.instance.parent = this;
	this.instance.setTransform(119.05,13,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.1,13,525.3,88);


(lib.image_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_towing_970x250();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,970,250);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.disclaimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEIAAAAIgGANIgHgFIAKgKIAAgBIgOgBIADgIIANAGIAAAAIgDgOIAIAAIgCAOIAAAAIANgHIADAJIgOABIAKALIgHAFg");
	this.shape.setTransform(4.725,6.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAYQgEgBgDgEQgDgDgBgFQgCgFAAgGQAAgFACgFQABgFADgDQADgDAEgCQAEgCAEAAQAFAAAEACQAEACADADQADADABAFQACAFAAAFQAAAGgCAFQgBAFgDADQgDAEgEABQgEACgFAAQgEAAgEgCgAgHgLQgCAEAAAHQAAAJACAEQADAEAEAAQAFAAACgEQADgEAAgJQAAgHgDgEQgCgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(86.725,9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAjIAAgxIALAAIAAAxgAgFgXIAAgLIALAAIAAALg");
	this.shape_2.setTransform(83,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAfQgDgDAAgFIAAgeIgHAAIAAgKIAHAAIAAgQIALAAIAAAQIAJAAIAAAKIgJAAIAAAcIAAADIAEABIADgBIACAAIAAAJIgEAAIgFABQgFAAgDgDg");
	this.shape_3.setTransform(80,8.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAZIgFgDIgCgEIgBgFQAAgJAIgEQAGgEAOgCIAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgCgBgEAAQgDAAgCACIgFAEIgHgGIADgEIAEgDIAGgBIAEgBIAJABQAEABADADQACACABAEIABAJIAAAXIABAEIAAADIgMAAIgBgEIgHAEQgDABgEAAIgGgBgAACACIgEACQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIADgCIADgBIACgCIAAgLIgGABg");
	this.shape_4.setTransform(75.85,9.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAaIAAgyIALAAIAAAJQACgFADgCQADgCAGgBIAAANIgBAAIgCAAIgEABIgDADIgDACIAAACIAAAeg");
	this.shape_5.setTransform(72.225,9.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAYQgEgBgDgEQgCgDgCgFQgBgFAAgGQAAgFABgFQACgFACgDQAEgDADgCQAFgCADAAQAGAAADACQAFACACADIAEAHIABAJIAAAEIgdAAQAAAIADADQADAEADAAQAEAAADgCIAFgEIAIAFQgDAFgFADQgGACgHAAQgEAAgEgCgAgGgNQgCADAAAFIASAAQAAgFgDgDQgCgDgFAAQgDAAgDADg");
	this.shape_6.setTransform(64.95,9.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAjIAAhFIALAAIAABFg");
	this.shape_7.setTransform(61.3,8.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJAZIgJgPIgHAPIgNAAIAOgZIgOgYIAOAAIAGAOIAHgOIANAAIgOAYIAPAZg");
	this.shape_8.setTransform(57.8,9.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAZIgFgDIgCgEIgBgFQAAgJAHgEQAIgEANgCIAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgBgEAAQgCAAgDACIgEAEIgIgGIADgEIAFgDIAFgBIAEgBIAKABQADABADADQACACABAEIABAJIAAAXIAAAEIABADIgLAAIgBgEIgIAEQgCABgFAAIgGgBgAACACIgEACQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIADgCIADgBIACgCIAAgLIgGABg");
	this.shape_9.setTransform(53.05,9.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAjIAAgLIADgGIAHgGIAIgHIAHgGIAFgGQADgEAAgDQAAgFgDgDQgDgCgFAAQgEAAgDADQgDAEgBAEIgLgCIADgIIAFgGIAHgEQAEgBADAAQAGAAADABIAHAEQAEADACADQACAEAAAFQgBAGgCAFQgDAEgEAEIgLAJIgMAKIAhAAIAAALg");
	this.shape_10.setTransform(44.8,8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAjQgEgBgEgEIAFgKIAFAEQADABAEABQAEgBACgBIAFgFQADgCABgFQABgEAAgEIgHAEQgDACgEAAQgFAAgEgCQgEgBgDgEIgEgFQgCgFAAgFQAAgFACgEQACgFADgDQAEgDAEgCQAFgBAEAAQAFAAAFACQAFACADAEQADAEACAGQACAGAAAIQAAAIgCAHQgCAIgEAFQgEAGgFACQgGADgGAAQgFAAgEgBgAgIgVQgDADAAAGQAAAGADADQADADAFAAQAIAAAEgIIgBgHQgBgDgCgCIgEgEIgEgBQgFABgDADg");
	this.shape_11.setTransform(38.825,8.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_12.setTransform(34.475,10.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAjIgHgCIgGgFIgFgFIAKgGQADAEADADQAEACAEAAIAFgBIADgCIADgEIABgEQAAgEgCgDQgCgCgDgBQgDgCgDAAIgHAAIAAgKIAHAAIAFgBIAEgDQACgCAAgDQAAgEgDgCQgDgCgEgBQgEAAgDACIgGAFIgIgHQAFgGAGgCQAFgCAFAAQAEAAAEABQAFABADADIAFAFQABADAAAFQAAAFgCAEQgDAEgFACQAGACADAEQAEAEAAAHQAAAFgCAFQgDAEgDACQgDACgFACQgEABgFAAIgGgBg");
	this.shape_13.setTransform(29.875,8.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAJAjIAAghQAAgEgCgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgDAAgDACIgFAEIAAAjIgMAAIAAhFIAMAAIAAAZIAHgEQADgCAEgBQAIAAADAGQAEAEAAAGIAAAjg");
	this.shape_14.setTransform(21.425,8.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAfQgCgDAAgFIAAgeIgHAAIAAgKIAHAAIAAgQIAKAAIAAAQIAKAAIAAAKIgKAAIAAAcIABADIAEABIADgBIACAAIAAAJIgEAAIgFABQgGAAgDgDg");
	this.shape_15.setTransform(17.1,8.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAjIAAgxIALAAIAAAxgAgFgXIAAgLIALAAIAAALg");
	this.shape_16.setTransform(14.2,8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAIAZIgIgeIAAAAIgGAeIgLAAIgNgxIALAAIAHAeIAHgeIALAAIAHAeIAHgeIALAAIgNAxg");
	this.shape_17.setTransform(9.625,9.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.9,16.6);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta_970x250();
	this.instance.parent = this;
	this.instance.setTransform(317.5,5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(317.5,5.5,126,32.5);


(lib.texty2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// disclaimer
	this.instance = new lib.disclaimer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-19.8,202.9,1,1,0,0,0,46,8.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({alpha:1},14).wait(26));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkfAEiIAApDMBI/AAAIAAJDg");
	mask.setTransform(596.925,181.65);

	// Layer_3
	this.instance_1 = new lib.text2b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(546.8,27.55,1,1,0,0,0,88.3,10);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({x:88.3},14,cjs.Ease.get(1)).wait(26));

	// Layer_2
	this.instance_2 = new lib.text2a("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(386.8,8.5,1,1,0,0,0,89.3,8.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:89.3},14,cjs.Ease.get(1)).wait(32));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EBAVAL8IAApEIBFAAIAAJEg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EBAVAM5IAApEIBFAAIAAJEg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EBAVANvIAApEIBFAAIAAJEg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EBAVAOdIAApEIBFAAIAAJEg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EBAVAPEIAApDIBFAAIAAJDg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EBAVAPlIAApEIBFAAIAAJEg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EBAVAP+IAApEIBFAAIAAJEg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EBAVAQQIAApEIBFAAIAAJEg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EBAVAQaIAApEIBFAAIAAJEg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EBAVAQeIAApEIBFAAIAAJEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:418.575,y:76.3998}).wait(1).to({graphics:mask_1_graphics_1,x:418.575,y:82.4862}).wait(1).to({graphics:mask_1_graphics_2,x:418.575,y:87.8566}).wait(1).to({graphics:mask_1_graphics_3,x:418.575,y:92.5109}).wait(1).to({graphics:mask_1_graphics_4,x:418.575,y:96.4492}).wait(1).to({graphics:mask_1_graphics_5,x:418.575,y:99.6714}).wait(1).to({graphics:mask_1_graphics_6,x:418.575,y:102.1776}).wait(1).to({graphics:mask_1_graphics_7,x:418.575,y:103.9677}).wait(1).to({graphics:mask_1_graphics_8,x:418.575,y:105.0418}).wait(1).to({graphics:mask_1_graphics_9,x:418.575,y:105.3998}).wait(51));

	// Layer_1
	this.instance_3 = new lib.text2_red("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(179.55,18.8,1,1,0,0,0,3.5,18.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,0,900.1999999999999,211.2);


(lib.texty1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("A/PQaMAAAggzMA+fAAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:518,y:123.6}).wait(76));

	// Layer_4
	this.instance = new lib.text1a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-124.65,49.5,1,1,0,0,0,119.3,49.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:171.35},14,cjs.Ease.get(1)).wait(62));

	// Layer_3
	this.instance_1 = new lib.text1b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.45,63.5,1,1,0,0,0,125,63.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({x:175.05},14,cjs.Ease.get(1)).wait(55));

	// Layer_2
	this.instance_2 = new lib.text1c("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-118.25,188.55,1,1,0,0,0,123.2,61.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({x:176.75},14,cjs.Ease.get(1)).wait(48));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AXIQBMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AXIQjMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AXIRHMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AXIRhMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AXIRxMAAAggBIB4AAMAAAAgBg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AXIR2MAAAggBIB4AAMAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:160,y:-79.056}).wait(1).to({graphics:mask_1_graphics_1,x:160,y:-50.8162}).wait(1).to({graphics:mask_1_graphics_2,x:160,y:-24.6682}).wait(1).to({graphics:mask_1_graphics_3,x:160,y:-0.6121}).wait(1).to({graphics:mask_1_graphics_4,x:160,y:21.3522}).wait(1).to({graphics:mask_1_graphics_5,x:160,y:41.2246}).wait(1).to({graphics:mask_1_graphics_6,x:160,y:59.0052}).wait(1).to({graphics:mask_1_graphics_7,x:160,y:74.694}).wait(1).to({graphics:mask_1_graphics_8,x:160,y:88.291}).wait(1).to({graphics:mask_1_graphics_9,x:160,y:99.7961}).wait(1).to({graphics:mask_1_graphics_10,x:160,y:105.8517}).wait(1).to({graphics:mask_1_graphics_11,x:160,y:109.5124}).wait(1).to({graphics:mask_1_graphics_12,x:160,y:112.1272}).wait(1).to({graphics:mask_1_graphics_13,x:160,y:113.6961}).wait(1).to({graphics:mask_1_graphics_14,x:160,y:114.219}).wait(76));

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-3.6,-100.5)).s().p("AgkPtIAA/ZIBJAAIAAfZg")
	}.bind(this);
	this.shape.setTransform(316.1,125.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,612.9,225.8);


// stage content:
(lib.RAM_towing_970x250_02 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

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
	this.instance_1.setTransform(152,197,1,1,0,0,0,48,12.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(321).to({_off:false},0).to({y:177,alpha:1},15,cjs.Ease.get(1)).wait(46));

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
	this.instance_4.setTransform(485,125,3.2333,1,0,0,0,150,125);
	this.instance_4.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(220));

	// image1
	this.instance_5 = new lib.image_main("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(291).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,124,487,127);
// library properties:
lib.properties = {
	id: 'F89F51673FB59B419C72F389715AFE27',
	width: 970,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_.png?1568793644897", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg?1568793644897", id:"index_atlas_NP_"}
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