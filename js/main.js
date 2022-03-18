// -----------------------------------------------------------------------------
// RETURN TO TOP BUTTON
// -----------------------------------------------------------------------------

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// -----------------------------------------------------------------------------
// NAVBAR
// -----------------------------------------------------------------------------
// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='far fa-times-circle'></i>";
  }
}
toggle.addEventListener('click', toggleMenu, false);


// -----------------------------------------------------------------------------
// TYPEWRITER
// -----------------------------------------------------------------------------
/*window.addEventListener('DOMContentLoaded', () => {
	let toWrite = ['je m\'appelle Sina !', 'je suis développeuse front-end.'];

    let textNode, elm, textWrapper = document.getElementById('typewriter');
    
    function writeText(text) {
      while(textWrapper.hasChildNodes()) {
        textWrapper.removeChild(textWrapper.lastChild);
      }
      [...text].map(
        (letter, i) => (
          setTimeout(function(){
            textNode = document.createTextNode(letter);
            elm = document.createElement('span');
            elm.appendChild(textNode);           
            textWrapper.appendChild(elm);
          }, 50*i)
          )
        )
    }
  
    writeText(toWrite[0]);
    let current = 1
  
    setInterval(function(){
      writeText(toWrite[current])
      current++;
      if(current >= toWrite.length) {
        current = 0;
      }
    }, 2000)
  })()*/

window.addEventListener('DOMContentLoaded', () => {
      const delay = 20;
  let toWrite = ['je m\'appelle Sina !', 'je suis développeuse front-end.'];

  let textNode, elm, textWrapper = document.getElementById('typewriter');

  function writeText(text) {
    const textToDeleteLength = textWrapper.children.length;

    for(let i = 0; i < textToDeleteLength; i++) {
      setTimeout(function(){
        textWrapper.removeChild(textWrapper.lastChild)
      }, delay * i)
    }

    [...text].map(
      (letter, i) => (
        setTimeout(function(){
          textNode = document.createTextNode(letter);
          elm = document.createElement('span');
          elm.appendChild(textNode);           
          textWrapper.appendChild(elm);
        }, delay * (i + textToDeleteLength))
        )
      )
  }
  
  writeText(toWrite[0]);
  let current = 1

  setInterval(function(){
    writeText(toWrite[current])
    current++;
    if(current >= toWrite.length) {
      current = 0;
    }
  }, 2500)
})();