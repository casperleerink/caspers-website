var s = Snap();
var grad = s.gradient("r(0.5, 0.5, 0.4)#af0101-#444:20-#fff");
var grad2 = s.gradient("r(0.5, 0.5, 0.8)#af0101-#fff");

function generateRandomNumber(min, max) {
    var rand = Math.random() * (max - min) + min;
    return rand;
};

//draw horizontal lines
y = 0;
yArr = [];
yNumberArr = [];
while (y < 100) {
  yNumberArr.push(y);
  yPerc = y + "%";
  var line = s.line("0%", yPerc, "100%", yPerc);
  line.attr({stroke : "#e3e3e3"});
  yArr.push(line);
  y += generateRandomNumber(0.4, 1.3);
}

//draw vertical lines
x = 0;
xArr = [];
xNumberArr = [];
while (x < 100) {
  xNumberArr.push(x);
  xPerc = x + "%";
  var line = s.line(xPerc, "0%", xPerc, "100%");
  line.attr({stroke : "#e3e3e3"});
  xArr.push(line);
  if (matchMedia('only screen and (max-width: 480px)').matches) {
    x += generateRandomNumber(0.8, 1.4);
  }
  else {
    x += generateRandomNumber(0.5, 1);
  }
}



//find the closest number and the index of it in the array, output: [index, number]
function closest (num, arr) {
  var mid;
  var lo = 0;
  var hi = arr.length - 1;
  while (hi - lo > 1) {
    mid = Math.floor ((lo + hi) / 2);
    if (arr[mid] < num) {
        lo = mid;
    } else {
        hi = mid;
    }
  }
  if (num - arr[lo] <= arr[hi] - num) {
    return [lo, arr[lo]];
  }
  return [hi, arr[hi]];
}


