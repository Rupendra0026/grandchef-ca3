function popuptoggle(){
    let a=document.querySelector(".popup");
    a.classList.toggle('active');
}
function oderplaced()
{
    alert("oder has been placed successfully")
}
function createcard([img,drinkname,drinkprice,fun])
{
    const products=document.querySelector(".productholder")
        let newcard=`
        <div class="card">
            <img src="${img}" alt="">
            <div class="cardtext">
                <h2 class="drinkname">${drinkname}</h2>
                <h4 class="drinkprice">price:${drinkprice}</h4>
            </div>
            <button onclick="popuptoggle();${fun}">Order<i class="fas fa-baby-carriage"
                        id="carry"></i></button>
        </div>
    `;
   products.innerHTML +=newcard;
}
// started giving values to array by function for creating cards

let item1=["./images/orangejuice.jpg",
"orange juice",
"120",
"changeval(bill1);"
];
let item2=["./images/lemonsoda.jpg","lemon soda","80","changeval(bill2);"];
let item3=["./images/granatejuice.jpg","pomegranate juice","180","changeval(bill3);"];
let item4=["./images/blueberry.jpg","blue berry","130","changeval(bill4);"];
let item5=["./images/strawberryjuice.jpg","strawberry juice","200","changeval(bill5);"];
let item6=["./images/mangojuice.jpg","mango juice","160","changeval(bill6);"];
let item7=["./images/beetrootjuice.jpg","beetroot juice","230","changeval(bill7);"];
let item8=["./images/watermelonjuice.jpg","watermelon juice","150","changeval(bill8);"];
let item9=["./images/strawberryshake.jpg","strawberry shake","350","changeval(bill9);"];
let item10=["./images/choclateshake.jpg","chocolate shake","280","changeval(bill10);"];
let item11=["./images/oreoshake.jpg","oreo shake","200","changeval(bill11);"];
let item12=["./images/doublechoco.jpg","doublechoco","380" ,"changeval(bill12);"];
let item13=["./images/multifruitshake.jpg","multifruit","360" ,"changeval(bill13);"];
let item14=["./images/redberryshake.jpg","redberry shake","180" ,"changeval(bill14);"];
let item15=["./images/kiwishake.jpg","kiwi shake","240" ,"changeval(bill15);"];
let item16=["./images/bananashake.jpg","banana shake","150" ,"changeval(bill16);"];
let item17=["./images/fruitbeer.jpg","Fruit beer","350" ,"changeval(bill17);"];
let item18=["./images/chilledbeer.jpg","chilled beer","250", ,"changeval(bill18);"];
let item19=["./images/frenchbeer.jpg","French beer","310" ,"changeval(bill19);"];
let item20=["./images/ijwit.jpg","IJWIT","450" ,"changeval(bill20);"];
let item21=["./images/redwine.jpg","red wine","600" ,"changeval(bill21);"];
let item22=["./images/yeringstation.jpg","Yering Station","780" ,"changeval(bill22);"];
let item23=["./images/pinot.jpg","pinot grigio","500" ,"changeval(bill23);"]
let item24=["./images/jamshed.jpg","jamshed","850" ,"changeval(bill24);"];
createcard(item1);
createcard(item2);
createcard(item3);
createcard(item4);
createcard(item5);
createcard(item6);
createcard(item7);
createcard(item8);
createcard(item9);
createcard(item10);
createcard(item11);
createcard(item12);
createcard(item13);
createcard(item14);
createcard(item15);
createcard(item16);
createcard(item17);
createcard(item18);
createcard(item19);
createcard(item20);
createcard(item21);
createcard(item22);
createcard(item23);
createcard(item24);
// popup values
function changeval([item,totalprice]) {
    let b = document.querySelector(".popup");
    let time=new Date();
    let newval = `
<div class="trail"> 
<div class="close" onclick="popuptoggle()"><i class="far fa-times-circle"></i></div>         
  <h1>select the payment method</h1>
    <input type="radio" name="checkin" class="radioinput">debit card</input><br>
    <input type="radio" name="checkin" class="radioinput">credit card</input><br>
    <input type="radio" name="checkin"class="radioinput"> paytm</input><br>
    <input type="radio" name="checkin" class="radioinput">UIP</input><br>
    <input type="radio" name="checkin" class="radioinput">cash on delivery</input><br>
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
let bill1=["orange juice","120"];
let bill2=["lemon soda","80"];
let bill3=["pomegrsnste juice","180"];
let bill4=["blue berry","130"];
let bill5=["strawberry juice","200"];
let bill6=["mango juice","160"];
let bill7=["beetroot juice","230"];
let bill8=["watermelon juice","150"];
let bill9=["strawberry shake","350"];
let bill10=["chocolate shake","280"];
let bill11=["oreo shake","200"];
let bill12=["double choco","380"];
let bill13=["multifruit shake","360"];
let bill14=["redberry shake","180"];
let bill15=["kiwi shake","240"];
let bill16=["banana shake","150"];
let bill17=["fruit beer","350"];
let bill18=["chilled beer","250"];
let bill19=["french beer"];
let bill20=["ijwit","450"];
let bill21=["red wine","600"];
let bill22=["yering station","780"];
let bill23=["pinot grigio","500"];
let bill24=["jamshed","850"];


changeval(bill1);
changeval(bill2);
changeval(bill3);
changeval(bill4);
changeval(bill5);
changeval(bill6);
changeval(bill7);
changeval(bill8);
changeval(bill9);
changeval(bill10);
changeval(bill11);
changeval(bill12);
changeval(bill13);
changeval(bill14);
changeval(bill15);
changeval(bill16);
changeval(bill17);
changeval(bill18);
changeval(bill19);
changeval(bill20);
changeval(bill21);
changeval(bill22);
changeval(bill23);
changeval(bill24);