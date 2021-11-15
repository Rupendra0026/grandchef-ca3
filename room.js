// cardss
function popuptoggle(){
    let a=document.querySelector(".popup");
    a.classList.toggle('active');
}
function oderplaced()
{
    alert("oder has been placed successfully")
}
function createcard([img,mainid,roomtype,roomprice,id,bill,fun])
{
    const products=document.querySelector(".productholder")
        let newcard=`
        <div class="card">
            <img src="${img}" alt="" id=${mainid}>
            <div class="cardtext">
                <h2 class="roomtype">${roomtype}</h2>
                <h4 class="roomprice">price:${roomprice}</h4>
                required days:
                <select name="" id="${id}">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
          </select>
          
            </div>
            <button onclick="popuptoggle();${bill};">book<i class="fas fa-person-booth" id="room"></i></button>
        </div>
    `;
   products.innerHTML +=newcard;
   
}
let room1=["room1.jpeg","m1","single bedroom NON-AC","1200","id1","bill()"];
let room2=["room2.jpeg","m2","single bedroom NON-AC","1500","id2","bill2()"];
let room3=["room3.jpeg","m3","single bedroom NON-AC","1000","id3","bill3()"];
let room4=["room4.jpeg","m4","single bedroom NON-AC","1800","id4","bill4()"];
let room5=["room5.jpeg","m5","single bedroom NON-AC","1200","id5","bill5()"];
let room6=["room6.jpeg","m6","single bedroom NON-AC","1500","id6","bill6()"];
let room7=["room7.jpeg","m7","single bedroom NON-AC","1900","id7","bill7()"];
let room8=["room8.jpg","m8","single bedroom NON-AC","1600","id8","bill8()"];
let room9=["dbl1.jpg","m9","double bedroom NON-AC","2500","id9","bill9()"];
let room10=["dbl2.jpg","m10","double bedroom NON-AC","2000","id10","bill10()"];
let room11=["dbl3.jpg","m11","double bedroom NON-AC","2900","id11","bill11()"];
let room12=["dbl4.jpg","m12","double bedroom NON-AC","3000","id12","bill12()"];
let room13=["dbl5.jpg","m13","double bedroom NON-AC","2900","id13","bill13()"];
let room14=["dbl6.jpg","m14","double bedroom NON-AC","3300","id14","bill14()"];
let room15=["dbl7.jpg","m15","double bedroom NON-AC","3600","id15","bill15()"];
let room16=["dbl8.jpg","m16","double bedroom NON-AC","3100","id16","bill16()"];
let room17=["ac1.jpeg","m17","single bedroom AC","4000","id17","bill17()"];
let room18=["ac2.jpg","m18","single bedroom AC","4300","id18","bill18()"];
let room19=["ac3.jpg","m19","single bedroom AC","4500","id19","bill19()"];
let room20=["ac4.jpg","m20","single bedroom AC","4000","id20","bill20()"];
let room21=["ac5.jpg","m21","single bedroom AC","4200","id21","bill21()"];
let room22=["ac6.jpg","m22","single bedroom AC","4700","id22","bill22()"];
let room23=["ac7.jpg","m23","single bedroom AC","4300","id23","bill23()"];
let room24=["ac8.jpg","m24","single bedroom AC","4600","id24","bill24()"];
let room25=["ac9.jpg","m25","double bedroom AC","5200","id25","bill25()"];
let room26=["ac10.jpg","m26","double bedroom AC","5700","id26","bill26()"];
let room27=["ac11.jpg","m27","double bedroom AC","5400","id27","bill27()"];
let room28=["ac12.jpg","m28","double bedroom AC","5100","id28","bill28()"];
let room29=["ac13.jpg","m29","double bedroom AC","6000","id29","bill29()"];
let room30=["ac14.jpg","m30","double bedroom AC","5700","id30","bill30()"];
let room31=["ac15.jpg","m31","double bedroom AC","5600","id31","bill31()"];
let room32=["ac16.jpg","m32","double bedroom AC","5900","id32","bill32()"];
createcard(room1);
createcard(room2);
createcard(room3);
createcard(room4);
createcard(room5);
createcard(room6);
createcard(room7);
createcard(room8);
createcard(room9);
createcard(room10);
createcard(room11);
createcard(room12);
createcard(room13);
createcard(room14);
createcard(room15);
createcard(room16);
createcard(room17);
createcard(room18);
createcard(room19);
createcard(room20);
createcard(room21);
createcard(room22);
createcard(room23);
createcard(room24);
createcard(room25);
createcard(room26);
createcard(room27);
createcard(room28);
createcard(room29);
createcard(room30);
createcard(room31);
createcard(room32);