// create the navbar menu texts (home bio and works)
function createMenu (topY, bottomY, midY, topYperc, bottomYperc, midYperc) {

  //home text
  var leftX = closest(1.4, xNumberArr);
  var leftXperc = leftX[1] + "%";

  var l1 = s.line(leftXperc, topYperc, leftXperc, bottomYperc);
  var l2 = s.line(leftXperc, midYperc, xArr[leftX[0] + 2].attr("x1"), midYperc);
  var l3 = s.line(xArr[leftX[0] + 2].attr("x1"), topYperc, xArr[leftX[0] + 2].attr("x1"), bottomYperc);

  var l4 = s.line(xArr[leftX[0] + 3].attr("x1"), topYperc, xArr[leftX[0] + 3].attr("x1"), bottomYperc);
  var l5 = s.line(xArr[leftX[0] + 3].attr("x1"), topYperc, xArr[leftX[0] + 5].attr("x1"), topYperc);
  var l6 = s.line(xArr[leftX[0] + 3].attr("x1"), bottomYperc, xArr[leftX[0] + 5].attr("x1"), bottomYperc);
  var l7 = s.line(xArr[leftX[0] + 5].attr("x1"), topYperc, xArr[leftX[0] + 5].attr("x1"), bottomYperc);

  var l8 = s.line(xArr[leftX[0] + 6].attr("x1"), topYperc, xArr[leftX[0] + 6].attr("x1"), bottomYperc);
  var l9 = s.line(xArr[leftX[0] + 6].attr("x1"), topYperc, xArr[leftX[0] + 8].attr("x1"), topYperc);
  var l10 = s.line(xArr[leftX[0] + 7].attr("x1"), topYperc, xArr[leftX[0] + 7].attr("x1"), midYperc);
  var l11 = s.line(xArr[leftX[0] + 8].attr("x1"), topYperc, xArr[leftX[0] + 8].attr("x1"), bottomYperc);

  var l12 = s.line(xArr[leftX[0] + 9].attr("x1"), topYperc, xArr[leftX[0] + 9].attr("x1"), bottomYperc);
  var l13 = s.line(xArr[leftX[0] + 9].attr("x1"), topYperc, xArr[leftX[0] + 10].attr("x1"), topYperc);
  var l14 = s.line(xArr[leftX[0] + 9].attr("x1"), midYperc, xArr[leftX[0] + 10].attr("x1"), midYperc);
  var l15 = s.line(xArr[leftX[0] + 9].attr("x1"), bottomYperc, xArr[leftX[0] + 10].attr("x1"), bottomYperc);

  l1.attr({strokeWidth : 2});

  var homeRect = s.rect(leftXperc, topYperc, (xNumberArr[leftX[0] + 10] - leftX[1]) + "%", (bottomY[1] - topY[1]) + "%");
  var linkHome = s.el("a").attr({"xlink:href" : "/"});
  homeRect.appendTo(linkHome);
  homeRect.attr({fill : grad2})

  var homeSet = Snap.set(l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15);
  homeSet.attr({ class : "darker" });


  //bio text and rect as link

  var l16 = s.line(xArr[leftX[0] + 13].attr("x1"), topYperc, xArr[leftX[0] + 13].attr("x1"), bottomYperc);
  var l17 = s.line(xArr[leftX[0] + 13].attr("x1"), topYperc, xArr[leftX[0] + 15].attr("x1"), topYperc);
  var l18 = s.line(xArr[leftX[0] + 13].attr("x1"), bottomYperc, xArr[leftX[0] + 15].attr("x1"), bottomYperc);
  var l19 = s.line(xArr[leftX[0] + 15].attr("x1"), topYperc, xArr[leftX[0] + 15].attr("x1"), bottomYperc);
  var l20 = s.line(xArr[leftX[0] + 13].attr("x1"), midYperc, xArr[leftX[0] + 15].attr("x1"), midYperc);

  var l21 = s.line(xArr[leftX[0] + 16].attr("x1"), topYperc, xArr[leftX[0] + 16].attr("x1"), bottomYperc);

  var l22 = s.line(xArr[leftX[0] + 17].attr("x1"), topYperc, xArr[leftX[0] + 17].attr("x1"), bottomYperc);
  var l23 = s.line(xArr[leftX[0] + 17].attr("x1"), topYperc, xArr[leftX[0] + 19].attr("x1"), topYperc);
  var l24 = s.line(xArr[leftX[0] + 17].attr("x1"), bottomYperc, xArr[leftX[0] + 19].attr("x1"), bottomYperc);
  var l25 = s.line(xArr[leftX[0] + 19].attr("x1"), topYperc, xArr[leftX[0] + 19].attr("x1"), bottomYperc);

  l16.attr({strokeWidth : 2});
  l20.attr({strokeWidth : 2});

  var bioRect = s.rect(xArr[leftX[0] + 13].attr("x1"), topYperc, (xNumberArr[leftX[0] + 19] - xNumberArr[leftX[0] + 13] ) + "%", (bottomY[1] - topY[1]) + "%");
  var linkBio = s.el("a").attr({"xlink:href" : "/bio"});
  bioRect.appendTo(linkBio);
  bioRect.attr({fill : grad2})

  var bioSet = Snap.set(l16, l17, l18, l19, l20, l21, l22, l23, l24, l25);
  bioSet.attr({ class : "darker"});

  //work text and rect as link

  var l26 = s.line(xArr[leftX[0] + 23].attr("x1"), topYperc, xArr[leftX[0] + 23].attr("x1"), bottomYperc);
  var l27 = s.line(xArr[leftX[0] + 23].attr("x1"), bottomYperc, xArr[leftX[0] + 25].attr("x1"), bottomYperc);
  var l28 = s.line(xArr[leftX[0] + 25].attr("x1"), topYperc, xArr[leftX[0] + 25].attr("x1"), bottomYperc);
  var l29 = s.line(xArr[leftX[0] + 24].attr("x1"), midYperc, xArr[leftX[0] + 24].attr("x1"), bottomYperc);

  var l30 = s.line(xArr[leftX[0] + 26].attr("x1"), topYperc, xArr[leftX[0] + 26].attr("x1"), bottomYperc);
  var l31 = s.line(xArr[leftX[0] + 26].attr("x1"), topYperc, xArr[leftX[0] + 28].attr("x1"), topYperc);
  var l32 = s.line(xArr[leftX[0] + 26].attr("x1"), bottomYperc, xArr[leftX[0] + 28].attr("x1"), bottomYperc);
  var l33 = s.line(xArr[leftX[0] + 28].attr("x1"), topYperc, xArr[leftX[0] + 28].attr("x1"), bottomYperc);

  var l34 = s.line(xArr[leftX[0] + 29].attr("x1"), topYperc, xArr[leftX[0] + 29].attr("x1"), bottomYperc);
  var l35 = s.line(xArr[leftX[0] + 29].attr("x1"), topYperc, xArr[leftX[0] + 31].attr("x1"), topYperc);
  var l36 = s.line(xArr[leftX[0] + 29].attr("x1"), midYperc, xArr[leftX[0] + 31].attr("x1"), midYperc);
  var l37 = s.line(xArr[leftX[0] + 31].attr("x1"), topYperc, xArr[leftX[0] + 31].attr("x1"), midYperc);
  var l38 = s.line(xArr[leftX[0] + 29].attr("x1"), midYperc, xArr[leftX[0] + 31].attr("x1"), bottomYperc);

  var l39 = s.line(xArr[leftX[0] + 32].attr("x1"), topYperc, xArr[leftX[0] + 32].attr("x1"), bottomYperc);
  var l40 = s.line(xArr[leftX[0] + 32].attr("x1"), midYperc, xArr[leftX[0] + 34].attr("x1"), topYperc);
  var l41 = s.line(xArr[leftX[0] + 32].attr("x1"), midYperc, xArr[leftX[0] + 34].attr("x1"), bottomYperc);

  var l42 = s.line(xArr[leftX[0] + 35].attr("x1"), topYperc, xArr[leftX[0] + 37].attr("x1"), topYperc);
  var l43 = s.line(xArr[leftX[0] + 35].attr("x1"), topYperc, xArr[leftX[0] + 35].attr("x1"), midYperc);
  var l44 = s.line(xArr[leftX[0] + 35].attr("x1"), midYperc, xArr[leftX[0] + 37].attr("x1"), midYperc);
  var l45 = s.line(xArr[leftX[0] + 37].attr("x1"), midYperc, xArr[leftX[0] + 37].attr("x1"), bottomYperc);
  var l46 = s.line(xArr[leftX[0] + 35].attr("x1"), bottomYperc, xArr[leftX[0] + 37].attr("x1"), bottomYperc);

  l26.attr({strokeWidth : 2});

  var workSet = Snap.set(l26, l27, l28, l29, l30, l31, l32, l33, l34, l35, l36, l37, l38, l39, l40 , l41, l42, l43, l44, l45, l46);
  workSet.attr({class : "darker"});

  var workRect = s.rect(xArr[leftX[0] + 23].attr("x1"), topYperc, (xNumberArr[leftX[0] + 37] - xNumberArr[leftX[0] + 23] ) + "%", (bottomY[1] - topY[1]) + "%");
  var linkWork = s.el("a").attr({"xlink:href" : "works"});
  workRect.appendTo(linkWork);
  workRect.attr({fill : grad2})

}

