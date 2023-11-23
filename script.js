function changeMobilBasketStatus() {
    mobileBasketOpen = !mobileBasketOpen;
    if (mobileBasketOpen == true) {
        renderMobileBasket();
        document.getElementById('shoppingBasket-mobileButton-div').classList.add('d-none')
        document.getElementById('mobile-paybutton-div').classList.remove('d-none')
        document.getElementById('mobile-basket').classList.remove('d-none')
        renderMobilePaybutton();
    } else {
        renderMobilePaybutton();
        document.getElementById('shoppingBasket-mobileButton-div').classList.remove('d-none')
        document.getElementById('mobile-paybutton-div').classList.add('d-none')
        document.getElementById('mobile-basket').classList.add('d-none')
    }
}

function renderDishes() {
    hideSearchInput();
    renderLike();
    renderFavoriteDishes();
    renderSteakDishes();
    renderBurgerDishes();
    renderSchnitzelDishes();
    renderSaladDishes();
    renderDrinkDishes();
    loadBasketFromLS();
    renderBasket();
    hideClearedBasket();
    hideInformation()
    document.getElementById('mobile-paybutton-div').classList.add('d-none')
}

function hideInformation() {
    document.getElementById('information-popup').classList.add('d-none')
}

// Gerichte rendern

function openPopup() {
    document.getElementById('information-popup').classList.toggle('d-none')
}

function filterDishes() {
    let search = document.getElementById('search-input').value
    search = search.toLowerCase();
    let searchedMenuContainer = document.getElementById('menu-card');
    searchedMenuContainer.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
        let searchedDish = dishes[i];
        if (searchedDish['dishName'].toLowerCase().includes(search)) {
            searchedMenuContainer.innerHTML += `
            <div class="single-dish">
               <div class="single-dish-headline">
                  <div class="single-dish-headline-firstpart">
                      <h3 class="heading-dish">${searchedDish['dishName']}</h3>
                      <img src="./img/info.png" class="single-dish-info" id="addingDishes${i}">
                  </div>
                  <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})" >
               </div>
               <span>${searchedDish['dishdescription']}</span>
               <span>${searchedDish['price']}€</span>
            </div>`
        }
    }
}

function hideSearchInput() {
    document.getElementById('search-and-close').classList.add('d-none');
}

function hideXSearchInput() {
    document.getElementById('search-and-close').classList.add('d-none');
}


function showInputSearch() {
    document.getElementById('search-and-close').classList.remove('d-none')
}

function renderFavoriteDishes() {
    let dishesContent = document.getElementById('favorites-div');
    dishesContent.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const dish = dishes[i];
        const formattedPrice = dish['price'].toFixed(2).replace('.', ',');
        dishesContent.innerHTML += ` 
    <div class="single-dish">
       <div class="single-dish-headline">
          <div class="single-dish-headline-firstpart">
              <h3 class="heading-dish">${dish['dishName']}</h3>
              <img src="./img/info.png" class="single-dish-info" id="addingDishes${i}">
          </div>
          <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})" >
       </div>
       <span class="dish-description">${dish['dishdescription']}</span>
       <span>${formattedPrice} €</span>
    </div>`
    }
}

function renderSteakDishes() {
    let dishesContent = document.getElementById('steak-div');
    dishesContent.innerHTML = '';
    for (let i = 3; i < 6; i++) {
        const dish = dishes[i];
        const formattedPrice = dish['price'].toFixed(2).replace('.', ',');
        dishesContent.innerHTML += ` 
    <div class="single-dish">
       <div class="single-dish-headline">
          <div class="single-dish-headline-firstpart">
              <h3 class="heading-dish">${dish['dishName']}</h3>
              <img src="./img/info.png" class="single-dish-info">
          </div>
          <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})" >
       </div>
       <span class="dish-description" >${dish['dishdescription']}</span>
       <span>${formattedPrice} €</span>
    </div>`
    }
}

