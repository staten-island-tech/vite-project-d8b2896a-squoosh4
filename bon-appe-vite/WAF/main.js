import './style.css'

cardObj = {

    name: keycap.name,
    price: keycap.price,
    onSale: keycap.onSale,
    profile: keycap.profile,
    inStock: keycap.inStock,

}

document.querySelector('#app').innerHTML = `
DOMSelector.gallery.insertAdjacentHTML(
  "beforeend",
  `
  `
  
);
`

keycaps.forEach((keycap) => DOMSelector.gallery.insertAdjacentHTML(
  "beforeend",
  `
  <div class="keycap-card">
    <p>"${keycap.name}"</p>
    <p>"${keycap.price}"</p>
    <p>"${keycap.onSale}"</p>
    <p>"${keycap.profile}"</p>
    <p>"${keycap.inStock}"</p>
  </div>
  `
));