function createContact (topY, bottomY, midY, topYperc, bottomYperc, midYperc) {
  leftX = closest(79, xNumberArr);
  leftXperc = leftX[1] + "%";
  //function to call in the creation of lines for x coordinate deviation from leftX
  function xIndex (deviation) {
    var result = xArr[leftX[0] + deviation].attr("x1");
    return result
  }
  //C
  var l1 = s.line(leftXperc, topYperc, leftXperc, bottomYperc),
      l2 = s.line(leftXperc, topYperc, xIndex(1), topYperc),
      l3 = s.line(leftXperc, bottomYperc, xIndex(1), bottomYperc),
  //O
      l4 = s.line(xIndex(2), topYperc, xIndex(2), bottomYperc),
      l5 = s.line(xIndex(2), topYperc, xIndex(4), topYperc),
      l6 = s.line(xIndex(2), bottomYperc, xIndex(4), bottomYperc),
      l7 = s.line(xIndex(4), topYperc, xIndex(4), bottomYperc),
  //N
      l8 = s.line(xIndex(5), topYperc, xIndex(5), bottomYperc),
      l9 = s.line(xIndex(5), topYperc, xIndex(7), bottomYperc),
      l10 = s.line(xIndex(7), topYperc, xIndex(7), bottomYperc),
  //T
      l11 = s.line(xIndex(9), topYperc, xIndex(9), bottomYperc),
      l12 = s.line(xIndex(8), topYperc, xIndex(10), topYperc),
  //A
      l13 = s.line(xIndex(11), topYperc, xIndex(11), bottomYperc),
      l14 = s.line(xIndex(11), topYperc, xIndex(12), topYperc),
      l15 = s.line(xIndex(11), midYperc, xIndex(12), midYperc),
      l16 = s.line(xIndex(12), topYperc, xIndex(12), bottomYperc),
  //C
      l17 = s.line(xIndex(13), topYperc, xIndex(13), bottomYperc),
      l18 = s.line(xIndex(13), topYperc, xIndex(14), topYperc),
      l19 = s.line(xIndex(13), bottomYperc, xIndex(14), bottomYperc),
  //T
      l20 = s.line(xIndex(16), topYperc, xIndex(16), bottomYperc),
      l21 = s.line(xIndex(15), topYperc, xIndex(17), topYperc);

  l1.attr({strokeWidth : 2});

  var contactSet = Snap.set(l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21);
  contactSet.attr({class : "darker"});

  var contactRect = s.rect(leftXperc, topYperc, (xNumberArr[leftX[0] + 17] - leftX[1]) + "%", (bottomY[1] - topY[1]) + "%");
  var link = s.el("a").attr({"xlink:href" : "/contact"});
  contactRect.appendTo(link);
  contactRect.attr({fill : grad2})
} //end of contact function


