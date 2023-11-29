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


DOMSelector.buttons.purpleMintThemeButton.addEventListener("click", function(event){

  DOMSelector.body.classList.add("purple-mint-theme")
  DOMSelector.body.classList.remove("dark-theme")

});

DOMSelector.buttons.darkThemeButton.addEventListener("click", function(event){

  DOMSelector.body.classList.add("dark-theme")
  DOMSelector.body.classList.remove("purple-mint-theme")
  
});



keycaps.forEach((keycap) => DOMSelector.body.insertAdjacentHTML(
  "beforeend",
  `
  <div class="keycap-card" id="${keycap.profile} ${keycap.name}">
    <p>$${keycap.price}</p>
    <p>on sale:
    ${//if (keycap.onSale === true) {
    //    this.innerHTML = `
    //    on sale!
    //    `
    // }
    keycap.onSale}
    </p>
    <p>${keycap.profile} profile</p>
    <p>in stock: ${keycap.inStock}</p>
    <p>multiple colorways: ${keycap.multicolors[0]}</p>
    <div class="data">
  </div>
  `
));

function onlyShowThis(onlyShowThis){
  document.querySelectorAll("#" + onlyShowThis);
  DOMSelector.keycapCard.forEach((card) => keycapCard.innerHTML.style("display: hidden"))
  DOMSelector.keycapCard.forEach((card) => card.filter((wantedCard) => wantedCard.classList.contains(onlyShowThis)))
}

DOMSelector.buttons.forEach((btn) => btn.addEventListener("click", function(event){

  onlyShowThis(btn.id);

}))
