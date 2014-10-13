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