//create lines that define navbar and footer
function navbarLines () {
  var navBottomY = closest(9, yNumberArr);
  navBottomY = navBottomY[1] + "%";

  var navBottomLine = s.line("0%", navBottomY, "100%", navBottomY);
  navBottomLine.attr({class : "darker"});

  //navbar text - general variables
  var topY = closest(2, yNumberArr),
      bottomY = closest(6, yNumberArr),
      midY = closest(4, yNumberArr),
      topYperc = topY[1] + "%",
      bottomYperc = bottomY[1] + "%",
      midYperc = midY[1] + "%";

  createMenu(topY, bottomY, midY, topYperc, bottomYperc, midYperc);
  createContact(topY, bottomY, midY, topYperc, bottomYperc, midYperc);
}




function createMail () {
  var x = generateRandomNumber(50, 60);
  var leftX = closest(x, xNumberArr),
      leftXperc = leftX[1] + "%",
      topY = closest(87, yNumberArr),
      topYperc = topY[1] + "%",
      bottomY = closest(97, yNumberArr),
      bottomYperc = bottomY[1] + "%",
      midY = closest(92, yNumberArr),
      midYperc = midY[1] + "%";
  //function to call in the creation of lines for x coordinate deviation from leftX
  function xIndex (deviation) {
    var result = xArr[leftX[0] + deviation].attr("x1");
    return result
  }
  //make Envelope icon
  var l1 = s.line(leftXperc, topYperc, xIndex(14), topYperc),
      l2 = s.line(leftXperc, topYperc, leftXperc, bottomYperc),
      l3 = s.line(leftXperc, bottomYperc, xIndex(14), bottomYperc),
      l4 = s.line(xIndex(14), topYperc, xIndex(14), bottomYperc),
      l5 = s.line(leftXperc, topYperc, xIndex(7), midYperc),
      l6 = s.line(xIndex(7), midYperc, xIndex(14), topYperc);

  var mailSet = Snap.set(l1, l2, l3, l4, l5, l6);

  var counter = 0;
  var animation = setInterval(function () {
    mailSet[counter].attr({class: "darker"});
    mailSet[counter].attr({strokeWidth: 2});
    counter++;
    if (counter === 6) {
      clearInterval(animation);
    }
  }, 400);
}

function createHouse () {
  var leftX = closest(56, xNumberArr),
      leftXperc = leftX[1] + "%",
      topY = closest(77, yNumberArr),
      topYperc = topY[1] + "%",
      bottomY = closest(96, yNumberArr),
      bottomYperc = bottomY[1] + "%",
      midY = closest(85, yNumberArr),
      midYperc = midY[1] + "%",
      doorTop = closest(89, yNumberArr),
      doorTopPerc = doorTop[1] + "%";


  function xIndex (deviation) {
    var result = xArr[leftX[0] + deviation].attr("x1");
    return result
  }
  var l1 = s.line(leftXperc, bottomYperc, leftXperc, midYperc),
      l2 = s.line(xIndex(-1), midYperc, xIndex(5), topYperc),
      l3 = s.line(xIndex(5), topYperc, xIndex(11), midYperc),
      l4 = s.line(xIndex(10), midYperc, xIndex(10), bottomYperc),
      l5 = s.line(leftXperc, bottomYperc, xIndex(10), bottomYperc),
      l6 = s.line(xIndex(4), doorTopPerc, xIndex(4), bottomYperc),
      l7 = s.line(xIndex(4), doorTopPerc, xIndex(6), doorTopPerc),
      l8 = s.line(xIndex(6), doorTopPerc, xIndex(6), bottomYperc),
      l9 = s.line(xIndex(-1), midYperc, xIndex(11), midYperc);

  var houseSet = Snap.set(l1, l2, l3, l4, l5, l6, l7, l8, l9);
  var counter = 0;
  var animation = setInterval(function () {
    houseSet[counter].attr({class: "darker"});
    houseSet[counter].attr({strokeWidth: 2});
    counter++;
    if (counter === 9) {
      clearInterval(animation);
    }
  }, 500);
};

