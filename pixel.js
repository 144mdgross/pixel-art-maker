//add COMCONTENTLOADED
document.addEventListener("DOMContentLoaded", function (event){

//select the body
var theBody = document.getElementsByTagName('body')[0]
console.log(theBody)

var paintDiv = document.createElement('div')
theBody.appendChild(paintDiv)

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

//create gap to distinguish pallette from grid
var gap = document.createElement('div')
gap.classList.add('gap')
theBody.appendChild(gap)
console.log('gap', gap)

//create pallette rows
for (var j = 0; j < 2; j++) {
  var colorDivRow = document.createElement('div')
  colorDivRow.classList.add('grid')
  theBody.appendChild(colorDivRow)
//create pallette columns
//now get them to access colors stored in array
var colorArray = ['red', 'green', 'purple']
//this gives me as many divs as elements in the color array. but the color follows the columns instead of being unique to each square. fix later.
//make color pallette with an array
for (var w = 0; w < colorArray.length; w++) {
    var colorDivColumn = document.createElement('div')
    var styleColor = colorArray[w]
    colorDivColumn.style.backgroundColor = styleColor

  colorDivColumn.classList.add('column-2')
  colorDivRow.appendChild(colorDivColumn)
  }

}

//add eventListener
theBody.addEventListener("click", function(e){
  e.target.style.backgroundColor = "red";
//define function to share color between what's click on the pallette and the grid.

})//click the body change the backgroundColor to red listener
//create event listener and function to return class of pallette clicked

//put event listener on the pallette..


// gap.addEventListener("click", function(e){
//   //adding event listener to gap does not add it to the color pallette. Maybe make separate divs for the main sections so i don't have to have the clicked listener on just the body.
//   e.target.style.backgroundColor = "yellow"
//   console.log('clicked grid @ ' + e)
// }) //click color pallette listener end

console.log(theBody)

})//DOMContentLoaded event listener end
