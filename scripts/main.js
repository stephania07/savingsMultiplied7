document.addEventListener('DOMContentLoaded', function() {
var loginModal = document.querySelector(".login-modal");
var lightbox = document.querySelector(".lightbox");
var loginLink = document.querySelector(".login");
var cancelButton = document.querySelector('input[value="cancel"]'); 

var loginModalToggleAreas = document.querySelectorAll(
  '.lightbox, .login, input[value="cancel"]'
  );

for (var i = 0; i < loginModalToggleAreas.length; i++) {
  loginModalToggleAreas[i].addEventListener('click', function() {
    toggle(loginModal);
      });
    }
});
/*lightbox.addEventListener("click", function(){
  toggle(loginModal);
});


cancelButton.addEventListener("click", function(){
  toggle(loginModal);
});

loginLink.addEventListener("click", function() {
  toggle(loginModal);
  });
});
*/
function toggle(element) {
  if (element.classList)
  	 element.classList.toggle("hidden");

}

function hide(element) {
if (element.classList)
	element.classList.add('hidden');
else
element.className += " " + "hidden";
}

function show(element) {
if(element.classList)
	element.classList.remove("hidden");
else
	element.className = element.className
.replace(new RegExp('(^/\\b))' + 'hidden'.split(' '))
.join('|' + '(\\b|$)', 'gi'), ' ');
}

/* Shopping page*/
function getJSON(url, cb) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function() {
cb(JSON.parse(xhr.responseText));
};
xhr.send();
}

function addItemToList($listItems, items) {
  var $li = document.createElement("li");
  var $image = document.createElement("img");
  var $price = document.createElement("p"); //do the same with the rest;
  var $remaining = document.createElement("p");
  var $seller = document.createElement("p");
  var $title = document.createElement("p");

  $image.src = items.image;
  $price.innerHTML = items.price;
  $remaining.innerHTML = items.remaining;
  $seller.innerHTML = items.seller;
  $title.innerHTML = items.title;

  $li.appendChild($image);
  $li.appendChild($price);//the same with the rest
  $li.appendChild($remaining);
  $li.appendChild($seller);
  $li.appendChild($title);


  $listItems.appendChild($li);//just to get all the children of the li ....
}
 getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data) {
 	
   var $ul = document.getElementById("gallery");
    var items = data;
   //$ul.innerHTML = "";
     for (var i = 0; i < items.length; i++) {
       addItemToList($ul, items[i]);
}
});