function createSpeaker () {
  var leftX = closest(45, xNumberArr),
      leftXperc = leftX[1] + "%",
      topY = closest(11, yNumberArr),
      topYperc = topY[1] + "%",
      bottomY = closest(21, yNumberArr),
      bottomYperc = bottomY[1] + "%",
      midY1 = closest(14, yNumberArr),
      midY1perc = midY1[1] + "%",
      midY2 = closest(18, yNumberArr),
      midY2perc = midY2[1] + "%",
      midY3 = closest(12.5, yNumberArr),
      midY3perc = midY3[1] + "%",
      midY4 = closest(19.5, yNumberArr),
      midY4perc = midY4[1] + "%";



  function xIndex (deviation) {
    var result = xArr[leftX[0] + deviation].attr("x1");
    return result
  }
  var l1 = s.line(leftXperc, midY1perc, leftXperc, midY2perc),
      l2 = s.line(leftXperc, midY1perc, xIndex(2), midY1perc),
      l3 = s.line(leftXperc, midY2perc, xIndex(2), midY2perc),
      l4 = s.line(xIndex(2), midY1perc, xIndex(2), midY2perc),
      l5 = s.line(xIndex(2), midY1perc, xIndex(6), topYperc),
      l6 = s.line(xIndex(2), midY2perc, xIndex(6), bottomYperc),
      l7 = s.line(xIndex(6), topYperc, xIndex(6), bottomYperc),

      l8 = s.line(xIndex(7), midY1perc, xIndex(7), midY2perc),
      l9 = s.line(xIndex(9), midY3perc, xIndex(9), midY4perc),
      l10 = s.line(xIndex(11), topYperc, xIndex(11), bottomYperc);

  //arrow
  var arrowBottom = closest(32, yNumberArr),
      arrowBottomPerc = arrowBottom[1] + "%",
      arrowTop = closest(23, yNumberArr),
      arrowTopPerc = arrowTop[1] + "%",
      arrowMid = closest(26, yNumberArr)
      arrowMidPerc = arrowMid[1] + "%";

  var l11 = s.line(xIndex(4), arrowTopPerc, xIndex(4), arrowBottomPerc),
      l12 = s.line(xIndex(1), arrowMidPerc, xIndex(4), arrowTopPerc),
      l13 = s.line(xIndex(4), arrowTopPerc, xIndex(7), arrowMidPerc);


  var speakerRect = s.rect(leftXperc, topYperc, (xNumberArr[leftX[0] + 11] - leftX[1]) + "%", (bottomY[1] - topY[1]) + "%");
  speakerRect.attr({fill: grad2, id: "speakerRect", class : "newCursor"});
  var arrowSet = Snap.set(l11, l12, l13);
  arrowSet.attr({class: "darker arrow_to_speaker", strokeWidth: 2});
  var speakerSet = Snap.set(l1, l2, l3, l4, l5, l6, l7);
  speakerSet.attr({class: "darker"});

  var soundSwitchSet = Snap.set(l8, l9, l10);
  soundSwitchSet.attr({class: "soundSwitch"});
}

//create the dimensions of the containers that holds the website's content'.
function containerDimensions (x1, y1, x2, y2, idName) {
  var leftX = closest(x1, xNumberArr),
      topY = closest(y1, yNumberArr),
      rightX = closest(x2, xNumberArr),
      bottomY = closest(y2, yNumberArr),
      topYperc = topY[1] + "%",
      leftXperc = leftX[1] + "%",
      bottomYperc = bottomY[1] + "%",
      rightXperc = rightX[1] + "%";

  var container = document.getElementById(idName);
  container.style.top = topYperc;
  container.style.left = leftXperc;
  container.style.width = (rightX[1] - leftX[1]) + "%";
  container.style.height = (bottomY[1] - topY[1]) + "%";
}


//call functions for all pages
navbarLines();
