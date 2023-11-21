import './style.css'
import { keycaps } from './js/keycaps'
import { DOMSelector } from './js/domselector'

cardObj = {

    name: keycaps.name,
    price: keycaps.price,
    onSale: keycaps.onSale,
    profile: keycaps.profile,
    inStock: keycaps.inStock,

}

document.querySelector('#app').innerHTML =
`
  <div class="button-holder">
    
    <button id="iso"></button>
    <button id="ansi"></button>
    <button id="oem"></button>
    <button id="oem"></button>
    <button id="oem"></button>
    <button id="oem"></button>
  
  </div>
    `
;


keycaps.forEach((keycap) => DOMSelector.app.insertAdjacentHTML(
  "beforeend",
  `
  <div class="keycap-card" id="${keycap.name}">
    <p>"${keycap.name}"</p>
    <p>"${keycap.price}"</p>
    <p>"${keycap.onSale}"</p>
    <p>"${keycap.profile}"</p>
    <p>"${keycap.inStock}"</p>
  </div>
  `
));