function renderBurgerDishes() {
    let dishesContent = document.getElementById('burger-div');
    dishesContent.innerHTML = '';
    for (let i = 6; i < 9; i++) {
        const dish = dishes[i];
        const formattedPrice = dish['price'].toFixed(2).replace('.', ',');
        dishesContent.innerHTML += ` 
        <div class="single-dish">
           <div class="single-dish-headline">
              <div class="single-dish-headline-firstpart">
                  <h3 class="heading-dish">${dish['dishName']}</h3>
                  <img src="./img/info.png" class="single-dish-info">
              </div>
              <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})">
           </div>
           <span class="dish-description">${dish['dishdescription']}</span>
           <span>${formattedPrice} €</span>
        </div>`
    }
}

function renderSchnitzelDishes() {
    let dishesContent = document.getElementById('schnitzel-div');
    dishesContent.innerHTML = '';
    for (let i = 9; i < 12; i++) {
        const dish = dishes[i];
        const formattedPrice = dish['price'].toFixed(2).replace('.', ',');
        dishesContent.innerHTML += ` 
        <div class="single-dish">
           <div class="single-dish-headline">
              <div class="single-dish-headline-firstpart">
                  <h3 class="heading-dish">${dish['dishName']}</h3>
                  <img src="./img/info.png" class="single-dish-info">
              </div>
              <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})" >
           </div>
           <span class="dish-description">${dish['dishdescription']}</span>
           <span>${formattedPrice} €</span>
        </div>`
    }
}

// dish['price']
function renderSaladDishes() {
    let dishesContent = document.getElementById('salad-div');
    dishesContent.innerHTML = '';
    for (let i = 12; i < 15; i++) {
        const dish = dishes[i];
        const formattedPrice = dish['price'].toFixed(2).replace('.', ',');
        dishesContent.innerHTML += ` 
        <div class="single-dish">
           <div class="single-dish-headline">
              <div class="single-dish-headline-firstpart">
                  <h3 class="heading-dish">${dish['dishName']}</h3>
                  <img src="./img/info.png" class="single-dish-info">
              </div>
              <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})">
           </div>
           <span class="dish-description">${dish['dishdescription']}</span>
           <span>${formattedPrice} €</span>
        </div>`
    }
}

function renderDrinkDishes() {
    let dishesContent = document.getElementById('drinks-div');
    dishesContent.innerHTML = '';
    for (let i = 15; i < 18; i++) {
        const dish = dishes[i];
        const formattedPrice = dish['price'].toFixed(2).replace('.', ',');
        dishesContent.innerHTML += ` 
        <div class="single-dish">
           <div class="single-dish-headline">
              <div class="single-dish-headline-firstpart">
                  <h3 class="heading-dish">${dish['dishName']}</h3>
                  <img src="./img/info.png" class="single-dish-info">
              </div>
              <img src="./img/add.png" class="add-button" onclick="addToBasket(${i})">
           </div>
           <span class="dish-description">${dish['dishdescription']}</span>
           <span>${formattedPrice} €</span>
        </div>`
    }
}

function hideClearedBasket() {
    document.getElementById('checkbox').classList.add('d-none');
}

function clearBasket() {
    let clearedContentBasket = document.getElementById('content-basket');
    clearedContentBasket.innerHTML = '';
    let clearedBasketEndcalculations = document.getElementById('basket-endcalculations')
    clearedBasketEndcalculations.innerHTML = '';
    document.getElementById('checkbox').classList.remove('d-none');
}

function renderLike() {
    let likeButton = document.getElementById('like-section');
    likeButton.innerHTML = '';
    if (HEART_LIKED == false) {
        likeButton.innerHTML = `
        <img id="like-img" src="./img/favorite.png" alt="Favoriten" onclick="changeLikeColor()">
         `
    }
    else {
        likeButton.innerHTML = `
        <img id="like-img" src="./img/favorite_true.png" alt="Favoriten" onclick="changeLikeColor()">
        `
    }
}

function changeLikeColor() {
    if (HEART_LIKED == false) {
        HEART_LIKED = true;
    }
    else {
        HEART_LIKED = false;
    }
    renderLike();
}

