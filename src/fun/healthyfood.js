(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"healthyfood_atlas_", frames: [[0,0,2250,1948],[802,1950,512,512],[0,1950,800,600],[2252,0,1200,1200],[2252,1202,1200,1200]]}
];


// symbols:



(lib._580b57fcd9996e24bc43c20b = function() {
	this.spriteSheet = ss["healthyfood_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cola = function() {
	this.spriteSheet = ss["healthyfood_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.high_mountain_nature_game_background_dribbble = function() {
	this.spriteSheet = ss["healthyfood_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.student = function() {
	this.spriteSheet = ss["healthyfood_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.student1 = function() {
	this.spriteSheet = ss["healthyfood_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.startscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC98").s().p("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");
	this.shape.setTransform(-0.4,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("EgjCgPuMAjCAATMAjKAAPIgpgoIgLfPIA0g0IoygEIozgFYl3gDl3gDl3gBYl2gBl3ACl3ADIoyAFIozAHIA0A0IgIn0IgFj6IgFj5IgGj6IgGj6IgHj6IgIj0EgjPgP7IgJEBIgHD6IgGD6IgGD6IgFD5IgED6IgJH0IAAAzIA0AAIIzAHIIyAGYF3ADF3ABF2gBYF3gBF3gDF3gDIIzgFIIygDIA0gBIAAgzIgL/PIAAgpIgpAAMgjKAAQMgjPAAS");
	this.shape_1.setTransform(0,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("EgjJAPoIAA/PMBGTAAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.startscreen, new cjs.Rectangle(-230.2,-104.1,460.5,210.8), null);


(lib.cola_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cola();
	this.instance.parent = this;
	this.instance.setTransform(-80,-160,0.312,0.312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cola_1, new cjs.Rectangle(-80,-160,160,160), null);


(lib.cauli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._580b57fcd9996e24bc43c20b();
	this.instance.parent = this;
	this.instance.setTransform(-50,-86.6,0.044,0.044);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cauli, new cjs.Rectangle(-50,-86.6,100,86.6), null);


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.student();
	this.instance.parent = this;
	this.instance.setTransform(-95.8,-211.2,0.16,0.176);

	this.instance_1 = new lib.student1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-95.8,-211.2,0.16,0.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.8,-211.2,191.6,211.2);


(lib.boxtouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhHlAhHMAAAhCNMCPLAAAMAAABCNg");
	this.shape.setTransform(0,-211.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxtouch, new cjs.Rectangle(-458.2,-423.7,916.4,423.8), null);


(lib.bicycleai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2A5QgGgBgHgHQgLgJgFgLQgFgMAEgLQAFgJARgKQA1ghAggHQAXgGANAGQANAGAKAVQAFALgBAHQgCAJgOAKQgWAOgeALIg2ATQgJACgFAAIgEAAg");
	this.shape.setTransform(114.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:true},1).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A454D").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_1.setTransform(88.8,95.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:true},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5B2BC").s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQAKAAAJAIQAHAHAAAKQAAALgHAIQgJAHgKAAQgKAAgHgHg");
	this.shape_2.setTransform(35.8,102.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:true},1).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B8A95").s().p("AhPBQQgighABgvQgBguAighQAhgiAuAAQAvAAAhAiQAiAhAAAuQAAAvgiAhQghAigvAAQguAAghgigAg4g4QgXAYgBAgQABAhAXAYQAXAXAhAAQAhAAAYgXQAYgYgBghQABgggYgYQgYgXghAAQghAAgXAXg");
	this.shape_3.setTransform(88.8,95.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:true},1).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B8A95").s().p("AgYAZQgKgKAAgPQAAgNAKgLQAKgLAOAAQAPAAAKALQAKALAAANQAAAPgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_4.setTransform(39.6,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:true},1).wait(1));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5B2BC").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_5.setTransform(39.6,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4).to({_off:true},1).wait(1));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A454D").s().p("AkXBvQgYgGgLgJQgJgHgEgKQgFgLADgKQACgHAHgJQAFgHABgFQACgHgHgRIgEgHQgMggASggQARgfAfgPQBMgkBQATQAYAFArASQApAQAUAFQApALAsgGIAngHQAkgHASgBQAegCAZAHQArANAXAjQANATADAWQADAXgHAWQgMAogmASQgWALgyAJQhFALh0ABIgoABQibAAhngZgAi/h5QgnAEghARQgcANgOAaQgQAcAKAbIADAHQAJAVgDALQgCAIgGAIQgFAHgCAFQgEAOAOALQAJAIAWAFQBDAQBUAGQA5ADBXgBQA1AAAkgCQA0gDAqgHQAxgJAWgLQAfgQALgiQAFgTgCgUQgDgTgLgRQgVgggngLQgSgGgUAAQgUAAgsAJIgoAHQgtAGgtgLQgXgGgogQQgpgRgYgGQgYgFgYAAQgNAAgOABg");
	this.shape_6.setTransform(66.3,94.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4).to({_off:true},1).wait(1));

	// Layer 10
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#06BBE8").s().p("AAcDsInxgsQgKgBgGgIQgHgHABgKQABgKAIgHQAHgGAKABIHmAqIGumeQAHgHALABQAKAAAHAHQAHAHgBAKQAAAKgHAHIm2GmQgHAHgKAAg");
	this.shape_7.setTransform(86.4,74.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4).to({_off:true},1).wait(1));

	// Layer 11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#06BBE8").s().p("AhSD6QgNAAgGgMQhQiCgliuQgMg4gHg2IgEgvQAAgKAHgHQAGgIAKAAQAKgBAIAHQAHAHABAKIASCFQAgCbBAB3IEUlrQAHgIAKgBQAJgBAIAGQAJAGABAKQABAKgGAIIkqGHQgHAKgMAAg");
	this.shape_8.setTransform(47.7,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4).to({_off:true},1).wait(1));

	// Layer 12
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06BBE8").s().p("ADpBJQgRgTgdgUQg3gmgzgFQhYgKj0gLQgJgBgIgHQgGgIAAgKQABgKAHgGQAIgHAKAAQD1AMBaAKQA9AGBBAtQAhAWAWAXQAIAHgBAKQAAALgHAGQgIAHgJAAQgKAAgIgHg");
	this.shape_9.setTransform(40.8,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4).to({_off:true},1).wait(1));

	// Layer 13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#06BBE8").s().p("AicEYQgRAAgGgQIh6k9QgDgJAEgJQAEgJAJgEQAKgEAJAEQAJAEADAKIB0EtQDJgPBmiDQBAhSAUh6QAOhSgIguQgFgPAMgLQAHgGAKAAQAKABAHAHQAEAFACAGQACAIABAUQABAfgCAeQgGBjgjBTQgtBrhVBDQhxBXitAIg");
	this.shape_10.setTransform(95.4,52.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4).to({_off:true},1).wait(1));

	// Layer 14
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNA7QgQAAgKgKQgHgFgIgOQgJgQgFgFQgLgMgXgIQgcgIgNgFQgJgDgDgFQgGgKAKgJQAIgHAMAAQAMAAASAFIAfAKQAfAHA/gNQBBgNAfAHQARADAMAKQAPANgKAOQgGAKgPAEIgYADQgWAEgZARIgXARQgOAJgLAFQgNAFgMAAIgCAAg");
	this.shape_11.setTransform(62.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4).to({_off:true},1).wait(1));

	// Layer 15
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B8A95").s().p("AgGAmQgKgBgGgFQgMgHgEgTQgDgKABgKQAAgPAHgFQAIgGAHAEQAEADAAAGIgCAKQgDAJACAIQACAJAHAFQAMAIARgJIAKgFQAIgBACAGQACAEgEAGQgMAQgXAAIgKgBg");
	this.shape_12.setTransform(55.1,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4).to({_off:true},1).wait(1));

	// Layer 16
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A5B2BC").s().p("AAPBfIg/ixQgDgHAEgHQADgHAHgCQAHgDAGADQAIADACAHIAoBvIAXBDQADAHgEAHQgDAHgHACIgGACQgNAAgEgNg");
	this.shape_13.setTransform(66.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(4).to({_off:true},1).wait(1));

	// Layer 17
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#06BBE8").s().p("ACmFiQgbgQgegaQg8gygig2Qgfg0hdjuQhCipgahKQgDgJAEgJQAEgJAJgEQAKgDAJAEQAJAEAEAKIBYDrQBdDwAfAxQAdAvA3AuQAcAXAWAOQAJAFACAKQADAKgGAIQgHAMgOAAQgGAAgGgEg");
	this.shape_14.setTransform(141,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(4).to({_off:true},1).wait(1));

	// Layer 18
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A5B2BC").s().p("AgQCRQgjhPAFgpQAEgcAggfQAPgOAJgMQAGgJgCgIQgFgNgVgNQgRgLgRgFQgHgDgDgGQgEgHADgHQACgHAHgEQAGgDAHACQARAFAWANQAjAVAJAaQAIAagQAYQgKANgUATQgMALgEAGQgGAIgBALQgFAeAeBIQADAHgCAHQgDAHgHADIgHABQgLAAgFgLg");
	this.shape_15.setTransform(124.7,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(4).to({_off:true},1).wait(1));

	// Layer 19
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjcDdQhchcAAiBQAAiABchcQBbhcCBAAQCBAABcBcQBcBcAACAQAACBhcBcQhcBciBAAQiBAAhbhcgAjUjTQhYBYAAB7QAAB8BYBZQBZBYB7AAQB8AABYhYQBYhZAAh8QAAh7hYhYQhYhZh8AAQh7AAhZBZg");
	this.shape_16.setTransform(40.2,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AkbEdQh2h2AAinQAAimB2h1QB1h2CmAAQCmAAB3B2QB1B1AACmQAACnh1B2Qh3B1imAAQimAAh1h1gAjtjtQhkBiABCLQgBCMBkBjQBiBiCLAAQCMAABjhiQBjhjAAiMQAAiLhjhiQhjhjiMAAQiLAAhiBjg");
	this.shape_17.setTransform(40.2,92.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BDC8D1").s().p("AlMCDIKVkOIAEAJIqVEOg");
	this.shape_18.setTransform(40.2,92.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BDC8D1").s().p("AiLlIIAJgEIEOKVIgJAEg");
	this.shape_19.setTransform(40.2,92.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BDC8D1").s().p("AiOFIIETqTIAKAEIkUKTg");
	this.shape_20.setTransform(40.2,92.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BDC8D1").s().p("AlLiFIAEgIIKTETIgEAIg");
	this.shape_21.setTransform(40.2,92.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BDC8D1").s().p("Aj/j4IAGgHIH5H4IgHAHg");
	this.shape_22.setTransform(40.2,92.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDC8D1").s().p("Aj/D5IH4n4IAHAHIn5H4g");
	this.shape_23.setTransform(40.2,92.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BDC8D1").s().p("AllAFIAAgJILLAAIAAAJg");
	this.shape_24.setTransform(40.2,92.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BDC8D1").s().p("AgEFmIAArLIAJAAIAALLg");
	this.shape_25.setTransform(40.2,92.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25,p:{rotation:0}},{t:this.shape_24,p:{rotation:0}},{t:this.shape_23,p:{rotation:0}},{t:this.shape_22,p:{rotation:0}},{t:this.shape_21,p:{rotation:0}},{t:this.shape_20,p:{rotation:0}},{t:this.shape_19,p:{rotation:0}},{t:this.shape_18,p:{rotation:0}},{t:this.shape_17,p:{rotation:0}},{t:this.shape_16,p:{rotation:0}}]}).to({state:[{t:this.shape_25,p:{rotation:15}},{t:this.shape_24,p:{rotation:15}},{t:this.shape_23,p:{rotation:15}},{t:this.shape_22,p:{rotation:15}},{t:this.shape_21,p:{rotation:15}},{t:this.shape_20,p:{rotation:15}},{t:this.shape_19,p:{rotation:15}},{t:this.shape_18,p:{rotation:15}},{t:this.shape_17,p:{rotation:15}},{t:this.shape_16,p:{rotation:15}}]},1).to({state:[{t:this.shape_25,p:{rotation:15}},{t:this.shape_24,p:{rotation:15}},{t:this.shape_23,p:{rotation:15}},{t:this.shape_22,p:{rotation:15}},{t:this.shape_21,p:{rotation:15}},{t:this.shape_20,p:{rotation:15}},{t:this.shape_19,p:{rotation:15}},{t:this.shape_18,p:{rotation:15}},{t:this.shape_17,p:{rotation:15}},{t:this.shape_16,p:{rotation:15}}]},1).to({state:[{t:this.shape_25,p:{rotation:15}},{t:this.shape_24,p:{rotation:15}},{t:this.shape_23,p:{rotation:15}},{t:this.shape_22,p:{rotation:15}},{t:this.shape_21,p:{rotation:15}},{t:this.shape_20,p:{rotation:15}},{t:this.shape_19,p:{rotation:15}},{t:this.shape_18,p:{rotation:15}},{t:this.shape_17,p:{rotation:15}},{t:this.shape_16,p:{rotation:15}}]},2).to({state:[]},1).wait(1));

	// Layer 20
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjcDdQhchcAAiBQAAiABchcQBchcCAAAQCBAABcBcQBcBcAACAQAACBhcBcQhcBciBAAQiAAAhchcgAjTjTQhZBYAAB7QAAB8BZBZQBYBYB7AAQB8AABZhYQBYhZAAh8QAAh7hYhYQhZhZh8AAQh7AAhYBZg");
	this.shape_26.setTransform(158.8,92.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AkbEdQh2h2AAinQAAimB2h1QB1h2CmAAQCnAAB2B2QB1B1AACmQAACnh1B2Qh2B1inAAQimAAh1h1gAjtjtQhjBiAACLQAACMBjBjQBiBiCLAAQCMAABjhiQBihjAAiMQAAiLhihiQhjhjiMAAQiLAAhiBjg");
	this.shape_27.setTransform(158.8,92.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BDC8D1").s().p("AlMCDIKVkOIAEAJIqVEOg");
	this.shape_28.setTransform(158.8,92.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BDC8D1").s().p("AiLlIIAJgEIEOKVIgJAEg");
	this.shape_29.setTransform(158.8,92.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BDC8D1").s().p("AiNFIIETqTIAIAEIkTKTg");
	this.shape_30.setTransform(158.8,92.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BDC8D1").s().p("AlLiFIAEgIIKTETIgEAIg");
	this.shape_31.setTransform(158.8,92.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BDC8D1").s().p("Aj/j4IAHgHIH4H4IgHAHg");
	this.shape_32.setTransform(158.8,92.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BDC8D1").s().p("Aj/D5IH4n4IAHAHIn4H4g");
	this.shape_33.setTransform(158.8,92.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BDC8D1").s().p("AllAFIAAgJILLAAIAAAJg");
	this.shape_34.setTransform(158.8,92.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BDC8D1").s().p("AgEFmIAArLIAJAAIAALLg");
	this.shape_35.setTransform(158.8,92.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35,p:{rotation:0}},{t:this.shape_34,p:{rotation:0}},{t:this.shape_33,p:{rotation:0}},{t:this.shape_32,p:{rotation:0}},{t:this.shape_31,p:{rotation:0}},{t:this.shape_30,p:{rotation:0}},{t:this.shape_29,p:{rotation:0}},{t:this.shape_28,p:{rotation:0}},{t:this.shape_27,p:{rotation:0}},{t:this.shape_26,p:{rotation:0}}]}).to({state:[{t:this.shape_35,p:{rotation:15}},{t:this.shape_34,p:{rotation:15}},{t:this.shape_33,p:{rotation:15}},{t:this.shape_32,p:{rotation:15}},{t:this.shape_31,p:{rotation:15}},{t:this.shape_30,p:{rotation:15}},{t:this.shape_29,p:{rotation:15}},{t:this.shape_28,p:{rotation:15}},{t:this.shape_27,p:{rotation:15}},{t:this.shape_26,p:{rotation:15}}]},1).to({state:[{t:this.shape_35,p:{rotation:15}},{t:this.shape_34,p:{rotation:15}},{t:this.shape_33,p:{rotation:15}},{t:this.shape_32,p:{rotation:15}},{t:this.shape_31,p:{rotation:15}},{t:this.shape_30,p:{rotation:15}},{t:this.shape_29,p:{rotation:15}},{t:this.shape_28,p:{rotation:15}},{t:this.shape_27,p:{rotation:15}},{t:this.shape_26,p:{rotation:15}}]},1).to({state:[{t:this.shape_35,p:{rotation:15}},{t:this.shape_34,p:{rotation:15}},{t:this.shape_33,p:{rotation:15}},{t:this.shape_32,p:{rotation:15}},{t:this.shape_31,p:{rotation:15}},{t:this.shape_30,p:{rotation:15}},{t:this.shape_29,p:{rotation:15}},{t:this.shape_28,p:{rotation:15}},{t:this.shape_27,p:{rotation:15}},{t:this.shape_26,p:{rotation:15}}]},2).to({state:[]},1).wait(1));

	// Layer 22
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnAYQgGAAgGgFQgEgFAAgHIAAgNQAAgHAEgFQAGgFAGAAIBPAAQAHAAAFAFQAEAFAAAHIAAANQAAAHgEAFQgFAFgHAAg");
	this.shape_36.setTransform(83.8,111.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1).to({rotation:22.7,x:77.8,y:108.4},0).wait(1).to({rotation:82.7,x:71.9,y:92.1},0).wait(2).to({rotation:142.7,x:83.2,y:78.8},0).to({_off:true},1).wait(1));

	// Layer 23
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnAXQgHABgEgFQgFgFAAgHIAAgNQAAgHAFgFQAEgEAHgBIBPAAQAHABAFAEQAEAFAAAHIAAANQAAAHgEAFQgFAFgHgBg");
	this.shape_37.setTransform(94.4,78.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1).to({rotation:22.7,x:100.3,y:81.9},0).wait(1).to({rotation:82.7,x:106.2,y:98.4},0).wait(2).to({rotation:142.7,x:94.9,y:111.6},0).to({_off:true},1).wait(1));

	// Layer 24
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3A454D").s().p("Ag+CcIBmk+IAWAHIhlE+g");
	this.shape_38.setTransform(88.8,95.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1).to({rotation:22.7,x:88.5,y:95.8},0).wait(1).to({rotation:82.7,x:88.2,y:95.1},0).wait(2).to({rotation:142.7,x:88.8,y:94.4},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.1,132.3);


(lib.bike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		addEventListener(KeyboardEvent.KEY_DOWN, fl_KeyboardDownHandler_2);
		
		function fl_KeyboardDownHandler_2(event:KeyboardEvent):void
		{
			if (event.keyCode == Keyboard.UP) {
				stop();
			}
		
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer_1
	this.instance = new lib.bicycleai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-46.1,0.698,0.698,0,0,180,99.5,66.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.4,-92.3,139,92.3);


// stage content:
(lib.healthyfood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var boy = {};
		var cauli = []; // this is food object
		var cola = []; // this is food object
		var startscreen = {};
		var gamestage = this;
		var ypos = 350;
		var foodQuantity = 0;
		var foodQuantityCola = 0;
		var score = 0;
		var collide =5;
		gamestage.scoretxt.visible = false;
		gamestage.lifetxt.visible = false;
		createStartScreen (200);
		
		function init () {
		createBoy (350);
		foodRotation ();
		foodRotationCola();
		setInterval (ground , 10);
		}
		
		//Create Player
		function createBoy (a) {
		boy= new lib.boy();
		boy.scaleX =0.7; // the player turns right
		boy.scaleY =0.7; // the player turns right
		boy.x = 50; 
		boy.y = a; // the player appears on the bottom left corner
		gamestage.addChild(boy); // the player appears on-stage
		boy.gotoAndStop(2);
		}
		
		//Rotates food
		function foodRotation(){
		var min = 1;
		var max = 7;
		foodQuantity = Math.floor(Math.random()*(max - min)) + min;
		generateFood(foodQuantity);
		}
		
		//Rotates Cola
		function foodRotationCola(){
		var min = 1;
		var max = 7;
		foodQuantityCola = Math.floor(Math.random()*(max - min)) + min;
		generateCola(foodQuantityCola);
		}
		
		// Generate Food
		function generateFood(n) {
				var min = 150;
				var max = 300;
				var positionx = 1100;
				var positiony = Math.floor(Math.random()*(max - min)) + min;
				for(var i=1; i<=n; i++){
				var c = new lib.cauli(); // cauli
				c.scaleX =0.7; 
				c.scaleY =0.7;
				c.x = positionx; 
				c.y = positiony;
				positionx += 40;
				cauli.push(c);
				gamestage.addChild(c);
			}
		}
		
		// Generate Cola
		function generateCola(n) {
				var min = 150;
				var max = 350;
				var positionx = 1000;
				var positiony = Math.floor(Math.random()*(max - min)) + min;
				for(var i=1; i<=n; i++){
				var co = new lib.cola(); // cola
				co.scaleX =0.07; 
				co.scaleY =0.07;
				co.x = positionx; 
				co.y = positiony;
				positionx += 40;
				cola.push(co);
				gamestage.addChild(co);
			}
		}
		
		
		//Create Start Screen
		function createStartScreen (a) {
		startscreen = new lib.startscreen();
		startscreen.x = 250; 
		startscreen.scaleX = 1;
		startscreen.scaleY = 1;
		startscreen.y = a; // background appears on the bottom left corner
		gamestage.addChild(startscreen); // background appears on-stage
		}
		
		// works in background
		function ground ( ) {
			//Update Score every second
			gamestage.score_txt.text = score;
			gamestage.life.text = collide;
			
				if (boy.y == ypos ) {
				boy.y = ypos;
				boy.gotoAndStop(2);
			   } else {
				boy.y += 5;
				}
			
				//move Cauli
				for (var i=0;i < foodQuantity;i++){
					cauli[i].x -=2;
					if (cauli[i].x < -200){
					 gamestage.removeChild(cauli[i]);
					 cauli.splice(i, 0);
					 destroyCauli();
					 foodRotation();
					}
				}
				
				//move Cola
				for (var i=0;i < foodQuantityCola;i++){
					cola[i].x -=2;
					if (cola[i].x < -200){
					 gamestage.removeChild(cola[i]);
					 cola.splice(i, 0);
					 destroyCola();
					 foodRotationCola();
					}
				}
				
				
		
			//Collision Detection with cauli
			for (var i= 0; i < cauli.length ; i++ ) {
			var ft = boy.globalToLocal(cauli[i].x, cauli[i].y);
				if(boy.hitTest(ft.x, ft.y)){
					var min = 150;
				    var max = 300;
					cauli[i].x = 1300;
					cauli[i].y = Math.floor(Math.random()*(max - min)) + min;
					score =  score + 5;
				}
			}
			
				//Collision Detection with cola
			for (var i= 0; i < cola.length ; i++ ) {
			 var ct = boy.globalToLocal(cola[i].x, cola[i].y);
				if(boy.hitTest(ct.x, ct.y)){
					collide --;
					var min = 150;
				    var max = 300;
					cola[i].x = 1300;
					cola[i].y = Math.floor(Math.random()*(max - min)) + min;
					score =  score - 5;
					if (collide == 0) {
						boy.visible = false;
						gamestage.scoretxt.visible = false;
						gamestage.lifetxt.visible = false;
						gamestage.score_txt.visible = false;
						gamestage.life.visible = false;
						alert("Game Over, Refresh Page"); 	
						}
				}
			}
			
		
				
		}
		
			
		//On Mouse Click in screen
		this.box.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		//boyFly
		function fl_MouseClickHandler_2()
		{
			if (boy.y <= 200) {
			boy.y = 200;
			}
			boy.y -= 150;
			boy.gotoAndStop(1);
		}
		
		
		//Destroy Food
		function destroyCauli() {
			for(var i=0; i<cauli.length; i++){
				gamestage.removeChild(cauli[i]);
			}
			cauli = [];
		}
		
		//Destroy Cola
		function destroyCola() {
			for(var i=0; i<cola.length; i++){
				gamestage.removeChild(cola[i]);
			}
			cola = [];
		}
		
		//Start Screen
		startscreen.addEventListener("click", startClicked);
		function startClicked() {
			startscreen.visible = false;
			gamestage.scoretxt.visible = true;
			gamestage.lifetxt.visible = true;
			init();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.lifetxt = new cjs.Text("Life:", "44px 'Arial'", "#3300FF");
	this.lifetxt.name = "lifetxt";
	this.lifetxt.textAlign = "right";
	this.lifetxt.lineHeight = 51;
	this.lifetxt.lineWidth = 115;
	this.lifetxt.parent = this;
	this.lifetxt.setTransform(140.7,24.6);

	this.scoretxt = new cjs.Text("Score:", "44px 'Arial'", "#3300FF");
	this.scoretxt.name = "scoretxt";
	this.scoretxt.textAlign = "right";
	this.scoretxt.lineHeight = 51;
	this.scoretxt.lineWidth = 148;
	this.scoretxt.parent = this;
	this.scoretxt.setTransform(684.5,13.9);

	this.life = new cjs.Text("", "44px 'Arial'", "#3300FF");
	this.life.name = "life";
	this.life.lineHeight = 51;
	this.life.lineWidth = 215;
	this.life.parent = this;
	this.life.setTransform(155.4,23);

	this.score_txt = new cjs.Text("", "44px 'Arial'", "#3300FF");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 51;
	this.score_txt.lineWidth = 182;
	this.score_txt.parent = this;
	this.score_txt.setTransform(695.5,13.9);

	this.cola = new lib.cola_1();
	this.cola.name = "cola";
	this.cola.parent = this;
	this.cola.setTransform(-355,101,1,1,0,0,0,0,-80);

	this.cauli = new lib.cauli();
	this.cauli.name = "cauli";
	this.cauli.parent = this;
	this.cauli.setTransform(-70,-5.7,1,1,0,0,0,0,-43.3);

	this.start_screen = new lib.startscreen();
	this.start_screen.name = "start_screen";
	this.start_screen.parent = this;
	this.start_screen.setTransform(-237.2,402.6);

	this.instance = new lib.high_mountain_nature_game_background_dribbble();
	this.instance.parent = this;
	this.instance.setTransform(-83,-295,1.445,1.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.start_screen},{t:this.cauli},{t:this.cola},{t:this.score_txt},{t:this.life},{t:this.scoretxt},{t:this.lifetxt}]}).wait(1));

	// boy
	this.boy = new lib.boy();
	this.boy.name = "boy";
	this.boy.parent = this;
	this.boy.setTransform(-179.2,223.2,1,1,0,0,0,0,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.boy).wait(1));

	// container
	this.box = new lib.boxtouch();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(456.1,203.4,1,1,0,0,0,0,-211.9);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-95,1541.8,804.1);
// library properties:
lib.properties = {
	id: '9C97DFE8104FCE4EA757E967DFC3BF2C',
	width: 900,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/healthyfood_atlas_.png", id:"healthyfood_atlas_"}
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
an.compositions['9C97DFE8104FCE4EA757E967DFC3BF2C'] = {
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




var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("9C97DFE8104FCE4EA757E967DFC3BF2C");
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
	exportRoot = new lib.healthyfood();
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