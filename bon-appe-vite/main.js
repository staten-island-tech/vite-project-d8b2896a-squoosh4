import './css/style.css'
import { keycaps } from './js/keycaps.js'
import { DOMSelector } from './js/domselector.js'

  // cardObj = {

  //     name: keycaps.name,
  //     price: keycaps.price,
  //     onSale: keycaps.onSale,
  //     profile: keycaps.profile,
  //     inStock: keycaps.inStock,

  // }

document.querySelector('#app').innerHTML = `
  
  <div class="button-holder">
    <button id="iso">iso layout</button>
    <button id="ansi">ansi layout</button>
    <button id="oem">oem profile</button>
    <button id="in-stock">in stock items</button>
    <button id="on-sale">discounted items</button>
    <button id="purple-mint">purple mint theme</button>
    <button id="dark">dark theme</button>
  </div>
`
DOMSelector.buttons.purpleMintThemeButton.addEventListener("click", function(event){

  event.preventDefault();
  DOMSelector.body.classList.add(purple-mint-theme)

});

DOMSelector.buttons.darkThemeButton.addEventListener("click", function(event){

  event.preventDefault();
  DOMSelector.body.classList.add(dark-theme)
  
});



keycaps.forEach((keycap) => DOMSelector.app.insertAdjacentHTML(
  "beforeend",
  `
  <div class="keycap-card" id="${keycap.name}">
    <p>"${keycap.price}"</p>
    <p>"${keycap.onSale}"</p>
    <p>"${keycap.profile}"</p>
    <p>"${keycap.inStock}"</p>
  </div>
  `
));