function addToBasket(index) {
    if (!Array.isArray(dishesBasket)) {
        dishesBasket = [];
    }
    const existingIndex = dishesBasket.findIndex(item => item.dishnumber === dishes[index].dishnumber);
    if (existingIndex !== -1) {
        dishesBasket[existingIndex].amount += 1;
    } else {
        const selectedDish = { ...dishes[index], amount: 1 };
        dishesBasket.push(selectedDish);
    }
    renderBasket();
    renderMobilePaybutton();
    saveBasketToLS();
}

function renderBasket() {
    document.getElementById('emty-basket').classList.add('d-none');
    let basketContent = document.getElementById('content-basket');
    basketContent.innerHTML = '';
    for (let i = 0; i < dishesBasket.length; i++) {
        const basketdish = dishesBasket[i];
        let newSum = basketdish['price'] * basketdish['amount'];
        const formattedNewSum = newSum.toFixed(2).replace('.', ',');
        basketContent.innerHTML += `
<div class="singledish-container">
    <div class="firstline-dishbasket">
        <span class="amount-basket">${basketdish['amount']}</span>
        <span class="dishname-basket">${basketdish['dishName']}</span>
        <span class="sum-dishbasket">${formattedNewSum} €</span>
    </div>
    <div class="secondline-dishbasket">
        <span onclick="openInput(${i})" class="make-annotation">Anmerkung hinzufügen</span>
        <div class="change-amounts">
            <img class="basketDishRemove" onclick="reduceAmount(${i})" src="./img/remove.png" width="24px" height="24px">
            <span class="amount-basket">${basketdish['amount']}</span>
            <img class="basketDishAdd" onclick="increaseAmount(${i})" src="./img/add.png" width="24px" height="24px">
        </div>
    </div>
    <div id="input-container${i}">
    </div>
    <div id="saved-comment">${basketdish['comment']}>
    </div>
</div>
`
    }
    checkIfBill()
}

function checkIfBill() {
    let endCalc = document.getElementById('basket-endcalculations');
    if (dishesBasket == '') {
        endCalc.innerHTML = '';
    } else {
        renderBill();
    }
}

function openInput(i) {
    let inputContainer = document.getElementById(`input-container${i}`);
    inputContainer.innerHTML = '';
    inputContainer.innerHTML = `
        <div >
            <input id="annotation-input${i}" type="text" placeholder="Anmerkung hinzufügen . . .">
            <button onclick="saveInput(${i})">Speichern</button>
        </div>
    `;
}

function saveInput(i) {
    let annotationInput = document.getElementById(`annotation-input${i}`);
    let annotation = annotationInput.value;
    dishesBasket[i]['comment'] = annotation;
    renderBasket();
    saveBasketToLS();
}

function reduceAmount(i) {
    if (dishesBasket[i]['amount'] > 1) {
        dishesBasket[i]['amount'] -= 1;
    } else {
        dishesBasket.splice(i, 1);
    }
    renderMobilePaybutton();
    renderBasket();
    renderMobileBasket();
    saveBasketToLS();
}

function increaseAmount(i) {
    dishesBasket[i]['amount'] += 1;
    renderMobilePaybutton();
    renderBasket();
    renderMobileBasket();
    saveBasketToLS();
}

function calculateBill() {
    let subtotal = 0;
    for (let i = 0; i < dishesBasket.length; i++) {
        const basketdish = dishesBasket[i];
        subtotal += basketdish['price'] * basketdish['amount'];
    }
    return {
        subtotal
    }
}

