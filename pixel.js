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
for (var j = 0; j < 10; j++) {
var theDiv = document.createElement('div')
theDiv.classList.add('grid')
paintDiv.appendChild(theDiv)
console.log(theDiv)

//make other divs and attach them to the grid div
for(var i = 0; i < 10; i++) {
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
var colorArray = ['red', 'green', 'purple', 'pink', 'yellow', 'maroon']
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


//add eventListener for changing color
paintDiv.addEventListener("mousedown", function(e){
//keep the drag from highlighting the whole body
  if (e.target === this) {
    //do nothing
  } else {
    //do what i want you to do
    e.target.style.backgroundColor = activeColor['color'];
    //alter function for dragging mouse
  }
//define function to share color between what's click on the palate and the grid.

})//click the body change the backgroundColor to red listener
//create event listener and function to return class of pallette clicked
var activeColor = {
  color: 'crimson',
}
//function to save palete color. should it be a method?



//put event listener on the pallette..
palateDiv.addEventListener('click', function(e){
console.log('clicked on palete')
//this is working. now how to update the color object when clicking on targets?
color = e.target.style.backgroundColor

function chooseColor (color) {
  if (color !== activeColor['color']) {
      activeColor['color'] = color
  }
  return activeColor['color']
  console.log(activeColor['color'])
}

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
