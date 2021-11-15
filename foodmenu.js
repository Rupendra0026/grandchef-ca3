

function createcard([img,product,category,brandname,rating,price,offer])
{
    const products=document.querySelector(".productholder")
        let newcard=`
    <div class="card">
            <img src="${img}" alt="${product}">
            <div class="cardtext">
                <p class="category">${category}</p>
                <h2 class="brandtext">${brandname}</h2>
                <h5>${rating}</h5>
                <p class="pricetag">Price:${price}</p>
                <p class="offertag">offer:${offer}</p>
            </div>
        </div>
    `;
   products.innerHTML +=newcard;
}
// started giving values to array by function

let item1=["vegfriedrice.jpg",
"food",
"vegitems",
"grandchef",
"⭐⭐⭐",
"400",
"50% off"];

createcard(item1);
createcard(item1);
createcard(item1);
createcard(item1);

function popuptoggle(){
    let a=document.querySelector(".popup");
    a.classList.toggle('active');
}

function valuebuilder([itemname,additional,total])
{
    const popup1=document.querySelector("#popup");
    let newval=`
    <div class="billing" id="change"></div>
            <h1>select the payment method</h1>
            <input type="radio" name="checkin" class="radioinput">debit card</input><br>
            <input type="radio" name="checkin" class="radioinput">credit card</input><br>
            <input type="radio" name="checkin"class="radioinput"> paytm</input><br>
            <input type="radio" name="checkin" class="radioinput">UIP</input><br>
            <input type="radio" name="checkin" class="radioinput">cash on delivery</input><br>
            <div class="bill" id="changebill">
                <h3>item details</h3>
                <ul>
                    <li><span>itemname</span>:${itemname}</li>
                    <li><span>additional charges</span>: rs${additional}/-</li>
                    <li><span>total cost</span>: ${total}/-</li>
                </ul>
                <div class="cnfrm">
                    <button class="done">confirm order</button>
                </div>
            </div>
        </div>
    
    `;
    popup1.innerHTML+=newval;
}

let value1=[
    "noodles",
    "15",
    "300"
];

valuebuilder(value1);




{/* <div class="card">
            <img src="vegbiriyani.jpg" alt="">
            <div class="cardtext">
                <p class="category">GC-Veg items</p>
                <h2 class="brandtext">Grand-Chef</h2>
                <h5>⭐⭐⭐⭐</h5>
                <p class="pricetag">Price:2000</p>
                <p class="offertag">offer:50%</p>
            </div>
        </div> */}