function renderBill() {
    let billing = document.getElementById('basket-endcalculations');
    billing.innerHTML = '';
    let { subtotal } = calculateBill();
    let total = subtotal + DELIVERY_COSTS;
    billing.innerHTML = `
    <div id=""whole-bill> 
        <div id="billing-description">
            <div id="subtotal">
                <span>Zwischensumme</span>
                <span>${subtotal.toFixed(2).replace('.', ',')} €</span>
            </div>
            <div id="delivery-costs">
                <span>Lieferkosten</span>
                <span>${DELIVERY_COSTS.toFixed(2).replace('.', ',')} €</span>
            </div>
            <div id="total-sum">
                 <span>Gesamt</span>
                 <span>${total.toFixed(2).replace('.', ',')} €</span>
            </div>
        </div>
        <button class="pay-class" id="paybutton" onclick="clearBasket()">
            <span  id="paybutton-span">Bezahlen (${total.toFixed(2).replace('.', ',')} €)</span>
        </button>
    </div>
    `
}

function renderMobilePaybutton() {
    let newMobilePaybtn = document.getElementById('mobile-paybutton-div');
    newMobilePaybtn.innerHTML = '';
    let { subtotal } = calculateBill();
    let total = subtotal + DELIVERY_COSTS;
    console.log('Subtotal:', subtotal);
    console.log('Total:', total);
    newMobilePaybtn.innerHTML = `<div><button class="pay-class" id="mobile-paybutton" onclick="clearMobileBasket()" >
 <span  id="mobile-paybutton-span">Bezahlen (${total.toFixed(2).replace('.', ',')} €)</span>
 </button></div>`;
}

function additionalOrder() {
    dishesBasket = [];
    saveBasketToLS();
    hideClearedBasket()
    renderBasket()
}

function additionalMobilOrder() {
    document.getElementById('mobile-basket').classList.add('d-none');
    document.getElementById('shoppingBasket-mobileButton-div').classList.remove('d-none')
    document.getElementById('mobileBasket-checkdiv').classList.add('d-none');
    changeMobilBasketStatus();
}

function saveBasketToLS() {
    let dishesBasketAsText = JSON.stringify(dishesBasket);
    localStorage.setItem('dishesBasket', dishesBasketAsText);
}

function loadBasketFromLS() {
    let dishesBasketAsText = localStorage.getItem('dishesBasket');
    if (dishesBasketAsText) {
        dishesBasket = JSON.parse(dishesBasketAsText);
    }
}
//Neue Funktionen für mobile
function showMobileBasket() {
    changeMobilBasketStatus()
    // document.getElementById('mobile-paybutton-div').classList.remove('d-none')
    // document.getElementById('shoppingBasket-mobileButton-div').classList.add('d-none')
    // document.getElementById('mobile-basket').classList.toggle('d-none');
    // renderMobileBasket();
    // mobileBasketopen = true;
}

function renderMobileBasket() {
    let mobileBasketContent = document.getElementById('mobile-renderBasket');
    mobileBasketContent.innerHTML = '';
    for (let i = 0; i < dishesBasket.length; i++) {
        const mobileBasketDish = dishesBasket[i];
        let newSum = mobileBasketDish['price'] * mobileBasketDish['amount'];
        const formattedNewSum = newSum.toFixed(2).replace('.', ',');
        mobileBasketContent.innerHTML += `
    <div class="wholeDish-mobileBasket" >
        <div class="firstline-mobile-basket">
            <span class="amount-mobileBasket">${mobileBasketDish['amount']}
            </span>
            <span class=""dishname-mobileBasket">${mobileBasketDish['dishName']}
            </span>
            <span class="sum-dishmobileBasket">${formattedNewSum} €
            </span>
        </div>
        <div class="secondline-mobile-basket">
            <span onclick="openInput(${i})" class="make-annotation-mobile">Anmerkung hinzufügen
            </span>
            <div class="change-amounts-mobile">
                <img class="basketDishRemoveMobile" onclick="reduceAmount(${i})" src="./img/remove.png" width="24px" height="24px">
                <span class="amount-mobilebasket">${mobileBasketDish['amount']}
                </span>
                <img class="basketDishAddMobile" onclick="increaseAmount(${i})" src="./img/add.png" width="24px" height="24px" >
            </div>
        </div>
        <div id="input-container${i}">
        </div>
        <div id="saved-comment">${mobileBasketDish['comment']}
        </div>
    </div>
        `
    }
    checkIfMobileBill();
}

