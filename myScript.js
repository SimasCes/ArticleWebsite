// To preload images when the website is loaded; should help slower internet users.
// https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/ stated to copy the code and edit the preload image file path.
<!--//--><![CDATA[//><!--
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"images/city.jpg",
				"images/about.jpg",
				"images/article1.jpg",
                "images/article2.jpg",
                "images/add.jpg",
                "images/team_main.jpg",
				"images/cardio_main.jpg",
				"images/weight_main.jpg",
                "images/diet_main.jpg",
                "images/weight_1.jpg",
                "images/cardio_1.jpg",
				"images/diet_1.jpg",
				"images/diet_2.jpg",
                "images/search.jpg",
                "images/about.jpg",
			)
		//--><!]]>




//This code was copied from https://www.w3schools.com/howto/howto_js_search_menu.asp, the id and class names were changed
// This is for the search bar to work on the search page
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search_bar");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



/* For the image carousel*/
/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_multiple was copied to create the image carousel, some code changed*/
var slideIndex = [1,1];
var slideId = ["slide_array"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}





//My own code below, I used a range of tutorials to help create it and some templates how to write it (structurally), but it has been changed and edited to the extent it is created by me.


//For the index.html about us image change; so the image 'pops' when your mouse goes over it, to highlight that you can click it
function img_shrink(x) {
    x.style.padding = "0.4vw";
}
//To change padding back to normal, when you take your mouse off the image.
function img_normal(x) {
    x.style.padding = "0vw";
}


//Code to make the button work, when you click it you can input your own name to make it more personalised
function sayHello() {
    var text;
    var yourName = prompt("Please enter your name:");
    if (yourName == null || yourName == "") {
        text = "Hello stranger...";
    } else {
        text = "Hello " + yourName + "! How are you today?";
    }
    document.getElementById("text_over_image_0").innerHTML = text;
}























