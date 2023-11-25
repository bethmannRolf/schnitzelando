function dishesTemplate(dishName, i, dishdescription, price) {
    let formattedPrice = price.toFixed(2).replace('.', ',');
    return ` 
    <div class="single-dish">
       <div class="single-dish-headline">
          <div class="single-dish-headline-firstpart">
              <h3 class="heading-dish">${dishName}</h3>
              <img src="./img/info.png" class="single-dish-info" id="addingDishes${i}">
          </div>
          <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})" >
       </div>
       <span class="dish-description">${dishdescription}</span>
       <span>${formattedPrice} €</span>
    </div>
    `
}

function renderLikeWhiteTemplate() {
    return `
<img id="like-img" src="./img/favorite.png" alt="Favoriten" onclick="changeLikeColor()">
`
}

function renderLikeBlackTemplate() {
    return `
<img id="like-img" src="./img/favorite_true.png" alt="Favoriten" onclick="changeLikeColor()">
`
}

function renderBasketTemplate(amount, dishName, price, i, comment) {
    let newSum = price * amount;
    let formattedNewSum = newSum.toFixed(2).replace('.', ',');
    return `
    <div class="singledish-container">
    <div class="firstline-dishbasket">
        <span class="amount-basket">${amount}</span>
        <span class="dishname-basket">${dishName}</span>
        <span class="sum-dishbasket">${formattedNewSum} €</span>
    </div>
    <div class="secondline-dishbasket">
        <span onclick="openInput(${i})" class="make-annotation">Anmerkung hinzufügen</span>
        <div class="change-amounts">
            <img class="basketDishRemove" onclick="reduceAmount(${i})" src="./img/remove.png" width="24px" height="24px">
            <span class="amount-basket">${amount}</span>
            <img class="basketDishAdd" onclick="increaseAmount(${i})" src="./img/add.png" width="24px" height="24px">
        </div>
    </div>
    <div id="input-container${i}">
    </div>
    <div id="saved-comment">${comment}>
    </div>
</div>
 `
}

function openInputTemplate(i) {
    return `
<div >
<input id="annotation-input${i}" type="text" placeholder="Anmerkung hinzufügen . . .">
<button onclick="saveInput(${i})">Speichern</button>
</div>
`
}

function renderBillTemplate(formSub, formDC, formTotal) {
    return `
<div id=""whole-bill> 
<div id="billing-description">
    <div id="subtotal">
        <span>Zwischensumme</span>
        <span>${formSub} €</span>
    </div>
    <div id="delivery-costs">
        <span>Lieferkosten</span>
        <span>${formDC} €</span>
    </div>
    <div id="total-sum">
         <span>Gesamt</span>
         <span>${formTotal} €</span>
    </div>
</div>
<button class="pay-class" id="paybutton" onclick="clearBasket()">
    <span  id="paybutton-span">Bezahlen (${formTotal} €)</span>
</button>
</div>
`
}

function renderMobilePaybuttonTemplate(totalForm) {
    return `
    <div><button class="pay-class" id="mobile-paybutton" onclick="clearMobileBasket()" >
 <span  id="mobile-paybutton-span">Bezahlen (${totalForm} €)</span>
 </button></div>
    `
}

function renderMobileBasketTemplate(amount, dishName, price, i, comment) {
    let newSum = price * amount;
    let formattedNewSum = newSum.toFixed(2).replace('.', ',');
    return `
<div class="wholeDish-mobileBasket" >
<div class="firstline-mobile-basket">
    <span class="amount-mobileBasket">${amount}
    </span>
    <span class=""dishname-mobileBasket">${dishName}
    </span>
    <span class="sum-dishmobileBasket">${formattedNewSum} €
    </span>
</div>
<div class="secondline-mobile-basket">
    <span onclick="openInput(${i})" class="make-annotation-mobile">Anmerkung hinzufügen
    </span>
    <div class="change-amounts-mobile">
        <img class="basketDishRemoveMobile" onclick="reduceAmount(${i})" src="./img/remove.png" width="24px" height="24px">
        <span class="amount-mobilebasket">${amount}
        </span>
        <img class="basketDishAddMobile" onclick="increaseAmount(${i})" src="./img/add.png" width="24px" height="24px" >
    </div>
</div>
<div id="input-container${i}">
</div>
<div id="saved-comment">${comment}
</div>
</div>
`
}

function renderMobileBillTemplate(formSub, formDC, formTotal) {
    return `
<div id="whole-mobileBill">
<div id="mobileBilling-description">
    <div id="mobil-subtotal">
        <span>Zwischensumme</span>
        <span>${formSub} €</span>
    </div>
    <div id="mobileDelivery-costs">
        <span>Lieferkosten</span>
        <span>${formDC} €</span>
    </div>
    <div id="total-mobileSum">
        <span>Gesamt</span>
        <span>${formTotal} €</span>
    </div>
</div>
</div>
`
}

function filterDishesTemplate(dishName, i, dishdescription, price) {
    return `
<div class="single-dish">
               <div class="single-dish-headline">
                  <div class="single-dish-headline-firstpart">
                      <h3 class="heading-dish">${dishName}</h3>
                      <img src="./img/info.png" class="single-dish-info" id="addingDishes${i}">
                  </div>
                  <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})" >
               </div>
               <span>${dishdescription}</span>
               <span>${price}€</span>
            </div>
`
}