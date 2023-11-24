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
        initializedMobileButtonStatus();
        document.getElementById('mobile-basket').classList.add('d-none')
    }
}

function checkIfMobileOrNot() {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
        initializedMobileButtonStatus()
        document.getElementById('aside').classList.add('d-none');
        renderDishes()
    }
    else {
        renderDishes()
    }
}



function initializedMobileButtonStatus(){
    document.getElementById('shoppingBasket-mobileButton-div').classList.remove('d-none');
    document.getElementById('mobile-paybutton-div').classList.add('d-none')
}

function renderDishes() {
    loadBasketFromLS()
    hideSearchInput();
    renderTopics()
    hideClearedBasket();
    hideInformation()
    addMobilePaybuttonOnload()
}

function renderTopics() {
    renderLike();
    renderFavoriteDishes();
    renderSteakDishes();
    renderBurgerDishes();
    renderSchnitzelDishes();
    renderSaladDishes();
    renderDrinkDishes();
    renderBasket();
}

function hideInformation() {
    document.getElementById('information-popup').classList.add('d-none')
}

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
            searchedMenuContainer.innerHTML += filterDishesTemplate(searchedDish['dishName'], i, searchedDish['dishdescription'], searchedDish['price'])
        }
    }
}

function hideSearchInput() {
    document.getElementById('search-and-close').classList.add('d-none');
}

function hideXSearchInput() {
    document.getElementById('search-and-close').classList.add('d-none');
     location.reload();
}

function showInputSearch() {
    document.getElementById('search-and-close').classList.remove('d-none')
}

function renderFavoriteDishes() {
    let dishesContent = document.getElementById('favorites-div');
    dishesContent.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const dish = dishes[i]; 
        dishesContent.innerHTML += renderFavoriteDishesTemplate(dish['dishName'], i, dish['dishdescription'], dish['price']);
    }
}

function renderSteakDishes() {
    let dishesContent = document.getElementById('steak-div');
    dishesContent.innerHTML = '';
    for (let i = 3; i < 6; i++) {
        const dish = dishes[i];
        dishesContent.innerHTML += renderSteakDishesTemplate(dish['dishName'], i, dish['dishdescription'], dish['price']);
    }
}

function renderBurgerDishes() {
    let dishesContent = document.getElementById('burger-div');
    dishesContent.innerHTML = '';
    for (let i = 6; i < 9; i++) {
        const dish = dishes[i];
        dishesContent.innerHTML += renderBurgerDishesTemplate(dish['dishName'], i, dish['dishdescription'], dish['price']);
    }
}

function renderSchnitzelDishes() {
    let dishesContent = document.getElementById('schnitzel-div');
    dishesContent.innerHTML = '';
    for (let i = 9; i < 12; i++) {
        const dish = dishes[i];    
        dishesContent.innerHTML += renderSchnitzelDishesTemplate(dish['dishName'], i, dish['dishdescription'], dish['price'])
    }
}

function renderSaladDishes() {
    let dishesContent = document.getElementById('salad-div');
    dishesContent.innerHTML = '';
    for (let i = 12; i < 15; i++) {
        const dish = dishes[i];
        dishesContent.innerHTML += renderSaladDishesTemplate(dish['dishName'], i, dish['dishdescription'], dish['price'])
    }
}

