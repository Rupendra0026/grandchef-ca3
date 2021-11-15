function popuptoggle(){
    let a=document.querySelector(".popup");
    a.classList.toggle('active');
}
// function vegbiriyani(){
//     let a=document.querySelector(".popup");
//     a.classList.toggle('active');
//     let b=document.querySelector("#billitem");
//     let c=document.querySelector("#additionalbill");
//     let d=document.querySelector("#totalbill");
//     b.innerHTML="Veg Biriyani";
//     c.innerHTML="15";
//     d.innerHTML="295";
// }
// function vegnoodles(){
//     let a=document.querySelector(".popup");
//     a.classList.toggle('active');
//     let b=document.querySelector("#billitem");
//     let c=document.querySelector("#additionalbill");
//     let d=document.querySelector("#totalbill");
//     b.innerHTML="Veg noodles";
//     c.innerHTML="10";
//     d.innerHTML="160";
// }
function changeval([item, aadditional, totalprice]) {
    let b = document.querySelector(".popup");
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
        <li>additional charges: rs${aadditional}/-</li>
        <li>total cost: ${totalprice}/-</li>
        </ul>
        </div>
        <div class="cnfrm">
            <button  onclick="confirm();popuptoggle();"class="done">confirm order</button>
        </div>
    </div>
</div>

`;
    b.innerHTML = newval;
    
}
function confirm(){
    
    alert("oder has been placed sucessfully");
    // let access=document.querySelector(".popup");
    // access.style.visibility= "hidden";
}
let val1 = ["Veg Friedrice",
    "15",
    "215"];
let val2 = ["veg biriyani",
    "10",
    "290"];
let val3=["veg noodles",
"20",
"170"
];
let val4=["paneer biriyani",
"15",
"265"
];
let val5=["mushroom biriyani",
"10",
"280"
];
let val6=["zirarice",
"5",
"125"
];
let val7=["cashew biriyani",
"20",
"320"
];
let val8=["tomato rice",
"10",
"260"
];
let val9=["full meals",
"10",
"190"
];
let val10=["family meals","10","330"];
let val11=["white rice","5","125"];
let val12=["special biriyani","20","270"];
let val13=["egg friedrice","15","215"];
let val14=["egg biriyani","20","300"];
let val15=["egg noodles","15","165"];
let val16=["panner egg biriyani","20","290"];
let val17=["mirchi egg biriyani","20","290"];
let val18=["tomato egg biriyani","10","160"];
let val19=["cashew egg biriyani","20","220"];
let val20=["egg biriyani","10","190"];
let val21=["egg tandoori","15","225"];
let val22=["special egg biriyani","20","260"];
let val23=["egg dum bririyani","20","300"];
let val24=["special egg fried rice","10","210"];
let val25=["egg bread","10","130"];
let val26=["mayonnaise","10","210"];
let val27=["stuffed egg","10","190"];
let val28=["spicy hard eggs","10","240"];
let val29=["egg toast","10","270"];
let val30=["egg omelette","10","170"];
let val31=["egg kabab","10","180"];
let val32=["toast grilled pepper egg","10","280"];
let val33=["egg patties","10","210"];
let val34=["cheesy egg","10","260"];
let val35=["egg salad","10","230"];
let val36=["special egg stuff","10","200"];
let val37=["asparagus-egg","10","260"];
let val38=["egg scrambled","10","220"];
let val39=["spanish omelette","10","280"];
let val40=["egg rolls","10","210"];
let val41=["chicken friedrice","20","220"];
let val42=["egg-chicken","20","270"];
let val43=["boneless chicken","30","300"];
let val44=["masala chicken rice","20","300"];
let val45=["chicken biriyani","15","225"];
let val46=["special-friedlegs","30","310"];
let val47=["chicken dum","20","270"];
let val48=["hyd spl biriyani","30","330"];
let val49=["tehari biriyani","20","330"];
let val50=["calicut biriyani","30","370"];
let val51=["bamboo biriyani","20","270"];
let val52=["kozhikodan biriyani","30","310"];
let val53=["handi biriyani","20","330"];
let val54=["quinoa biriyani","20","220"];
let val55=["kofte biriyani","20","280"];
let val56=["special fried legpice","30","270"];
let val57=["chicken lolipop","10","240"];
let val58=["deep fried pieces","10","190"];
let val59=["chicken kabab","10","250"];
let val60=["special fried chicken","10","290"];
let val61=["mexican lime","10","310"];
let val62=["cilantro","10","230"];
let val63=["special wings","20","310"];
let val64=["hong-kong chicken","30","230"];
let val65=["chilli chicken","15","295"];
let val66=["grilled chicken","10","330"];
let val67=["butter-chicken","10","360"];
let val68=["tandoori","10","320"];
let val69=["mutton friedrice","20","320"];
let val70=["mutton biriyani","30","390"];
let val71=["mutton dum biriyani","30","430"];
let val72=["mutton-ambur biriyani","20","360"];
let val73=["mutton awadhi","20","320"];
let val74=["mutton-golibiriyani","20","340"];
let val75=["hyd mutton biriyani","20","410"];
let val76=["family pack","0","480"];

// let
changeval(val1);
changeval(val2);
changeval(val3);
changeval(val4);
changeval(val5);
changeval(val6);
changeval(val7);
changeval(val8);
changeval(val9);
changeval(val10);
changeval(val11);
changeval(val12);
changeval(val3);
changeval(val4);
changeval(val5);
changeval(val16);
changeval(val17);
changeval(val18);
changeval(val19);
changeval(val20);
changeval(val21);
changeval(val22);
changeval(val23);
changeval(val24);
changeval(val25);
changeval(val26);
changeval(val27);
changeval(val28);
changeval(val29);
changeval(val30);
changeval(val31);
changeval(val32);
changeval(val33);
changeval(val34);
changeval(val35);
changeval(val36);
changeval(val37);
changeval(val38);
changeval(val39);
changeval(val40);
changeval(val41);
changeval(val42);
changeval(val43);
changeval(val44);
changeval(val45);
changeval(val46);
changeval(val47);
changeval(val48);
changeval(val49);
changeval(val50);
changeval(val51);
changeval(val52);
changeval(val53);
changeval(val54);
changeval(val55);
changeval(val56);
changeval(val57);
changeval(val58);
changeval(val59);
changeval(val60);
changeval(val61);
changeval(val62);
changeval(val63);
changeval(val64);
changeval(val65);
changeval(val66);
changeval(val67);
changeval(val68);
changeval(val69);
changeval(val70);
changeval(val71);
changeval(val72);
changeval(val73);
changeval(val74);
changeval(val75);
changeval(val76);

// confirm

