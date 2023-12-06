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
function cardCreate(arr) {

	DOMSelector.cardHolder.innerHTML = ""
	arr.forEach((item) => DOMSelector.cardHolder.insertAdjacentHTML(
		"beforeend",
		`
      <div class="keycap-card" id="${item.profile} ${item.name} ${item.onSale}">
        <p>${item.name}</p>
        <p>$${item.price}</p>
        <p>on sale:
        ${//if (item.onSale === true) {
		//    this.innerHTML = `
		//    on sale!
		//    `
		// }
		item.onSale}
        </p>
        <p>iso/ansi: ${item.isoOrANSI}</p>
        <p>${item.profile} profile</p>
        <p>in stock: ${item.inStock}</p>
        <p>multiple colorways: ${item.multicolors[0]}</p>
      </div>
    `
	));
};

cardCreate(keycaps);

function onlyShowThis(onlyShowThis) {

	//document.querySelectorAll("#" + onlyShowThis);
	//DOMSelector.keycapCard.forEach((card) => { if (card.id !== onlyShowThis)  
	//  card.innerHTML.style.display("none")});
	DOMSelector.cardHolder.innerHTML = "";
	const wanted_thing = keycaps.filter((card) => keycaps.includes(onlyShowThis));
	cardCreate(wanted_thing);

};

function themeSwitcher(cssThemeClass) {

	DOMSelector.body.classList.remove("chocco-mint-theme");
	DOMSelector.body.classList.remove("dark-theme");
	DOMSelector.body.classList.remove("purple-mint-theme");
	DOMSelector.body.classList.add(cssThemeClass);

}

DOMSelector.buttons.choccoMintThemeButton.addEventListener("click", function (event) {

	themeSwitcher("chocco-mint-theme");

});

DOMSelector.buttons.darkThemeButton.addEventListener("click", function (event) {

	themeSwitcher("dark-theme");

});

DOMSelector.buttons.purpleMintThemeButton.addEventListener("click", function (event) {

	themeSwitcher("purple-mint-theme");

});


DOMSelector.buttons.ansiButton.addEventListener("click", function (event) {

	console.log("ansi click");
	const wanted_thing = keycaps.filter((card) => card.isoOrANSI === "ansi" || "both");
	cardCreate(wanted_thing);
	if (wanted_thing.length === 0) {
		DOMSelector.cardHolder.innerHTML = `
    <p>nothing fits that womp womp</p>
    `
	};

});

DOMSelector.buttons.isoButton.addEventListener("click", function (event) {

	console.log("iso click");
	const wanted_thing = keycaps.filter((card) => card.isoOrANSI === "iso" || "both");
	cardCreate(wanted_thing);
	if (wanted_thing.length === 0) {
		DOMSelector.cardHolder.innerHTML = `
    <p>nothing fits that womp womp</p>
    `
	};

});

DOMSelector.buttons.oemButton.addEventListener("click", function (event) {

	console.log("oem click");
	const wanted_thing = keycaps.filter((card) => card.profile === oem);
	cardCreate(wanted_thing);
	if (wanted_thing.length === 0) {
		cardHolder.innerHTML = `
    <p>nothing fits that womp womp</p>
    `
	};

});

DOMSelector.buttons.defaultSortButton.addEventListener("click", function (event) {

	console.log("click")
	DOMSelector.cardHolder.innerHTML = "";
	cardCreate(keycaps);

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