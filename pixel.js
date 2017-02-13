//add DOMCONTENTLOADED
document.addEventListener("DOMContentLoaded", function(event) {
    //select the body
    var theBody = document.getElementsByTagName('body')[0]
    theBody.style.margin = "0% 1% 1% 0%"
    theBody.style.backgroundImage = 'url(https://www.freecreatives.com/wp-content/uploads/2016/05/Abstract-Canvas-Backgrounds.jpg)'
    //create parent for canvas
    //create title
    var title = document.createElement('h1')
    title.style.fontSize = '4em'
    title.innerText = 'pixel art'
    title.style.fontFamily = 'Barrio, cursive';
    title.style.textAlign = 'center'
    title.style.padding = '0em'
    title.style.margin = '0em'
    theBody.appendChild(title)

    var paintDiv = document.createElement('div')
    paintDiv.classList.add('canvas')
    theBody.appendChild(paintDiv)
    //create parent for palate
    var palateDiv = document.createElement('div')
    palateDiv.classList.add('palate')
    theBody.appendChild(palateDiv)

    //make div to attach other divs to for the drawing grid
    for (var j = 0; j < 55; j++) {
        var theDiv = document.createElement('div')
        theDiv.classList.add('grid')
        paintDiv.appendChild(theDiv)
        //console.log(theDiv)

        //make columns and attach them to the grid rows
        for (var i = 0; i < 200; i++) {
            var theOtherDiv = document.createElement('div')
            theOtherDiv.classList.add('column')
            theDiv.appendChild(theOtherDiv)
        }
    }

    //create palate rows
    var colorDivRow = document.createElement('div')
    colorDivRow.classList.add('grid')
    palateDiv.appendChild(colorDivRow)

    //store colors....this is a lengthy way to do it...
    var colorArray = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
    //make color palate with an array
    for (var w = 0; w < colorArray.length; w++) {
        var colorDivColumn = document.createElement('div')
        var styleColor = colorArray[w]
        colorDivColumn.style.backgroundColor = styleColor

        colorDivColumn.classList.add('column-2')
        colorDivRow.appendChild(colorDivColumn)
    }
    //add reset button to blank out canvas
    var reset = document.createElement('button')
    reset.classList.add('reset-button')
    reset.innerText = 'reset'
    reset.style.fontSize = '1em'
    reset.style.padding = '.3em 4.45%'
    reset.style.backgroundColor = 'LightSlateGrey'
    colorDivRow.appendChild(reset)
    //console.log('reset', reset)

    //someday..add diferent skill levels of 'art' making.

    var activeColor = {
        color: 'black',
        hiddenColor: 'transparent'
    }
    //add activeColor indicator
    var displayColor = document.createElement('div')
    displayColor.classList.add('displayColor')
    displayColor.style.width = '100%'
    displayColor.style.height = '2em';
    displayColor.style.border = '3px solid black'
    displayColor.style.display = 'inlineBlock'
    displayColor.style.backgroundColor = 'black'
    paintDiv.appendChild(displayColor)
    //console.log(displayColor,'displayColor')

    //add event listener to reset page
    reset.addEventListener("click", function() {
        //reload window from cache instead of server
        window.location.reload(false);
    }) //end of reset event listener

    //variable to control canvas event listeners
    var paint = false;
    //add color when clicked
    paintDiv.addEventListener('mousedown', function(e) {
        paint = true;
        if (e.target === this) {
            //do nothing
        } else {
            e.target.style.backgroundColor = activeColor['color']
        }
    })
    //stop the color when you lift the mouse
    paintDiv.addEventListener('mouseup', function(e) {
        paint = false;
    })
    //drag color, but don't fill the entire grid
    paintDiv.addEventListener('mouseover', function(e) {
        if (e.target === this) {
            //do nothing
        } else if (paint === true) {
            e.target.style.backgroundColor = activeColor['color']
        } else {
            //do nothing ...
        }
    })

    //create paint cursor
    var cursor = false;
    //add event listener so that if mouseeneters the palateDiv paint = false
    palateDiv.addEventListener('mouseenter', function(e) {
        paint = false;
        cursor = false;
    }) //end of debugging palate listener

    paintDiv.addEventListener('mouseenter', function(e) {
        cursor = true;
        if (cursor === true) {
            e.target.style.cursor = "url(http://www.rw-designer.com/cursor-extern.php?id=22875), cell"
        }
    }) //end of cursor event listener
    //object to hold active color to draw with
//this is where activeColor was before moving it.

    // var palateClicks = {
    //   count: 0
    // }
    //variable to control behaviour of event listeners master
    //var chosenColor = false;
    //put event listener on the pallette..
    palateDiv.addEventListener('mousedown', function(e) {
        //var chosenColor = true;
      if (e.target === this) {
        //do nothing
      } else {
        color = e.target.style.backgroundColor
        displayColor.style.backgroundColor = color
        //modify value of object with the selected color
        function chooseColor(color) {
            if (color !== activeColor['color']) {
                activeColor['color'] = color
            }
            return activeColor['color']
        }
      }
        chooseColor(color)
    }) //end of palete event listener

    // master.addEventListener('click', function (e){
    //   theBody.classList.add('image')
    //   paintDiv.classList.add('hidden')
      //need to add event listener to change background of canvas to inherit no matter what is clicked.
      // paintDiv.style.backgroundImage = 'url("www.bc.edu/bc_org/avp/cas/his/CoreArt/art/resourcesb/dav_marat.jpg")'
    //})//end of master event listener


    console.log(theBody)
}) //DOMContentLoaded event listener end


//ideas to return to/improve on la