function clearMobileBasket() {
    let clearedMobilBasketEndcalculations = document.getElementById('mobile-basket-html-endcaluculation');
    clearedMobilBasketEndcalculations.innerHTML = '';
    dishesBasket = [];
    document.getElementById('mobile-paybutton-div').classList.add('d-none')
    document.getElementById('mobileBasket-checkdiv').classList.remove('d-none')
    saveBasketToLS();
    renderMobileBasket();
}

function fromMBtoDishes() {
    document.getElementById('mobile-paybutton-div').classList.add('d-none')
    document.getElementById('shoppingBasket-mobileButton-div').classList.remove('d-none')
    document.getElementById('mobile-basket').classList.add('d-none')
}

function checkIfMobileBill() {
    let mobileEndCalc = document.getElementById('mobile-basket-html-endcaluculation');
    if (dishesBasket == '') {
        mobileEndCalc.innerHTML = '';
        // und Bezahlen button nicht funktional
    } else {
        renderMobileBill();
    }
}

function renderMobileBill() {
    let mobileBilling = document.getElementById('mobile-basket-html-endcaluculation');
    mobileBilling.innerHTML = '';
    let { subtotal } = calculateBill();
    let total = subtotal + DELIVERY_COSTS;
    mobileBilling.innerHTML = `
    <div id="whole-mobileBill">
        <div id="mobileBilling-description">
            <div id="mobil-subtotal">
                <span>Zwischensumme</span>
                <span>${subtotal.toFixed(2).replace('.', ',')} €</span>
            </div>
            <div id="mobileDelivery-costs">
                <span>Lieferkosten</span>
                <span>${DELIVERY_COSTS.toFixed(2).replace('.', ',')} €</span>
            </div>
            <div id="total-mobileSum">
                <span>Gesamt</span>
                <span>${total.toFixed(2).replace('.', ',')} €</span>
            </div>
        </div>
    </div>
    `
}

function closeMobileBasket() {
    document.getElementById('mobile-basket').classList.add('d-none')
}

function closeMobileWithX() {
    changeMobilBasketStatus();
    // document.getElementById('shoppingBasket-mobileButton-div').classList.toggle('d-none')
    // document.getElementById('mobile-paybutton-div').classList.toggle('d-none')
    // document.getElementById('mobile-basket').classList.add('d-none')
}

window.addEventListener('resize', function () {
    checkWindowWidth();
});

function checkWindowWidth() {
    // Prüfe die innere Breite des Fensters
    if (window.innerWidth < 770 && mobileBasketOpen == false) {
        // Der Code, der bei einer Breite unter 770px ausgeführt werden soll
        // renderMobilePaybutton();
        // document.getElementById('mobile-paybutton-div').classList.remove('d-none');
        document.getElementById('aside').classList.add('d-none');
        document.getElementById('shoppingBasket-mobileButton-div').classList.remove('d-none');
        document.getElementById('mobile-paybutton-div').classList.add('d-none')
        console.log('Nicht im MWK');
    } else if (window.innerWidth < 770 && (mobileBasketOpen == true)) {
        document.getElementById('shoppingBasket-mobileButton-div').classList.add('d-none')
        document.getElementById('mobile-paybutton-div').classList.remove('d-none')
        console.log('Im MWK');
    }
    else {
        // Der Code, der bei einer Breite von 770px oder mehr ausgeführt werden soll
        mobileBasketOpen = false;
        document.getElementById('mobile-paybutton-div').classList.add('d-none')
        document.getElementById('aside').classList.remove('d-none')
        document.getElementById('mobile-basket').classList.add('d-none');
        document.getElementById('shoppingBasket-mobileButton-div').classList.add('d-none');
        renderBasket();
        console.log('Nicht Mobil');
    }
}
// // Event Listener, der alle 10 Millisekunden die Funktion aufruft
// setInterval(checkWindowWidth, 100000);