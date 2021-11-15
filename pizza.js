// creating a new cards
function createcard([img,idname,pizzaname,pizzaprice,fun])
{
    const products=document.querySelector(".productholder")
        let newcard=`
        <div class="card">
            <img src="${img}" alt="" id="${idname}">
            <div class="cardtext">
                <h2 class="pizzaname">${pizzaname}</h2>
                <h4 class="pizzaprice">price:${pizzaprice}</h4>
            </div>
            <button onclick="popuptoggle();${fun}">Order<i class="fas fa-baby-carriage"
                        id="carry"></i></button>
        </div>
    `;
   products.innerHTML +=newcard;
}

let pizza1=["./images/italianpizza.jpeg","pizza1","italian pizza","200","changeval(a1);"];
let pizza2=["./images/Margherita.jpg","pizza2","Margherita","290","changeval(a2);"];
let pizza3=["./images/Cheese Margherita.jpg","pizza3","Cheese Margherita","320","changeval(a3);"];
let pizza4=["./images/Farm House.jpg","pizza4","Farm House","270","changeval(a4);"];
let pizza5=["./images/Peppy Paneer.jpg","pizza5","Peppy Paneer","330","changeval(a5);"];
let pizza6=["./images/Deluxe Veggie.jpg","pizza6","Deluxe Veggie","300","changeval(a6);"];
let pizza7=["./images/Veg Extravaganza.jpg","pizza7","Veg Extravaganza","340","changeval(a7);"];
let pizza8=["./images/Tandoori Paneer.jpg","pizza8","Tandoori Paneer","290","changeval(a8);"];
let pizza9=["./images/BARBECUE CHICKEN.jpg","pizza9","BARBECUE CHICKEN","410","changeval(a9);"];
let pizza10=["./images/CHICKEN SAUSAGE.jpg","pizza10","CHICKEN SAUSAGE","380","changeval(a10);"];
let pizza11=["./images/Golden Delight.jpg","pizza11","Golden Delight","320","changeval(a11);"];
let pizza12=["./images/Non Veg Supreme.jpg","pizza12","Non Veg Supreme","370","changeval(a12);"];
let pizza13=["./images/Chicken Dominator.jpg","pizza13","Chicken Dominator","400","changeval(a13);"];
let pizza14=["./images/CHICKEN FIESTA.jpg","pizza14","CHICKEN FIESTA","430","changeval(a14);"];
let pizza15=["./images/Chicken Tikka.jpg","pizza15","Chicken Tikka","340","changeval(a15);"];
let pizza16=["./images/chilli chicken.jpg","pizza16","chilli chicken","260","changeval(a16);"];
let burger1=["./images/Cheeseburger.jpg","burger1","Cheeseburger","150","changeval(a17);"];
let burger2=["./images/Loaded Burger.jpg","burger2","Loaded Burger","200","changeval(a18);"];
let burger3=["./images/Bean Burger.jpg","burger3","Bean Burger","190","changeval(a19);"];
let burger4=["./images/Veggie Burger.jpg","burger4","Veggie Burger","210","changeval(a20);"];
let burger5=[" ./images/Chicken Burger.jpg","burger5"," Chicken Burger","280","changeval(a21);"];
let burger6=["./images/Frites Burger.jpg","burger6","Frites Burger","200","changeval(a22);"];
let burger7=["./images/Guacamole Burger.jpg","burger7","Guacamole Burger","270","changeval(a23);"];
let burger8=["./images/Double Burger.jpeg","burger8","Double Burger","340","changeval(a24);"];
let spl1=["./images/paneertikha.jpg","spl1","paneer tikha","190","changeval(a25);"];
let spl2=["./images/Chicken Nuggets.jpg","spl2","Chicken Nuggets","220","changeval(a26);"];
let spl3=["./images/Choco Lava Cake.jpg","spl3","ChocoLava Cake","260","changeval(a27);"];
let spl4=["./images/Cheese Shots.jpg","spl4","Cheese Shots","180","changeval(a28);"];
let spl5=["./images/Crunchy Strips.jpg","spl5","Crunchy Strips","80","changeval(a29);"];
let spl6=["./images/Tomato Pasta.jpg","spl6","Tomato Pasta","160","changeval(a30);"];
let spl7=["./images/Brownie Fantasy.jpg","spl7","Brownie Fantasy","230","changeval(a31);"];
let spl8=["./images/cupcakes.jpg","spl8","cup cakes","100","changeval(a32);"];
createcard(pizza1);
createcard(pizza2);
createcard(pizza3);
createcard(pizza4);
createcard(pizza5);
createcard(pizza6);
createcard(pizza7);
createcard(pizza8);
createcard(pizza9);
createcard(pizza10);
createcard(pizza11);
createcard(pizza12);
createcard(pizza13);
createcard(pizza14);
createcard(pizza15);
createcard(pizza16);
createcard(burger1);
createcard(burger2);
createcard(burger3);
createcard(burger4);
createcard(burger5);
createcard(burger6);
createcard(burger7);
createcard(burger8);
createcard(spl1);
createcard(spl2);
createcard(spl3);
createcard(spl4);
createcard(spl5);
createcard(spl6);
createcard(spl7);
createcard(spl8);