// creating details for popupcard
let a= new Date();
function changeval([item,days,totalprice]) {
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
        <li>iRoom type:${item}</li>
        <li id="day">days:${days}</li>
        <li id="total">total cost: ${totalprice}/-</li>
        </ul>
        <h4>odered time: ${time};</h4>
        </div>
        <div class="cnfrm">
            <button  onclick="popuptoggle();oderplaced()"class="done">confirm booking</button>
        </div>
    </div>
</div>

`;
    b.innerHTML = newval;
    
}
// counting bill
// let b=document.querySelector("");

function bill(){
    let val1=document.querySelector("#id1").value;
    console.log(val1);
    let b=val1*1200
    let x1=["single bedrooms",val1,b];
changeval(x1);
}
function bill2(){
    let val1=document.querySelector("#id2").value;
    console.log(val1);
    let b1=val1*1500
    let x2=["single bedrooms",val1,b1];
changeval(x2);
}
function bill3(){
    let val1=document.querySelector("#id3").value;
    console.log(val1);
    let b=val1*1000
    let x3=["single bedrooms",val1,b];
changeval(x3);
}
function bill4(){
    let val1=document.querySelector("#id4").value;
    console.log(val1);
    let b=val1*1800
    let x4=["single bedrooms",val1,b];
changeval(x4);
}
function bill5(){
    let val1=document.querySelector("#id5").value;
    console.log(val1);
    let b=val1*1200
    let x5=["single bedrooms",val1,b];
changeval(x5);
}
function bill6(){
    let val1=document.querySelector("#id6").value;
    console.log(val1);
    let b=val1*1500
    let x6=["single bedrooms",val1,b];
changeval(x6);
}
function bill7(){
    let val1=document.querySelector("#id7").value;
    console.log(val1);
    let b=val1*1900
    let x7=["single bedrooms",val1,b];
changeval(x7);
}
function bill8(){
    let val1=document.querySelector("#id8").value;
    console.log(val1);
    let b=val1*1600
    let x8=["single bedrooms",val1,b];
changeval(x8);
}
function bill9(){
    let val1=document.querySelector("#id9").value;
    console.log(val1);
    let b=val1*2500
    let x9=["Double bedrooms",val1,b];
changeval(x9);
}
function bill10(){
    let val1=document.querySelector("#id10").value;
    console.log(val1);
    let b=val1*2000
    let x10=["Double bedrooms",val1,b];
changeval(x10);
}
function bill11(){
    let val1=document.querySelector("#id11").value;
    console.log(val1);
    let b=val1*2900
    let x11=["Double bedrooms",val1,b];
changeval(x11);
}
function bill12(){
    let val1=document.querySelector("#id12").value;
    console.log(val1);
    let b=val1*3000
    let x12=["Double bedrooms",val1,b];
changeval(x12);
}
function bill13(){
    let val1=document.querySelector("#id13").value;
    console.log(val1);
    let b=val1*2900
    let x13=["Double bedrooms",val1,b];
changeval(x13);
}
function bill14(){
    let val1=document.querySelector("#id14").value;
    console.log(val1);
    let b=val1*3300
    let x14=["Double bedrooms",val1,b];
changeval(x14);
}
function bill15(){
    let val1=document.querySelector("#id15").value;
    console.log(val1);
    let b=val1*3600
    let x15=["Double bedrooms",val1,b];
changeval(x15);
}
function bill16(){
    let val1=document.querySelector("#id16").value;
    console.log(val1);
    let b=val1*3100
    let x16=["Double bedrooms",val1,b];
changeval(x16);
}
function bill17(){
    let val1=document.querySelector("#id17").value;
    console.log(val1);
    let b=val1*4000
    let x17=["single bedroom AC",val1,b];
changeval(x17);
}
function bill18(){
    let val1=document.querySelector("#id18").value;
    console.log(val1);
    let b=val1*4300
    let x18=["single bedroom AC",val1,b];
changeval(x18);
}
function bill19(){
    let val1=document.querySelector("#id19").value;
    console.log(val1);
    let b=val1*4500
    let x19=["single bedroom AC",val1,b];
changeval(x19);
}
function bill20(){
    let val1=document.querySelector("#id20").value;
    console.log(val1);
    let b=val1*4000
    let x20=["single bedroom AC",val1,b];
changeval(x20);
}
function bill21(){
    let val1=document.querySelector("#id21").value;
    console.log(val1);
    let b=val1*4200
    let x21=["single bedroom AC",val1,b];
changeval(x21);
}
function bill22(){
    let val1=document.querySelector("#id22").value;
    console.log(val1);
    let b=val1*4700
    let x22=["single bedroom AC",val1,b];
changeval(x22);
}
function bill23(){
    let val1=document.querySelector("#id23").value;
    console.log(val1);
    let b=val1*4300
    let x23=["single bedroom AC",val1,b];
changeval(x23);
}
function bill24(){
    let val1=document.querySelector("#id24").value;
    console.log(val1);
    let b=val1*4000
    let x24=["single bedroom AC",val1,b];
changeval(x24);
}
function bill25(){
    let val1=document.querySelector("#id25").value;
    console.log(val1);
    let b=val1*5200
    let x25=["double bedroom AC",val1,b];
changeval(x25);
}
function bill26(){
    let val1=document.querySelector("#id26").value;
    console.log(val1);
    let b=val1*5700
    let x26=["double bedroom AC",val1,b];
changeval(x26);
}
function bill27(){
    let val1=document.querySelector("#id27").value;
    console.log(val1);
    let b=val1*5400
    let x27=["double bedroom AC",val1,b];
changeval(x27);
}
function bill28(){
    let val1=document.querySelector("#id28").value;
    console.log(val1);
    let b=val1*2100
    let x28=["double bedroom AC",val1,b];
changeval(x28);
}
function bill29(){
    let val1=document.querySelector("#id29").value;
    console.log(val1);
    let b=val1*6000
    let x29=["double bedroom AC",val1,b];
changeval(x29);
}
function bill30(){
    let val1=document.querySelector("#id30").value;
    console.log(val1);
    let b=val1*5700
    let x30=["double bedroom AC",val1,b];
changeval(x30);
}
function bill31(){
    let val1=document.querySelector("#id31").value;
    console.log(val1);
    let b=val1*5600
    let x31=["double bedroom AC",val1,b];
changeval(x31);
}
function bill32(){
    let val1=document.querySelector("#id32").value;
    console.log(val1);
    let b=val1*5900
    let x32=["double bedroom AC",val1,b];
changeval(x32);
}