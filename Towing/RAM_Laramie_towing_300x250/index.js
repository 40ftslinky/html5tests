(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[602,329,192,50],[602,0,240,327],[0,0,600,500],[0,502,526,91]]},
		{name:"index_atlas_NP_", frames: [[0,0,600,500]]}
];


// symbols:



(lib.CTA_300x250 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image_towing_300x250 = function() {
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
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-134.7,-31.8)).s().p("A0CCIIAAkQMAnaAAAIAAAaIAqAAIAAAkIgEAAIAABtIxSAAIAABlg")
	}.bind(this);
	this.shape.setTransform(67,191.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,177.4,256.5,27.299999999999983);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-134.7,-9.1)).s().p("A0CBbIAAi1Ic1AAIAAAoILQAAIAACNg")
	}.bind(this);
	this.shape.setTransform(67.5,186.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,177,256.5,18.19999999999999);


(lib.text2_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-3.2,-22.7)).s().p("AggDjIAAnFIBBAAIAAHFg")
	}.bind(this);
	this.shape.setTransform(-240.5,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.7,177.3,6.5,45.5);


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
	this.instance = new lib.image_towing_300x250();
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


(lib.disclaimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEIAAAAIgFAKIgFgEIAIgIIAAgBIgMgBIADgGIAKAFIABAAIgDgMIAHAAIgDAMIABAAIAKgGIADAHIgMABIAIAJIgFAEg");
	this.shape.setTransform(4,5.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAUIgGgEIgDgHIgBgJIABgIIADgHQADgDADgBQADgCAEAAQAEAAAEACQADABACADIAEAHIABAIIgBAJIgEAHIgFAEQgEACgEAAQgEAAgDgCgAgFgJQgCADAAAGQAAAHACADQACAEADAAQAEAAACgEQACgDAAgHQAAgGgCgDQgCgEgEAAQgDAAgCAEg");
	this.shape_1.setTransform(71.85,7.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAdIAAgoIAJAAIAAAogAgEgTIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(68.75,6.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAZQgDgCAAgFIAAgXIgFAAIAAgIIAFAAIAAgOIAKAAIAAAOIAIAAIAAAIIgIAAIAAAWIABACIACABIACAAIADgBIAAAIIgEABIgEAAQgFAAgCgDg");
	this.shape_3.setTransform(66.3,7.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAVIgDgDIgDgDIAAgEQAAgIAGgDQAFgDAMgCIAAgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgCAAgCABIgEAEIgGgFIADgDIADgDIAFgBIADgBIAIABIAFADIADAFIAAAIIAAATIABADIAAADIgJAAIgBgEIgGADQgCACgEAAIgFgBgAACACIgEABIgDADIgBADIABAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIACAAIACgBIADgCIACgBIAAgJIgFABg");
	this.shape_4.setTransform(62.875,7.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAJAAIAAAHIABAAQABgEADgCQACgCAFAAIAAAKIgBAAIgCAAIgDABIgDACIgCACIAAACIAAAYg");
	this.shape_5.setTransform(59.85,7.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAUIgFgEIgDgHIgBgJIABgIIADgHQACgDAEgBQADgCAEAAQADAAAEACQADABACADIAEAGIABAHIAAAEIgZAAQABAGACADQACADADAAQADAAADgCIADgDIAIAEQgDAFgFACQgEACgGAAQgDAAgEgCgAgFgLQgCADAAAEIAQAAQgBgEgCgDQgCgCgDAAQgDAAgDACg");
	this.shape_6.setTransform(53.85,7.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_7.setTransform(50.8,6.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAHAVIgHgNIgGANIgKAAIAMgVIgMgUIALAAIAFAMIAGgMIALAAIgMAUIAMAVg");
	this.shape_8.setTransform(47.925,7.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAVIgDgDIgDgDIAAgEQAAgIAGgDQAFgDAMgCIAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgCAAgCABIgEAEIgGgFIADgDIADgDIAFgBIADgBIAIABIAFADIADAFIAAAIIAAATIABADIAAADIgJAAIgBgEIgGADQgCACgEAAIgFgBgAACACIgEABIgDADIgBADIABAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIACAAIACgBIADgCIACgBIAAgJIgFABg");
	this.shape_9.setTransform(44.025,7.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAdIAAgJIACgFIAGgFIAGgGIAGgFIAFgFQACgDAAgDQAAgDgCgDQgDgCgDAAQgEAAgDADQgCACgBAEIgJgCIACgGIAEgFIAGgDIAHgBIAHABIAGADIAEAFQABADAAAEQAAAGgCAEQgCADgEADIgJAIIgJAIIAaAAIAAAJg");
	this.shape_10.setTransform(37.2,6.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAcIgGgDIAEgIIAEADIAFABIAFgBIAFgEIADgGIABgHQgDADgDABIgGABIgHgBIgGgEQgCgDgBgCQgBgEAAgEQAAgEABgEQABgDADgDIAHgEIAHgBQAFAAADACQAEABACAEQAEADABAFQACAFgBAGQABAHgCAGQgCAGgDAFQgDAEgFACQgEADgGAAQgEAAgDgCgAgHgRQgDACABAFQgBAFADACQADADAEAAQAGAAAEgGIgBgHIgCgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgDgBQgEAAgDADg");
	this.shape_11.setTransform(32.25,6.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_12.setTransform(28.65,9.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAdIgGgCIgFgEIgEgFIAJgEQACADADACQADACADAAIADgBIAEgBIACgDIABgEQAAgDgCgCIgEgDIgFgBIgFgBIAAgHIAFAAIAEgCIAEgCIABgEQAAgDgDgCQgCgCgDAAQgDAAgCACIgGAEIgGgHQAEgEAFgCQAEgCAEAAIAHABIAGADIAEAFQACACAAAEQAAAEgDAEQgCADgEACQAFABADADQADAEAAAFQAAAFgCADQgCADgDACQgDADgEABIgHABIgFgBg");
	this.shape_13.setTransform(24.85,6.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAHAdIAAgbQAAgDgBgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgCABgDABIgDADIAAAdIgKAAIAAg5IAKAAIAAAVIAFgEQACgCAEAAQAGAAADAFQADADAAAGIAAAcg");
	this.shape_14.setTransform(17.875,6.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAZQgCgCAAgFIAAgXIgGAAIAAgIIAGAAIAAgOIAJAAIAAAOIAIAAIAAAIIgIAAIAAAWIABACIACABIACAAIADgBIAAAIIgEABIgEAAQgEAAgDgDg");
	this.shape_15.setTransform(14.3,7.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAdIAAgoIAJAAIAAAogAgEgTIAAgJIAJAAIAAAJg");
	this.shape_16.setTransform(11.9,6.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGAVIgGgZIgFAZIgJAAIgLgpIAJAAIAGAZIAGgZIAJAAIAFAZIAGgZIAKAAIgLApg");
	this.shape_17.setTransform(8.125,7.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.1,13.9);


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

	// disclaimer
	this.instance = new lib.disclaimer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(159,219.25,1,1,0,0,0,38,6.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({alpha:1},14).wait(26));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("A1cEDIAAoFMAq4AAAIAAIFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:71.75,y:199.875}).wait(46));

	// Layer_3
	this.instance_1 = new lib.text2b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-173.7,27.55,1,1,0,0,0,88.3,10);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({x:88.3},14,cjs.Ease.get(1)).wait(26));

	// Layer_2
	this.instance_2 = new lib.text2a("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80.7,8.5,1,1,0,0,0,89.3,8.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:89.3},14,cjs.Ease.get(0.98)).wait(32));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AleNxIAAmcIBGAAIAAGcg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AleOZIAAmdIBGAAIAAGdg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AleO7IAAmcIBGAAIAAGcg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlePZIAAmcIBGAAIAAGcg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AlePzIAAmdIBGAAIAAGdg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AleQIIAAmdIBGAAIAAGdg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AleQYIAAmdIBGAAIAAGdg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AleQjIAAmcIBGAAIAAGcg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AleQqIAAmcIBGAAIAAGcg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AleQtIAAmdIBGAAIAAGdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-35.05,y:88.125}).wait(1).to({graphics:mask_1_graphics_1,x:-35.05,y:92.0602}).wait(1).to({graphics:mask_1_graphics_2,x:-35.05,y:95.5324}).wait(1).to({graphics:mask_1_graphics_3,x:-35.05,y:98.5417}).wait(1).to({graphics:mask_1_graphics_4,x:-35.05,y:101.088}).wait(1).to({graphics:mask_1_graphics_5,x:-35.05,y:103.1713}).wait(1).to({graphics:mask_1_graphics_6,x:-35.05,y:104.7917}).wait(1).to({graphics:mask_1_graphics_7,x:-35.05,y:105.9491}).wait(1).to({graphics:mask_1_graphics_8,x:-35.05,y:106.6435}).wait(1).to({graphics:mask_1_graphics_9,x:-35.05,y:106.875}).wait(51));

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
p.nominalBounds = new cjs.Rectangle(-67.7,0,264.8,226.2);


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
	this.instance_1.setTransform(-32.45,63.5,1,1,0,0,0,125,63.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({x:175.05},14,cjs.Ease.get(1)).wait(55));

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

	// Layer_1
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
(lib.RAM_towing_300x250 = function(mode,startPosition,loop) {
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
		{src:"images/index_atlas_P_.png?1568787848009", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg?1568787848009", id:"index_atlas_NP_"}
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