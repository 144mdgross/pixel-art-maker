//add COMCONTENTLOADED

document.addEventListener("DOMContentLoaded", function (event){

//select the body
var theBody = document.getElementsByTagName('body')[0]
console.log(theBody)

var paintDiv = document.createElement('div')
paintDiv.classList.add('canvas')
theBody.appendChild(paintDiv)

var palateDiv = document.createElement('div')
palateDiv.classList.add('palate')
theBody.appendChild(palateDiv)

//make div to attach other divs to
for (var j = 0; j < 20; j++) {
var theDiv = document.createElement('div')
theDiv.classList.add('grid')
paintDiv.appendChild(theDiv)
console.log(theDiv)

//make other divs and attach them to the grid div
for(var i = 0; i < 100; i++) {
  var theOtherDiv = document.createElement('div')
  theOtherDiv.classList.add('column')
  theDiv.appendChild(theOtherDiv)
}
}

//create gap to distinguish palate from grid
// var gap = document.createElement('div')
// gap.classList.add('gap')
// theBody.appendChild(gap)
// console.log('gap', gap)

//create palate rows
  var colorDivRow = document.createElement('div')
  colorDivRow.classList.add('grid')
  palateDiv.appendChild(colorDivRow)
//create palate columns
//now get them to access colors stored in array
//var colorArray = ['red', 'green', 'purple', 'pink', 'yellow', 'maroon']
var colorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


//this gives me as many divs as elements in the color array. but the color follows the columns instead of being unique to each square. fix later.
//make color palate with an array
for (var w = 0; w < colorArray.length; w++) {
    var colorDivColumn = document.createElement('div')
    var styleColor = colorArray[w]
    colorDivColumn.style.backgroundColor = styleColor

  colorDivColumn.classList.add('column-2')
  colorDivRow.appendChild(colorDivColumn)
  }



//add reset button.
var reset = document.createElement('button')
reset.classList.add('reset-button')
reset.innerText = 'reset'
palateDiv.appendChild(reset)
console.log('reset', reset)

//add event listener to reset page
reset.addEventListener("click", function (){
//reload window from cache instead of server
  window.location.reload(false);
})


var paint = false;

paintDiv.addEventListener('mousedown', function(e){
  paint = true;
  if (e.target === this) {
    //do nothing
  }
})

paintDiv.addEventListener('mouseup', function(e){
  paint = false;
})

paintDiv.addEventListener('mouseover', function(e){
  if (e.target === this) {
    //do nothing
  } else if (paint === true) {
    e.target.style.backgroundColor = activeColor['color']
  } else {
    //do nothing
  }
})
//add eventListener for changing color
// paintDiv.addEventListener("mousedown", function(e){
// //keep the drag from highlighting the whole body
//
//   if (e.target === this) {
//     //do nothing
//   } else {
//     //do what i want you to do
//     e.target.style.backgroundColor = activeColor['color'];
//     paintDiv.addEventListener('mouseover', function(e){
//       console.log('mouseover')
//       if (e.target === this) {
//         //do nothing
//       } else {
//       e.target.style.backgroundColor = activeColor['color']
//     }
//
//   })//end of mouseover
//     //alter function for dragging mouse
//   }
// //define function to share color between what's click on the palate and the grid.
//
// })//click the body change the backgroundColor to red listener
// //create event listener and function to return class of pallette
//
//     //e.target.style.backgroundColor = 'white'
//     //do nothing
//   //}
//
// })//end of mouseup


var activeColor = {
  color: 'black',
}
//function to save palete color. should it be a method?

//create function to highlight activeColor only.

var palateClicks = {
  count: 0
}


var chosenColor = false;
//put event listener on the pallette..
palateDiv.addEventListener('mousedown', function(e){

var chosenColor = true;
// palateClicks['count'] += 1
// //how to add and remove box shadow?
// console.log('palate clicks ==>', palateClicks['count'])

//e.target.style.boxShadow = "0px 0px 30px blue"
//e.target.classList.add('shadow')
//console.log(e.target.classList)
color = e.target.style.backgroundColor

function chooseColor (color) {
  if (color !== activeColor['color']) {
      activeColor['color'] = color
  }
  return activeColor['color']
  console.log(activeColor['color'])
}
//call the function
chooseColor(color)


})//end of palete event listener


// gap.addEventListener("click", function(e){
//   //adding event listener to gap does not add it to the color pallette. Maybe make separate divs for the main sections so i don't have to have the clicked listener on just the body.
//   e.target.style.backgroundColor = "yellow"
//   console.log('clicked grid @ ' + e)
// }) //click color pallette listener end

//add reset event listener
reset.addEventListener('click', function (e){


})//end of reset even listener


console.log(theBody)

})//DOMContentLoaded event listener end
