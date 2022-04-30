
// storing the element references
const button = document.querySelector('button');
const details = document.querySelector('.details');
const result = document.querySelector('.result')
const image = document.querySelector('.image')
var price = 5; // base price for smoothee



button.addEventListener('click', function(){
    // storing the values entered from the form
    const fullName = document.querySelector('#fullname').value;
    const phoneNumber = document.querySelector('#phone').value;
    const pickupTime = document.querySelector('#time').value;
    const size = document.querySelector('#size').value;
    const liquid = document.querySelector('#liquid').value;
    const fruitsArray = document.querySelector('.fruit').querySelectorAll('input');
    const toppingsArray = document.querySelector('.toppings').querySelectorAll('input');
    var ice = document.querySelector('.ice').querySelectorAll('input');
    var sweetner = document.querySelector('.sweetener').querySelectorAll('input');
    const info = document.querySelector('.info');
    const h1 = document.querySelector('h1');
    var fruits = [];
    var toppings = [];
    const note = document.querySelector('#note').value;

    // Conditions to determine price of smoothie
    if(size === 'Medium'){
        price += 1.5;
    }
    else if(size === 'Large')
    {
        price += 2.5;
    }

    for(var i in fruitsArray){
        if(fruitsArray[i].checked){
            fruits.push(fruitsArray[i].name);
            price += 0.5; //increase price by 0.5 in every fruits
        }
        
    }

    for(var i in toppingsArray){
        if(toppingsArray[i].checked){
            toppings.push(toppingsArray[i].name);
            price += 0.5; //increase price by 0.5 in every toppings
        }
        
    }

    for(var i in ice){
        if(ice[i].checked){
            ice = ice[i].value;
            break;
        }
        
    }

    for(var i in sweetner){
        if(sweetner[i].checked){
            sweetner = sweetner[i].value;
            break;
        }
        
    }

    //checks if all details are provided or not. If provided creates the smoothie object and shows description page.
    if(fullName !== "" && phoneNumber !== "" && size !== '' && liquid !== '' && toppings !== '' && fruits!=='' && ice!==''){
        var smoothie = new SmoothieObject(fullName, phoneNumber, size, liquid, toppings, fruits, ice, sweetner, note);
        smoothie.description();
    }
    else{ //if not provides an appropriate message
        details.textContent = "Please provide the all details before confirmation.";
    }
    
    //Condtitons to show the input div and details div
    if (info.style.display === "none") {
        info.style.display = "block";
        location.reload();
        result.style.display = "none";
        h1.textContent = "Smothee Order Form";
        button.textContent = "Submit";  
      }
       else {
        info.style.display = "none";
        h1.textContent = "Order Details";
        button.textContent = "Back to Order Page";
      }
    

});

//constructor to create smoothie object
function SmoothieObject(customerName, phone, size, liquid, toppings, fruits, ice, sweetener, note ) {
    this.customerName = customerName;
    this.phone = phone;
    this.size = size;
    this.liquid = liquid;
    this.fruits = fruits;
    this.toppings = toppings;
    this.ice = ice;
    this.note = note;
    this.sweetener = sweetener;
    //this is a function to display the user entered details
    this.description = function(){
        const namePara = document.createElement('p');
        namePara.textContent = `Customer Name: ${this.customerName}`;
        details.appendChild(namePara);
        const phonePara = document.createElement('p');
        phonePara.textContent = `Cell Number: ${this.phone}`;
        details.appendChild(phonePara);
        const sizePara = document.createElement('p');
        sizePara.textContent = `Size: ${this.size}`;
        details.appendChild(sizePara);
        const liquidPara = document.createElement('p');
        liquidPara.textContent = `Liquid Used: ${this.liquid}`;
        details.appendChild(liquidPara);
        const fruitsPara = document.createElement('p');
        var fruit = `Fruits : `;
        for(var i in this.fruits){
            fruit += `${this.fruits[i]}, `;
        }
        fruit = fruit.slice(0, fruit.length - 2);
        fruitsPara.textContent = `${fruit}`;
        details.appendChild(fruitsPara);
        const toppingsPara = document.createElement('p');
        var topping = `Toppings : `;
        for(var i in this.toppings){
            topping += `${this.toppings[i]}, `;
        }
        topping = topping.slice(0, topping.length - 2);
        toppingsPara.textContent = `${topping}`;
        details.appendChild(toppingsPara);

        const icePara = document.createElement('p');
        icePara.textContent = `Added ice?: ${this.ice}`;
        details.appendChild(icePara);

        const sweetnersPara = document.createElement('p');
        sweetnersPara.textContent = `Any Sweetners: ${this.sweetener}`;
        details.appendChild(sweetnersPara);

        const notePara = document.createElement('p');
        notePara.textContent = `Customer Note: ${this.note}`;
        details.appendChild(notePara);

        const pricePara = document.createElement('p');
        pricePara.textContent = `Total price: $${price}`;
        details.appendChild(pricePara);

        const imgs = document.createElement('img');
        imgs.setAttribute('src','https://openclipart.org/image/400px/3542');
        image.appendChild(imgs);
        
        };
  }

