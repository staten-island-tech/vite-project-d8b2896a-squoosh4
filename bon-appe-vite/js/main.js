import '../css/style.css'
import { keycaps } from './keycaps.js'
import { DOMSelector } from './domselector.js'

  // cardObj = {

  //     name: keycaps.name,
  //     price: keycaps.price,
  //     onSale: keycaps.onSale,
  //     profile: keycaps.profile,
  //     inStock: keycaps.inStock,

  // }

  keycaps.forEach((keycap) => DOMSelector.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="keycap-card" id="${keycap.profile} ${keycap.name} ${keycap.onSale}">
        <p>${keycap.name}</p>
        <p>$${keycap.price}</p>
        <p>on sale:
        ${//if (keycap.onSale === true) {
        //    this.innerHTML = `
        //    on sale!
        //    `
        // }
        keycap.onSale}
        </p>
        <p>iso/ansi: ${keycap.isoOrANSI}</p>
        <p>${keycap.profile} profile</p>
        <p>in stock: ${keycap.inStock}</p>
        <p>multiple colorways: ${keycap.multicolors[0]}</p>
      </div>
    `
));


function onlyShowThis(onlyShowThis){

	//document.querySelectorAll("#" + onlyShowThis);
	DOMSelector.keycapCard.forEach((card) => { if (card.id.contains(onlyShowThis) === false)  
    card.innerHTML.style.display("none")});

}
  
DOMSelector.buttons.choccoMintThemeButton.addEventListener("click", function(event){

    DOMSelector.body.classList.add("chocco-mint-theme")
    DOMSelector.body.classList.remove("dark-theme")
    DOMSelector.body.classList.remove("purple-mint-theme")
    
});

DOMSelector.buttons.darkThemeButton.addEventListener("click", function(event){

    DOMSelector.body.classList.remove("chocco-mint-theme")
    DOMSelector.body.classList.add("dark-theme")
    DOMSelector.body.classList.remove("purple-mint-theme")
  
});

DOMSelector.buttons.purpleMintThemeButton.addEventListener("click", function(event){

	DOMSelector.body.classList.remove("chocco-mint-theme")
	DOMSelector.body.classList.remove("dark-theme")
	DOMSelector.body.classList.add("purple-mint-theme")

});


DOMSelector.buttons.ansiButton.addEventListener("click", function(event){

  onlyShowThis(ansi);
  console.log("click");

})

DOMSelector.buttons.isoButton.addEventListener("click", function(event){

  onlyShowThis(iso);
  console.log("click");

})

DOMSelector.buttons.oemButton.addEventListener("click", function(event){

  onlyShowThis(oem);
  console.log("click");

})

//DOMSelector.buttons.inStockButtonButton.addEventListener("click", function(event){
//
//  onlyShowThis(btn.id);
//
//})
//
//DOMSelector.buttons.onSaleButton.addEventListener(click, function(event){
//  onlyShowThis(btn.id);
//})