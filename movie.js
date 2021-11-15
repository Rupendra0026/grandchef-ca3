// cardss
function popuptoggle(){
    let a=document.querySelector(".popup");
    a.classList.toggle('active');
}
function oderplaced()
{
    alert("oder has been placed successfully")
}
function createcard([img,mainid,moviename,ticketprice,review,id,bill])
{
    const products=document.querySelector(".productholder")
        let newcard=`
        <div class="card">
            <img src="${img}" alt="" id=${mainid}>
            <div class="cardtext">
                <h2 class="moviename">${moviename}</h2>
                <h4 class="ticketprice">price:${ticketprice}</h4>
                <h4 class="showtime">Time:6:00pm to 8:30pm</h4>
                <h4 class="review">Review:${review}</h4>
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
let movie1=["./images/movie1.jpg","m1","Joker","150","⭐⭐⭐⭐","t1","bill1()"];
let movie2=["./images/movie2.jpg","m2","Lion King","150","⭐⭐⭐⭐⭐","t2","bill2()"];
let movie3=["./images/movie3.jpg","m3","Avengers","120","⭐⭐⭐⭐","t3","bill3()"];
let movie4=["./images/movie4.jpg","m4","Venom","170","⭐⭐⭐","t4","bill4()"];
let movie5=["./images/movie5.jpg","m5","Bahubali","200","⭐⭐⭐⭐⭐","t5","bill5()"];
let movie6=["./images/movie6.jpg","m6","Saaho","150","⭐⭐⭐","t6","bill6()"];
let movie7=["./images/movie7.jpg","m7","RRR","200","⭐⭐⭐⭐","t7","bill7()"];
let movie8=["./images/movie8.jpg","m8","Kabir singh","180","⭐⭐⭐⭐","t8","bill8()"];
let movie9=["./images/movie9.jpg","m9","padhmavath","150","⭐⭐⭐⭐","t9","bill9()"];
let movie10=["./images/movie10.jpg","m10","TENET","170","⭐⭐⭐","t10","bill10()"];
let movie11=["./images/movie11.jpg","m11","Radheshyam","200","⭐⭐⭐⭐⭐","t11","bill11()"];
let movie12=["./images/movie12.jpg","m12","RED","150","⭐⭐⭐","t12","bill12()"];


createcard(movie1);
createcard(movie2);
createcard(movie3);
createcard(movie4);
createcard(movie5);
createcard(movie6);
createcard(movie7);
createcard(movie8);
createcard(movie9);
createcard(movie10);
createcard(movie11);
createcard(movie12);

// /creating details for popupcard

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
        <li>movie Name:${item}</li>
        <li id="tic">tickets:${days}</li>
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
function bill1()
{
    let a=document.querySelector("#t1").value;
    let b=a*150;
    let x1=["Joker",a,b];
    changeval(x1)
}
function bill2()
{
    let a=document.querySelector("#t2").value;
    let b=a*150;
    let x2=["Lion King",a,b];
    changeval(x2)
}
function bill3()
{
    let a=document.querySelector("#t3").value;
    let b=a*120;
    let x3=["Avengers",a,b];
    changeval(x3)
}
function bill4()
{
    let a=document.querySelector("#t4").value;
    let b=a*170;
    let x4=["Venom",a,b];
    changeval(x4)
}
function bill5()
{
    let a=document.querySelector("#t5").value;
    let b=a*200;
    let x5=["Bahubali",a,b];
    changeval(x5);
}
function bill6()
{
    let a=document.querySelector("#t6").value;
    let b=a*150;
    let x6=["Saaho",a,b];
    changeval(x6)
}
function bill7()
{
    let a=document.querySelector("#t7").value;
    let b=a*200;
    let x7=["RRR",a,b];
    changeval(x7)
}
function bill8()
{
    let a=document.querySelector("#t8").value;
    let b=a*180;
    let x8=["Kabir Singh",a,b];
    changeval(x8)
}
function bill9()
{
    let a=document.querySelector("#t9").value;
    let b=a*150;
    let x9=["Padhmavth",a,b];
    changeval(x9)
}
function bill10()
{
    let a=document.querySelector("#t10").value;
    let b=a*170;
    let x10=["TENET",a,b];
    changeval(x10)
}
function bill11()
{
    let a=document.querySelector("#t11").value;
    let b=a*200;
    let x11=["Radheshyam",a,b];
    changeval(x11)
}
function bill12()
{
    let a=document.querySelector("#t12").value;
    let b=a*150;
    let x12=["RED",a,b];
    changeval(x12)
}
