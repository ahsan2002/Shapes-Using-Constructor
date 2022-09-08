var getMainDiv = document.getElementById("container");

function Shapes (height, width, background, radius, br_right, br_left, br_top, br_bottom) {
    this.height = height,
    this.width = width,
    this.background = background,
    this.radius = radius,
    this.br_right = br_right,
    this.br_left = br_left,
    this.br_top = br_top,
    this.br_bottom = br_bottom
}

var cone = new Shapes("0px", "0px", undefined, "50%", "100px solid transparent", "100px solid transparent", "100px solid grey", undefined);
var triangle = new Shapes("0px", "0px", "transparent", undefined, "100px solid transparent", "100px solid transparent", undefined, "150px solid purple");
var parallelogram = new Shapes("150px", "250px", "blue",undefined, undefined, undefined, undefined, undefined);

//div
var getParentDiv = document.createElement("div");
getParentDiv.setAttribute("id","shapes-container")
getMainDiv.appendChild(getParentDiv);


var conDiv = document.createElement("div");
conDiv.style.height = cone.height;
conDiv.style.width = cone.width;
conDiv.style.background = cone.background;
conDiv.style.borderBottom = cone.br_bottom;
conDiv.style.borderLeft = cone.br_left;
conDiv.style.borderRight = cone.br_right;
conDiv.style.borderTop = cone.br_top;
getParentDiv.appendChild(conDiv);


var triDiv = document.createElement("div");
triDiv.style.height = triangle.height;
triDiv.style.width = triangle.width;
triDiv.style.background = triangle.background;
triDiv.style.borderBottom = triangle.br_bottom;
triDiv.style.borderLeft = triangle.br_left;
triDiv.style.borderRight = triangle.br_right;
getParentDiv.appendChild(triDiv);

var paraDiv = document.createElement("div");
paraDiv.style.height = parallelogram.height;
paraDiv.style.width = parallelogram.width;
paraDiv.style.background = parallelogram.background;
paraDiv.style.transform = "skew(-20deg)"
getParentDiv.appendChild(paraDiv);