function renderDrinkDishes() {
    let dishesContent = document.getElementById('drinks-div');
    dishesContent.innerHTML = '';
    for (let i = 15; i < 18; i++) {
        const dish = dishes[i];
        dishesContent.innerHTML += renderDrinkDishesTemplate(dish['dishName'], i, dish['dishdescription'], dish['price'])
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
    if (heartLiked == false) {
        likeButton.innerHTML = renderLikeWhiteTemplate();
    }
    else {
        likeButton.innerHTML = renderLikeBlackTemplate();
    }
}

function changeLikeColor() {
    if (heartLiked == false) {
        heartLiked = true;
    }
    else {
        heartLiked = false;
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
        basketContent.innerHTML += renderBasketTemplate(basketdish['amount'], basketdish['dishName'], basketdish['price'], i, basketdish['comment'] )
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
    inputContainer.innerHTML = openInputTemplate(i);
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
    changedAmounts()
}

function increaseAmount(i) {
    dishesBasket[i]['amount'] += 1;
    changedAmounts()
}

function changedAmounts(){
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
    let formSub = subtotal.toFixed(2).replace('.', ',')
    let formDC = DELIVERY_COSTS.toFixed(2).replace('.', ',')
    let formTotal = total.toFixed(2).replace('.', ',')
    billing.innerHTML = renderBillTemplate(formSub, formDC, formTotal) 
}

function renderMobilePaybutton() {
    let newMobilePaybtn = document.getElementById('mobile-paybutton-div');
    newMobilePaybtn.innerHTML = '';
    let { subtotal } = calculateBill();
    let total = subtotal + DELIVERY_COSTS;
    let totalForm = total.toFixed(2).replace('.', ',')
    newMobilePaybtn.innerHTML = renderMobilePaybuttonTemplate(totalForm);
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
function showMobileBasket() {
    changeMobilBasketStatus()
}

function renderMobileBasket() {
    let mobileBasketContent = document.getElementById('mobile-renderBasket');
    mobileBasketContent.innerHTML = '';
    for (let i = 0; i < dishesBasket.length; i++) {
        const mobileBasketDish = dishesBasket[i];
        mobileBasketContent.innerHTML += renderMobileBasketTemplate(mobileBasketDish['amount'], mobileBasketDish['dishName'],mobileBasketDish['price'], i, mobileBasketDish['comment']);   
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
    } else {
        renderMobileBill();
    }
}

function renderMobileBill() {
    let mobileBilling = document.getElementById('mobile-basket-html-endcaluculation');
    mobileBilling.innerHTML = '';
    let { subtotal } = calculateBill();
    let total = subtotal + DELIVERY_COSTS;
    let formSub = subtotal.toFixed(2).replace('.', ',')
    let formDC = DELIVERY_COSTS.toFixed(2).replace('.', ',')
    let formTotal = total.toFixed(2).replace('.', ',')
    mobileBilling.innerHTML = renderMobileBillTemplate(formSub, formDC, formTotal)   
}

function closeMobileBasket() {
    document.getElementById('mobile-basket').classList.add('d-none')
}

function closeMobileWithX() {
    changeMobilBasketStatus();
}

window.addEventListener('resize', function () {
    checkWindowWidth();
});

function checkWindowWidth() {
    if (window.innerWidth < MOBILE_BREAKPOINT && mobileBasketOpen == false) {
        checkOpenBasketFalse()
    } else if (window.innerWidth < MOBILE_BREAKPOINT && (mobileBasketOpen == true)) {
        checkOpenBasketTrue()
    }else {
        mobileBasketOpen = false;
        checkDesktopWidth()
    }
}

function checkOpenBasketFalse(){
    document.getElementById('aside').classList.add('d-none');
    document.getElementById('shoppingBasket-mobileButton-div').classList.remove('d-none');
    document.getElementById('mobile-paybutton-div').classList.add('d-none')
}

function checkOpenBasketTrue(){
    document.getElementById('shoppingBasket-mobileButton-div').classList.add('d-none')
    document.getElementById('mobile-paybutton-div').classList.remove('d-none')
}

function checkDesktopWidth(){
    document.getElementById('mobile-paybutton-div').classList.add('d-none')
    document.getElementById('aside').classList.remove('d-none')
    document.getElementById('mobile-basket').classList.add('d-none');
    document.getElementById('shoppingBasket-mobileButton-div').classList.add('d-none');
    renderBasket();
}

/* mobile issues
*/

function addMobilePaybuttonOnload() {

    document.getElementById('mobile-paybutton-div').classList.add('d-none')
}