//  main popup function
function popuptoggle(){
    let a=document.querySelector(".popup");
    a.classList.toggle('active');
}
function oderplaced()
{
    alert("oder has been placed successfully")
}
// creating details for popupcard
let a= new Date();
function changeval([item,totalprice]) {
//     let time=document.querySelector("#date");
let time=new Date();
    let b = document.querySelector(".popup");
    let newval = `
<div class="trail"> 
<div class="close" onclick="popuptoggle()"><i class="far fa-times-circle"></i></div>         
  <h1>select the payment method</h1>
    <input type="radio" name="checkin" class="radioinput">debit card</input><br>
    <input type="radio" name="checkin" class="radioinput">credit card</input><br>
    <input type="radio" name="checkin"class="radioinput"> paytm</input><br>
    <input type="radio" name="checkin" class="radioinput">UIP</input><br>
    <input type="radio" name="checkin" class="radioinput">cash on delivery</input>
    <br>
    <div class="bill">
        <h3>item details</h3>
        <div class="totallist">
        <ul>
        <li>itemname:${item}</li>
        <li>total cost: ${totalprice}/-</li>
        </ul>
        <h4>odered time: ${time};</h4>
        </div>
        <div class="cnfrm">
            <button  onclick="popuptoggle();oderplaced()"class="done">confirm order</button>
        </div>
    </div>
</div>

`;
    b.innerHTML = newval;
    
}
let a1=["italain pizza",
"200"
];
let a2=["Margherita","290"];
let a3=["cheese margherita",320];
let a4=["Farm home","270"];
let a5=["peppy paneer","330"];
let a6=["deluxe veggie","300"];
let a7=["veg extravaganza","340"];
let a8=["tandoori paneer","290"];
let a9=["Barbecue chicken","410"];
let a10=["chicken sausage","380"];
let a11=["golden delight","320"];
let a12=["non veg supreme","370"];
let a13=["chicken dominator","400"];
let a14=["chicken fiesta","430"];
let a15=["chicken tikka","340"];
let a16=["chilli chicken","260"];
let a17=["cheese burger","150"];
let a18=["full loaded burger","200"];
let a19=["bean burger","190"];
let a20=["veggie burger","210"];
let a21=["chicken burger","280"];
let a22=["frites burger","200"];
let a23=["guacamole burger","270"];
let a24=["double burger","340"];
let a25=["paneer tikha","190"];
let a26=["chicken nuggets","220"];
let a27=["chocolava cake","260"];
let a28=["cheese shots","180"];
let a29=["crunchy strips","80"];
let a30=["tomato pasta","160"];
let a31=["brownie fantasy","230"];
let a32=["cup cakes","100"];
changeval(a1);
changeval(a2);
changeval(a3);
changeval(a4);
changeval(a5);
changeval(a6);
changeval(a7);
changeval(a8);
changeval(a9);
changeval(a10);
changeval(a11);
changeval(a12);
changeval(a13);
changeval(a14);
changeval(a15);
changeval(a16);
changeval(a17);
changeval(a18);
changeval(a19);
changeval(a20);
changeval(a21);
changeval(a22);
changeval(a23);
changeval(a24);
changeval(a25);
changeval(a26);
changeval(a27);
changeval(a28);
changeval(a29);
changeval(a30);
changeval(a31);
changeval(a32);
