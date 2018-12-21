// no global variables because onload function
window.onload = function () {


  //GET SPEAKER RECTANGLE ID
  var speakerRect = document.getElementById("speakerRect");

  //SETUP TONE (for iOS start audioContext)
  StartAudioContext(Tone.context);
  //initiate and start transport1
  var transport = Tone.Transport;
  transport.bpm.value = 30;
  transport.start();

  //initiate panners for each rectangle
  var pan1 = new Tone.Panner(-1).toMaster(),
      pan2 = new Tone.Panner(-0.5).toMaster(),
      pan3 = new Tone.Panner(0).toMaster(),
      pan4 = new Tone.Panner(0.5).toMaster(),
      pan5 = new Tone.Panner(1).toMaster();

  var samples1,
      samples2,
      samples3,
      samples4,
      samples5,
      player7,
      part1,
      part2,
      part3,
      part4,
      part5,
      part6,
      part7,
      part8;


  speakerRect.addEventListener("click", function () {
    var soundSwitch = document.getElementsByClassName("soundSwitch");
    var rects = document.getElementById("rects");
    var arrow_to_speaker = document.getElementsByClassName("arrow_to_speaker");

    if (soundSwitch[0].classList.contains("darker")) {
      //change speaker icon to inactive
      for (var i = 0; i < soundSwitch.length; i++) {
        soundSwitch[i].classList.remove("darker");
      }
      //remove the rectangles
      while (rects.firstChild) {
        rects.removeChild(rects.firstChild);
      }

      //show arrow_to_speaker
      [].forEach.call(arrow_to_speaker, function (line) {
        line.style.visibility = "visible";
      });



      //stop parts
      part1.stop();
      part1.dispose();
      part2.stop();
      part2.dispose();
      part3.stop();
      part3.dispose();
      part4.stop();
      part4.dispose();
      part5.stop();
      part5.dispose();
      part6.stop();
      part6.dispose();
      part7.stop();
      part7.dispose();
      part8.stop();
      part8.dispose();
      samples1.volume.rampTo(0, 1);
      samples1.volume.setValueAtTime(0, "+1");
      samples2.volume.rampTo(0, 1);
      samples2.volume.setValueAtTime(0, "+1");
      samples3.volume.rampTo(0, 1);
      samples3.volume.setValueAtTime(0, "+1");
      samples4.volume.rampTo(0, 1);
      samples4.volume.setValueAtTime(0, "+1");
      samples5.volume.rampTo(0, 1);
      samples5.volume.setValueAtTime(0, "+1");


    } //END of if statement stopping and removing rectangles and music
    else {
      //change speaker icon to active
      for (var i = 0; i < soundSwitch.length; i++) {
        soundSwitch[i].classList.add("darker");
      }
      //create the rectangles
      for (var i = 1; i < 9; i++) {
        var div = document.createElement("div");
        div.classList.add("whiteBackground");
        div.classList.add("newCursor");
        div.style.backgroundColor = "white";
        div.id = "rect" + i;
        rects.appendChild(div);
      }
      //show the rectangles (give them dimensions)
      containerDimensions(15, 19, 40, 30, "rect1");
      containerDimensions(60, 23, 81, 41, "rect5");
      containerDimensions(9, 42, 32, 60, "rect2");
      containerDimensions(43, 50, 59, 70, "rect7");
      containerDimensions(70, 46, 92, 65, "rect4");
      containerDimensions(7, 66, 29, 87, "rect6");
      containerDimensions(34, 76, 52, 96, "rect3");
      containerDimensions(71, 72, 94, 95, "rect8");

      //hide arrow
      [].forEach.call(arrow_to_speaker, function (line) {
        line.style.visibility = "hidden";
      });

      //MUSIC SECTION

      //Initiate, Load buffers start playing the samples with volume 0
      samples1 = new Tone.Players({
        "a_1_1" : "/audio/A_1_1.mp3",
        "a_1_2" : "/audio/A_1_2.mp3",
        "a_1_3" : "/audio/A_1_3.mp3",
        "a_1_4" : "/audio/A_1_4.mp3",
        "a_1_5" : "/audio/A_1_5.mp3"
      }, function() {
        rect1.classList.add("pulsate");
        rect1.innerHTML = "+";
        part1 = new Tone.Part(function(time, sample){
          var current_play = samples1.get(sample);
          current_play.start(time);
        }, [[0, "a_1_1"], ["1m", "a_1_2"], ["2m", "a_1_3"], ["3m", "a_1_4"], ["4m", "a_1_5"]]);
        part1.loopStart = 0;
        part1.loopEnd = "5m";
        part1.loop = true;
        part1.start();
        samples1.volume.convert = false;
        samples1.volume.value = 0;
      }).connect(pan1);

      samples2 = new Tone.Players({
      	"a_2_1" : "/audio/A_2_1.mp3",
      	"a_2_2" : "/audio/A_2_2.mp3",
      	"a_2_3" : "/audio/A_2_3.mp3",
      	"a_2_4" : "/audio/A_2_4.mp3",
      	"a_2_5" : "/audio/A_2_5.mp3"
      }, function() {
        rect2.classList.add("pulsate");
        rect2.innerHTML = "+";
      	part2 = new Tone.Part(function(time, sample){
      		var current_play = samples2.get(sample);
      		current_play.start(time);
      	}, [[0, "a_2_1"], ["1m", "a_2_2"], ["2m", "a_2_3"], ["3m", "a_2_4"], ["4m", "a_2_5"] ]);
      	part2.loopStart = 0;
      	part2.loopEnd = "5m";
      	part2.loop = true;
      	part2.start();
      	samples2.volume.convert = false;
      	samples2.volume.value = 0;
      }).connect(pan2);

      samples3 = new Tone.Players({
      	"a_3_1" : "/audio/A_3_1.mp3",
      	"a_3_2" : "/audio/A_3_2.mp3",
      	"a_3_3" : "/audio/A_3_3.mp3",
      	"a_3_4" : "/audio/A_3_4.mp3",
      	"a_3_5" : "/audio/A_3_5.mp3"
      }, function() {
        rect3.classList.add("pulsate");
        rect3.innerHTML = "+";
      	part3 = new Tone.Part(function(time, sample){
      		var current_play = samples3.get(sample);
      		current_play.start(time);
      	}, [[0, "a_3_1"], ["1m", "a_3_2"], ["2m", "a_3_3"], ["3m", "a_3_4"], ["4m", "a_3_5"] ]);
      	part3.loopStart = 0;
      	part3.loopEnd = "5m";
      	part3.loop = true;
      	part3.start();
      	samples3.volume.convert = false;
      	samples3.volume.value = 0;
      }).connect(pan3);


      samples4 = new Tone.Players({
      	"a_4_1" : "/audio/A_4_1.mp3",
      	"a_4_2" : "/audio/A_4_2.mp3",
      	"a_4_3" : "/audio/A_4_3.mp3",
      	"a_4_4" : "/audio/A_4_4.mp3",
      	"a_4_5" : "/audio/A_4_5.mp3"
      }, function() {
        rect4.classList.add("pulsate");
        rect4.innerHTML = "+";
      	part4 = new Tone.Part(function(time, sample){
      		var current_play = samples4.get(sample);
      		current_play.start(time);
      	}, [[0, "a_4_1"], ["1m", "a_4_2"], ["2m", "a_4_3"], ["3m", "a_4_4"], ["4m", "a_4_5"] ]);
      	part4.loopStart = 0;
      	part4.loopEnd = "5m";
      	part4.loop = true;
      	part4.start();
      	samples4.volume.convert = false;
      	samples4.volume.value = 0;
      }).connect(pan4);


      samples5 = new Tone.Players({
      	"a_5_1" : "/audio/A_5_1.mp3",
      	"a_5_2" : "/audio/A_5_2.mp3",
      	"a_5_3" : "/audio/A_5_3.mp3",
      	"a_5_4" : "/audio/A_5_4.mp3",
      	"a_5_5" : "/audio/A_5_5.mp3"
      }, function() {
        rect5.classList.add("pulsate");
        rect5.innerHTML = "+";
      	part5 = new Tone.Part(function(time, sample){
      		var current_play = samples5.get(sample);
      		current_play.start(time);
      	}, [[0, "a_5_1"], ["1m", "a_5_2"], ["2m", "a_5_3"], ["3m", "a_5_4"], ["4m", "a_5_5"] ]);
      	part5.loopStart = 0;
      	part5.loopEnd = "5m";
      	part5.loop = true;
      	part5.start();
      	samples5.volume.convert = false;
      	samples5.volume.value = 0;
      }).connect(pan5);


      part6 = new Tone.Loop(function(time){
      	noiseClick(pan1);
      }, "64n");
      part6.humanize = 0.02;
      part6.probability = 0.2;
      rect6.classList.add("pulsate");
      rect6.innerHTML = "+";

      player7 = new Tone.Player("/audio/B_1.mp3", function () {
        rect7.classList.add("pulsate");
        rect7.innerHTML = "+";
        part7 = new Tone.Loop(function(time){
          shortSpeech(pan3);
        }, "32n");
        part7.probability = 0.3;
        player7.volume.value = -20;
      });

      part8 = new Tone.Loop(function(time){
      	noiseClick(pan5);
      }, "64n");
      part8.humanize = 0.02;
      part8.probability = 0.18;
      rect8.classList.add("pulsate");
      rect8.innerHTML = "+";

      rect1.addEventListener("click", function () {
        if (samples1.loaded) {
          //first remove pulsate class
          this.classList.remove("pulsate");
          this.innerHTML = "";
          //then do the magic, change color and sound
          if (rect1.style.backgroundColor === "white") {
            rect1.style.backgroundColor = "#af0101";
            samples1.volume.rampTo(1, 1);
            samples1.volume.setValueAtTime(1, "+1");
          } else {
            rect1.style.backgroundColor = "white";
              samples1.volume.rampTo(0, 1);
              samples1.volume.setValueAtTime(0, "+1");
          }
        }
      });

      rect2.addEventListener("click", function () {
        if (samples2.loaded) {
          //first remove pulsate class
          this.classList.remove("pulsate");
          this.innerHTML = "";
          //then do the magic, change color and sound
          if (rect2.style.backgroundColor === "white") {
            rect2.style.backgroundColor = "#af0101";
            samples2.volume.rampTo(1, 1);
            samples2.volume.setValueAtTime(1, "+1");
          }
          else {
            rect2.style.backgroundColor = "white";
            samples2.volume.rampTo(0, 1);
            samples2.volume.setValueAtTime(0, "+1");
          }
        }
      });

      rect3.addEventListener("click", function () {
        if (samples3.loaded) {
          //first remove pulsate class
          this.classList.remove("pulsate");
          this.innerHTML = "";
          //then do the magic, change color and sound
          if (rect3.style.backgroundColor === "white") {
            rect3.style.backgroundColor = "#af0101";
            samples3.volume.rampTo(1, 1);
            samples3.volume.setValueAtTime(1, "+1");
          }
          else {
            rect3.style.backgroundColor = "white";
            samples3.volume.rampTo(0, 1);
            samples3.volume.setValueAtTime(0, "+1");
          }
        }
      });

      rect4.addEventListener("click", function () {
        if (samples4.loaded) {
          //first remove pulsate class
          this.classList.remove("pulsate");
          this.innerHTML = "";
          //then do the magic, change color and sound
          if (rect4.style.backgroundColor === "white") {
            rect4.style.backgroundColor = "#af0101";
            samples4.volume.rampTo(1, 1);
            samples4.volume.setValueAtTime(1, "+1");
          }
          else {
            rect4.style.backgroundColor = "white";
            samples4.volume.rampTo(0, 1);
            samples4.volume.setValueAtTime(0, "+1");
          }
        }
      });

      rect5.addEventListener("click", function () {
        if (samples5.loaded) {
          //first remove pulsate class
          this.classList.remove("pulsate");
          this.innerHTML = "";
          //then do the magic, change color and sound
          if (rect5.style.backgroundColor === "white") {
            rect5.style.backgroundColor = "#af0101";
            samples5.volume.rampTo(1, 1);
            samples5.volume.setValueAtTime(1, "+1");
          }
          else {
            rect5.style.backgroundColor = "white";
            samples5.volume.rampTo(0, 1);
            samples5.volume.setValueAtTime(0, "+1");
          }
        }
      });

      rect6.addEventListener("click", function () {
        //first remove pulsate class
        this.classList.remove("pulsate");
        this.innerHTML = "";
        //then do the magic, change color and sound
        if (rect6.style.backgroundColor === "white") {
          rect6.style.backgroundColor = "#444";
          part6.start();
        } else {
          rect6.style.backgroundColor = "white";
          part6.stop();
        }
      });

      rect7.addEventListener("click", function () {
        if (player7.loaded) {
          //first remove pulsate class
          this.classList.remove("pulsate");
          this.innerHTML = "";
          //then do the magic, change color and sound
          if (rect7.style.backgroundColor === "white") {
            rect7.style.backgroundColor = "#444";
            part7.start();
          } else {
            rect7.style.backgroundColor = "white";
            part7.stop();
          }
        }
      });

      rect8.addEventListener("click", function () {
        //first remove pulsate class
        this.classList.remove("pulsate");
        this.innerHTML = "";
        //then do the magic, change color and sound
        if (rect8.style.backgroundColor === "white") {
          rect8.style.backgroundColor = "#444";
          part8.start();
        } else {
          rect8.style.backgroundColor = "white";
          part8.stop();
        }
      });

    } //end of else statement (starting and showing rectangles and music)
  }); //end of click function of soundRect

  //create noiseSynth and trigger when called
  function noiseClick(whichPan) {
    //create random variables to keep things interesting!
    var filterFrequency = new Tone.CtrlRandom(500, 18000, true);
    var releaseTime = new Tone.CtrlRandom(0.00002, 0.0002);
    var noiseTypeChooser = new Tone.CtrlRandom(0, 2, true);
    var noiseTypeArray = ["white", "pink", "brown"];
    var randomVolume = new Tone.CtrlRandom(-15, -6, true);

    //create the filter
    var clicksFilter = new Tone.Filter(filterFrequency.value, "lowpass").connect(whichPan);
    //create the noiseSynth
    var noiseClicks = new Tone.NoiseSynth(
      {
        noise : {
          type : noiseTypeArray[noiseTypeChooser.value]
        },
        envelope : {
          attack : 0,
          decay : 0.002,
          sustain : 1,
          release : releaseTime.value
        }
      }
    ).connect(clicksFilter);
    noiseClicks.volume.value = randomVolume.value;
    //trigger the synth
    noiseClicks.triggerAttackRelease(0.001);
  };

  function shortSpeech (whichPan) {
  	//create random variables to make things interesting!
  	var Offset = new Tone.CtrlRandom(1, 28);
  	var Duration = new Tone.CtrlRandom(0.002, 0.16);
  	//connect the player to the correct pan
  	player7.connect(whichPan);
  	player7.start("+0", Offset.value, Duration.value);
  };

}; //ONLOAD CLOSING BRACKET
