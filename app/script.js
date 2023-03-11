// Body onload
function init() {
  document.getElementById("output").innerHTML = "Page loaded!";
}

window.onload = function() {
  document.getElementById("output").innerHTML = "Page loaded!";
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("output").innerHTML = "Page loaded!";
});


// Image onload
var myImage = document.getElementById("myImage");
myImage.onload = function() {
  document.getElementById("imageLoadedMessage").innerHTML = "Image loaded!";
};

function imageLoaded() {
  document.getElementById("imageLoadedMessage").innerHTML = "Image loaded!";
}

myImage.addEventListener('load', function() {
  document.getElementById("imageLoadedMessage").innerHTML = "Image loaded!";
});


// JavaScript loaded in browser
function LoadedJs() {
  console.log("JS Loaded by the browser!");
}


