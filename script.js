const btn=document.getElementById("btn");
const btn2=document.getElementById("icon");
const div=document.getElementById("divi1");
const btn3=document.getElementById("btn3");
const like=document.getElementById("icons1");
const dislike=document.getElementById("icons2");
const share=document.getElementById("icons3");
const download=document.getElementById("icons4");
const par2=document.getElementById("par2");
const par3=document.getElementById("par3");
const link3=document.getElementById("linkk");
const divi2=document.getElementById("div-icon");
const img2=document.getElementById("linkk3");

let counter1=0;
let counter2=0;


btn.addEventListener("click",function(){
    let x=div.classList.contains("anime");
    if(x){
        div.classList.remove("anime");
    }else{
        div.classList.add("anime");
    }
    return;
})
btn2.addEventListener("click",function(){
    let y=div.classList.contains("anime");
    if(y){
        div.classList.remove("anime");
    }else{
        div.classList.add("anime");
    }
    return;



})
btn3.addEventListener("click",function(){
    let y=div.classList.contains("anime");
    if(y){
        div.classList.remove("anime");
    }else{
        div.classList.add("anime");
    }
    return;



})
like.addEventListener("click",function(){
     let f=like.classList.contains("anime2");
    if(f){
        like.classList.remove("anime2");
    }else{
        like.classList.add("anime2");
    }
    let count=1;
    if(count>=0 && f==false){
        counter1++;
        par2.innerHTML=counter1;
    }else{
        counter1--;
        par2.innerHTML=counter1;
    }
    return;

})
dislike.addEventListener("click",function(){
     let g=dislike.classList.contains("anim2");
    if(g){
        dislike.classList.remove("anim2");
    }else{
        dislike.classList.add("anim2");
    }
    let count=1;
    if(count>=0 && g==false){
        counter2++;
        par3.innerHTML=counter2;
    }
    return;

})
download.addEventListener("click",function(){
    let n=img2.classList.contains("anime3");
    if(n){
       img2.classList.remove("anime3");
    }else{
        img2.classList.add("anime3");
   
    }
     let m=link3.classList.contains("anime3");
    if(m){
       link3.classList.remove("anime3");
    }else{
        link3.classList.add("anime3");
   
    }
     return;
    
})
const mian2=document.getElementById("main22");
const bute1=document.getElementById("btn2")
const bute2=document.getElementById("btn4");
const bute3=document.getElementById("btn5");
const bute4=document.getElementById("btn6");
const bute5=document.getElementById("btn7");
const bute6=document.getElementById("btn8");
const form=document.getElementById("form");
const input1=document.getElementById("input1");
const input2=document.getElementById("input2");
const par4=document.getElementById("par4");
const bute7=document.getElementById("btn9");
const game=document.getElementById("game-id");
const game2=document.getElementById("close-game");
const game3=document.getElementById("parde");
const game4=document.getElementById("btn10");
const game5=document.getElementById("btn11");
const game6=document.getElementById("par33");
const game7=document.getElementById("par22");
const game8=document.getElementById("icons11");
const game9=document.getElementById("icons22");
const bute77=document.getElementById("btn99");
let counter3=0;
let counter4=0;



bute1.addEventListener("click",function(){
    let mony=mian2.classList.contains("anime4");
    let sony=game.classList.contains("anime-game");
    if(mony || sony){
        mian2.classList.remove("anime4");
        game.classList.remove("anime-game");
    }else{
        mian2.classList.add("anime4");
       
        btn.classList.add("anime5");
        game.classList.add("anime-game");
 div.classList.remove("anime");
    }
    return;

})
bute6.addEventListener("click",function(){
    
     mian2.classList.remove("anime4");
        
        btn.classList.remove("anime5");

        return;
})
bute2.addEventListener("click",function(e){
input1.value;
input2.value;
let opo=-input1.value-input2.value;
par4.innerHTML=opo*-1;


})
bute3.addEventListener("click",function(e){
input1.value;
input2.value;
let opo=input1.value-input2.value;
par4.innerHTML=opo;


})
bute4.addEventListener("click",function(e){
input1.value;
input2.value;
let opo=input1.value*input2.value;
par4.innerHTML=opo;


})
bute5.addEventListener("click",function(e){
input1.value;
input2.value;
let opo=input1.value/input2.value;
par4.innerHTML=opo;


})

bute7.addEventListener("click",function(){
    let yop=bute7.classList.contains("anime6");
    if(yop){
        bute7.classList.remove("anime6")
        mian2.style.background="#F4D35E"

    }else{
        bute7.classList.add("anime6")
        mian2.style.background="rgb(208, 255, 0)"
    }

    return;
})
game2.addEventListener("click",function(){
    game.classList.remove("anime-game");

    btn.classList.remove("anime5");

    return;

})
game4.addEventListener("click",function(){
    game3.classList.add("anime-parde");
    return;

})
game5.addEventListener("click",function(){
    game3.classList.remove("anime-parde");
    return;

})
game8.addEventListener("click",function(){
   let o=game8.classList.contains("anime-hey");
   if(o){
       game8.classList.remove("anime-hey");
       counter3--;
       game7.innerHTML=counter3;

   }else{
       game8.classList.add("anime-hey");
       counter3++;
       game7.innerHTML=counter3;
   }
   return;
})
game9.addEventListener("click",function(){
   let op=game9.classList.contains("anime-hey");
   if(op){
       game9.classList.remove("anime-hey");
      
   }else{
       game9.classList.add("anime-hey");
        counter4++;
       game6.innerHTML=counter4;
   }
   return;
})
bute77.addEventListener("click",function(){
    let yop=bute77.classList.contains("anime6");
    if(yop){
        bute77.classList.remove("anime6")
        game.style.background="#F4D35E"

    }else{
        bute77.classList.add("anime6")
        game.style.background="#2b2d42"
    }

    return;
})

const coloros2=document.getElementById("coloro1");
const color1=document.getElementById("wall");

const text1=document.getElementById("wall-id");
const btncolor=document.getElementById("but-color");
const color2=document.getElementById("wall2");

const text2=document.getElementById("wall-id2");
const color3=document.getElementById("wall3");

const text3=document.getElementById("wall-id3");
const color4=document.getElementById("wall4");

const text4=document.getElementById("wall-id4");
const btn999=document.getElementById("btn999");
const btn50=document.getElementById("but-color2");

let numbers2=[0,1,2,3,4,5,6,"A","B","C","D","E","F"]

btncolor.addEventListener("click",function(){

    let changecolor2="#";

    for(let j=0;j<6;j++){
        changecolor2+=numbers2[changecolormn1()];

    }
    text1.innerHTML=changecolor2;
    color1.style.backgroundColor=changecolor2;
  
})
function changecolormn1(){

    let xom=Math.floor(Math.random()*numbers2.length);
    return xom;
}
btncolor.addEventListener("click",function(){

    let changecolor2="#";

    for(let j=0;j<6;j++){
        changecolor2+=numbers2[changecolormn1()];

    }
    text2.innerHTML=changecolor2;
    color2.style.backgroundColor=changecolor2;
  
})
function changecolormn1(){

    let xom=Math.floor(Math.random()*numbers2.length);
    return xom;
}
btncolor.addEventListener("click",function(){

    let changecolor2="#";

    for(let j=0;j<6;j++){
        changecolor2+=numbers2[changecolormn1()];

    }
    text3.innerHTML=changecolor2;
    color3.style.backgroundColor=changecolor2;
  
})
function changecolormn1(){

    let xom=Math.floor(Math.random()*numbers2.length);
    return xom;
}
btncolor.addEventListener("click",function(){

    let changecolor2="#";

    for(let j=0;j<6;j++){
        changecolor2+=numbers2[changecolormn1()];

    }
    text4.innerHTML=changecolor2;
    color4.style.backgroundColor=changecolor2;
  
})
function changecolormn1(){

    let xom=Math.floor(Math.random()*numbers2.length);
    return xom;
}

bute1.addEventListener("click",function(){
    
    let sonyom=coloros2.classList.contains("anime-color");
    if(sonyom){
       
        coloros2.classList.remove("anime-color");
    }else{
        
        coloros2.classList.add("anime-color");
       
        div.classList.remove("anime");
    }
    return;

})

btn999.addEventListener("click",function(){
    
    let mano=btn999.classList.contains("anime87");
    if(mano){
        btn999.classList.remove("anime87");
        coloros2.style.background="#F4D35E"
    }else{
       btn999.classList.add("anime87");
        coloros2.style.background="crimson"
    }
    return;
})
btn50.addEventListener("click",function(){
     let sonyom=coloros2.classList.contains("anime-color");
    if(sonyom){
       
        coloros2.classList.remove("anime-color");
    }else{
        
        coloros2.classList.add("anime-color");
       
        div.classList.remove("anime");
    }
    return;
})
const divswich=document.getElementById("swich");
const textofnum=document.getElementById("swich-num");
const swichbtn=document.querySelectorAll(".btn");
const swichbody=document.getElementById("swich-body");
const swichchar=document.getElementById("swich-char");
const swaichbut=document.getElementById("swich-btn2");
const swaichbut2=document.getElementById("swich-btn4");
const swaichbut3=document.getElementById("btn-swich1");
let meghdar=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190];
let nom=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

let counter5=0;

swichbtn.forEach(function(btns){
    btns.addEventListener("click",function(e){
        const orange=e.currentTarget.classList;
        if(orange.contains("increase")){
            counter5++;
        }else if (orange.contains("decrease")) {
            counter5--;
        }else {
            counter5=0;
        }
       if(counter5>0){
           textofnum.style.color="#0540ED"

       }
       else{
           textofnum.style.color="black"
       }
       if(counter5<0){
           textofnum.style.color="#461D2A"

       }
        textofnum.innerHTML=counter5;
       let trans="translateX"
       for(let m=0;m<1 && counter5===0;m++){
          
           trans+=`(0px)`;

       }
       for(let m=0;m<1 && counter5===1;m++){
          
           trans+=`(10px)`;

       }
       for(let m=0;m<1 && counter5===2;m++){
          
           trans+=`(${meghdar[nom[1]]}px)`;

       }
       for(let m=0;m<1 && counter5===3;m++){
          
           trans+=`(${meghdar[nom[2]]}px)`;

       }
       for(let m=0;m<1 && counter5===4;m++){
          
           trans+=`(${meghdar[nom[3]]}px)`;

       }
       for(let m=0;m<1 && counter5===5;m++){
          
           trans+=`(${meghdar[nom[4]]}px)`;

       }
       for(let m=0;m<1 && counter5===6;m++){
          
           trans+=`(${meghdar[nom[5]]}px)`;

       }
       for(let m=0;m<1 && counter5===7;m++){
          
           trans+=`(${meghdar[nom[6]]}px)`;

       }
       for(let m=0;m<1 && counter5===8;m++){
          
           trans+=`(${meghdar[nom[7]]}px)`;

       }
       for(let m=0;m<1 && counter5===9;m++){
          
           trans+=`(${meghdar[nom[8]]}px)`;

       }
       for(let m=0;m<1 && counter5===10;m++){
          
           trans+=`(${meghdar[nom[9]]}px)`;

       }
       for(let m=0;m<1 && counter5===11;m++){
          
           trans+=`(${meghdar[nom[10]]}px)`;

       }
        for(let m=0;m<1 && counter5===12;m++){
          
           trans+=`(${meghdar[nom[11]]}px)`;

       }
        for(let m=0;m<1 && counter5===13;m++){
          
           trans+=`(${meghdar[nom[12]]}px)`;

       }
        for(let m=0;m<1 && counter5===14;m++){
          
           trans+=`(${meghdar[nom[13]]}px)`;

       }
        for(let m=0;m<1 && counter5===15;m++){
          
           trans+=`(${meghdar[nom[14]]}px)`;

       }
        for(let m=0;m<1 && counter5===16;m++){
          
           trans+=`(153px)`;

       }
        
        for(let m=0;m<1 && counter5===-1;m++){
          
           trans+=`(-10px)`;

       }
        for(let m=0;m<1 && counter5===-2;m++){
          
           trans+=`(-20px)`;

       }
        for(let m=0;m<1 && counter5===-3;m++){
          
           trans+=`(-30px)`;

       }
        for(let m=0;m<1 && counter5===-4;m++){
          
           trans+=`(-40px)`;

       }
        for(let m=0;m<1 && counter5===-5;m++){
          
           trans+=`(-50px)`;

       }
        for(let m=0;m<1 && counter5===-6;m++){
          
           trans+=`(-60px)`;

       }
        for(let m=0;m<1 && counter5===-7;m++){
          
           trans+=`(-80px)`;

       }
        for(let m=0;m<1 && counter5===-8;m++){
          
           trans+=`(-90px)`;

       }

        for(let m=0;m<1 && counter5===-9;m++){
          
           trans+=`(-100px)`;

       }
        for(let m=0;m<1 && counter5===-10;m++){
          
           trans+=`(-110px)`;

       }
        for(let m=0;m<1 && counter5===-11;m++){
          
           trans+=`(-120px)`;

       }
        for(let m=0;m<1 && counter5===-12;m++){
          
           trans+=`(-130px)`;

       }
        for(let m=0;m<1 && counter5===-13;m++){
          
           trans+=`(-140px)`;

       }
       for(let m=0;m<1 && counter5===-14;m++){
          
           trans+=`(-150px)`;

       }
        for(let m=0;m<1 && counter5===-15;m++){
          
           trans+=`(-160px)`;

       }
        for(let m=0;m<1 && counter5===-16;m++){
          
           trans+=`(-165px)`;

       }

       let changeo="";
       if(counter5===1){
           changeo+=`crimson`
       }
       if(counter5===2){
           changeo+=`blue`
       }
       if(counter5===3){
           changeo+=`yellowgreen`
       }
        if(counter5===-1){
           changeo+=`orange`
       }
       if(counter5===-2){
           changeo+=`purple`
       }
       if(counter5===-3){
           changeo+=`grey`
       }

        

       
       
        swaichbut.style.background=changeo;
        swichchar.style.transform=trans;
        console.log(trans);

    })
     
})
bute1.addEventListener("click",function(){
    
    let sonyom2=divswich.classList.contains("anime-swich");
    if(sonyom2){
       
        divswich.classList.remove("anime-swich");
    }else{
        
        divswich.classList.add("anime-swich");
       
        div.classList.remove("anime");
    }
    return;

})
swaichbut2.addEventListener("click",function(){
    
    let sonyom2=divswich.classList.contains("anime-swich");
    if(sonyom2){
       
        divswich.classList.remove("anime-swich");
    }else{
        
        divswich.classList.add("anime-swich");
       
        div.classList.remove("anime");
    }
    return;

})
swaichbut3.addEventListener("click",function(){
    
    let mano=swaichbut3.classList.contains("anime87");
    if(mano){
        swaichbut3.classList.remove("anime87");
        divswich.style.background="#F4D35E"
    }else{
       swaichbut3.classList.add("anime87");
        divswich.style.background="#EA6F5B"
    }
    return;
})
let persons=[{
    img:"pictures/user1.jpg",
    name1:"Lillia",
    job:"Web Development",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illum error molestias labore deleniti vero",
    icon:"pictures/react.png",
},
{
    img:"pictures/user2.jpg",
    name1:"Alex",
    job:"Game Develpoment",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illum error molestias labore deleniti vero",
    icon:"pictures/game.png",
},
{
    img:"pictures/user3.jpg",
    name1:"Sara",
    job:"Softwere Enginear",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illum error molestias labore deleniti vero",
    icon:"pictures/window.png",
}
];
let review=0;
const lilimain=document.getElementById("lili-main");
const revo=document.getElementById("review1");
const img6=document.getElementById("img6");
const lili4=document.getElementById("lili4");
const lili2=document.getElementById("lili2");
const lili3=document.getElementById("lili3");
const iconha=document.getElementById("icon-img");
const nextbut=document.getElementById("next");
const lastbut=document.getElementById("last");
const lastbuto=document.getElementById("iconic");
const lastbuto1=document.getElementById("btn-rev1");


window.addEventListener("DOMContentLoaded",function(){
    salamati();
})
function salamati(){
    img6.src=persons[review].img;
    lili4.textContent=persons[review].name1;
    lili2.textContent=persons[review].job;
    iconha.src=persons[review].icon;

}
nextbut.addEventListener("click",function(){
    review++;
    if(review>persons.length-1){
        review=0;
    }
    salamati();
   
})
lastbut.addEventListener("click",function(){
    review--;
    if(review<0){
        review=persons.length-1;
    }
    salamati();
    
})
bute1.addEventListener("click",function(){
    
    let sonyom3=revo.classList.contains("anime-rev");
    if(sonyom3){
       
        revo.classList.remove("anime-rev");
    }else{
        
        revo.classList.add("anime-rev");
       
        div.classList.remove("anime");
    }
    return;

})
lastbuto.addEventListener("click",function(){
    let sonyom3=revo.classList.contains("anime-rev");
    if(sonyom3){
       
        revo.classList.remove("anime-rev");
    }else{
        
        revo.classList.add("anime-rev");
       
        div.classList.remove("anime");
    }
    return;

})
lastbuto1.addEventListener("click",function(){
    
    let mano32=lastbuto1.classList.contains("anime88");
    if(mano32){
        lastbuto1.classList.remove("anime88");
        revo.style.background="#F4D35E"
        lastbut.style.background="#F4D35E"
        nextbut.style.background="#F4D35E"
    }else{
       lastbuto1.classList.add("anime88");
       revo.style.background="#C3A4FD"
        lastbut.style.background="#C3A4FD"
        nextbut.style.background="#C3A4FD"
    }
    return;
})

const qestions=document.querySelectorAll(".clicks");

const cl=document.getElementById("clicks1");
const cla=document.querySelector(".javab");

const cl2=document.getElementById("clicks12");
const cla2=document.querySelector(".javab2");

const cl3=document.getElementById("clicks123");
const cla3=document.querySelector(".javab3");

const soalandjavab=document.getElementById("question1");
const jojo=document.getElementById("btn-qaa2");
const jojo2=document.getElementById("closing");


qestions.forEach(function(buttons){
    buttons.addEventListener("click",function(e){
        let item=e.currentTarget.parentElement.parentElement;
        let item2=e.currentTarget;
        

        
        item.classList.toggle("show");
       item2.classList.toggle("xom");
        
        
        console.log(item2);
    })
})
cl.addEventListener("click",function(){
cla.classList.toggle("show2");
})

cl2.addEventListener("click",function(){
cla2.classList.toggle("show2");
})

cl3.addEventListener("click",function(){
cla3.classList.toggle("show2");
})

bute1.addEventListener("click",function(){
    
    let sonyom22=soalandjavab.classList.contains("anime-qaa");
    if(sonyom22){
       
        soalandjavab.classList.remove("anime-qaa");
    }else{
        
        soalandjavab.classList.add("anime-qaa");
       
        div.classList.remove("anime");
    }
    return;

})
jojo2.addEventListener("click",function(){
    
    let sonyom223=soalandjavab.classList.contains("anime-qaa");
    if(sonyom223){
       
        soalandjavab.classList.remove("anime-qaa");
    }else{
        
        soalandjavab.classList.add("anime-qaa");
       
        div.classList.remove("anime");
    }
    return;

})
jojo.addEventListener("click",function(){
    
    let mano432=jojo.classList.contains("anime89");
    if(mano432){
        jojo.classList.remove("anime89");
        soalandjavab.style.background="#F4D35E"
    }else{
       jojo.classList.add("anime89");
       soalandjavab.style.background="#4C3640"
    }
    return;
})

let hardmenu=[{
    img3:"./pictures/bird.jpg",
    title3:"Bird1",
    info3:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category:"Wild",
    ids:"2"

},
{
    img3:"./pictures/bird2.jpg",
    title3:"Bird2",
    info3:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category:"Ahli",
    ids:"1",

},
{
    img3:"./pictures/bird3.jpg",
    title3:"Bird3",
    info3:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category:"Wild",
    ids:"3",

},
];

const harddiv=document.querySelector(".main-hard");
const hardbtn=document.querySelectorAll(".hard-btn");
const mainhard=document.querySelector(".hard");
const mainhard2=document.querySelector("#hard-close");
const mainhard3=document.querySelector("#btn-menu2");


window.addEventListener("DOMContentLoaded",function(){
        showbirds(hardmenu);
})

hardbtn.forEach(function(hardbtns1){
    hardbtns1.addEventListener("click",function(e){
        let category4=e.currentTarget.dataset.id;
        
        let categoryfilter=hardmenu.filter(function(menuitem2){
            console.log(menuitem2.category);
            if(menuitem2.category===category4){

                return menuitem2;
            }
                
                
            }


        )
        if(category4==="all"){
            showbirds(hardmenu);
        }else{
            showbirds(categoryfilter);
        }
        console.log(categoryfilter);
    })
    
})

function showbirds(birds){
    let world=birds.map(function(gozine){


    return `<div class="main-hard">
    <img src=${gozine.img3} width="80" height="80" class="hard-img" alt="">
    <h3 class="hard-title">${gozine.title3} </h3>
    <p class="hard-info">${gozine.info3}</p>
    
  </div>`
    });
    world.join("");
    harddiv.innerHTML=world;
}
bute1.addEventListener("click",function(){
    
    let sonyom3323=mainhard.classList.contains("anime-menu");
    if(sonyom3323){
       
        mainhard.classList.remove("anime-menu");
    }else{
        
        mainhard.classList.add("anime-menu");
       
        div.classList.remove("anime");
    }
    return;

})
mainhard2.addEventListener("click",function(){
    
    let sonyom3323=mainhard.classList.contains("anime-menu");
    if(sonyom3323){
       
        mainhard.classList.remove("anime-menu");
    }else{
        
        mainhard.classList.add("anime-menu");
       
        div.classList.remove("anime");
    }
    return;

})
mainhard3.addEventListener("click",function(){
    
    let mano4323=mainhard3.classList.contains("anime1000");
    if(mano4323){
        mainhard3.classList.remove("anime1000");
        mainhard.style.background="#F4D35E"
    }else{
       mainhard3.classList.add("anime1000");
       mainhard.style.background="#4A5352"
    }
    return;
})

const bazi=document.querySelector(".bazi");
const bazibody=document.querySelector(".bazi-body");
const player1=document.getElementById("player");
const dokmeleft=document.querySelector(".bazi-btn");
const dokmerast=document.querySelector(".bazi-btn2");
const dokmeup=document.querySelector(".bazi-btn3");
const dokmedown=document.querySelector(".bazi-btn4");
const baziclose=document.getElementById("bx2");
const btnqaa2=document.getElementById("btn-qaa22")
let imga=[{
    imga2:"./pictures/back3.jpg"
},
    
]

let counterbazi=0;
let counterbazi2=0;
let counterbazi3=0;
let counterbazi4=0;




dokmeleft.addEventListener("click",function(){
    
      counterbazi--;
    
    if(counterbazi===-1){
       counterbazi2=-20; 
    }
    if(counterbazi===-2){
       counterbazi2=-40; 
    }
    if(counterbazi===-3){
       counterbazi2=-60; 
    }
    if(counterbazi===-4){
       counterbazi2=-80; 
    }
    if(counterbazi===-5){
       counterbazi2=-100; 
    }
     if(counterbazi===-6){
       counterbazi2=-120; 
    }
     if(counterbazi===-7){
       counterbazi2=-140; 
    }
     if(counterbazi===-8){
       counterbazi2=-160; 
    }
     if(counterbazi===-9){
       counterbazi2=-170; 
    }
     if(counterbazi===1){
       counterbazi2=20; 
    }
    if(counterbazi===2){
       counterbazi2=40; 
    }
    if(counterbazi===3){
       counterbazi2=60; 
    }
    if(counterbazi===4){
       counterbazi2=80; 
    }
    if(counterbazi===5){
       counterbazi2=100; 
    }
     if(counterbazi===6){
       counterbazi2=120; 
    }
     if(counterbazi===7){
       counterbazi2=140; 
    }
     if(counterbazi===8){
       counterbazi2=160; 
    }
     if(counterbazi===9){
       counterbazi2=170; 
    }
    let moveing=`translateX(${counterbazi2}px)`;
    let moveing4=`translateY(${counterbazi3}px)`;

   
    
    
         if(counterbazi===-7 && counterbazi4===9){
    
    alert("Good job,, you compelet this level :)")
}
    
    
    console.log(counterbazi);
    
   

    player1.style.transform=moveing+moveing4;
})
dokmerast.addEventListener("click",function(){
     counterbazi++;
    
    if(counterbazi===1){
       counterbazi2=20; 
    }
    if(counterbazi===2){
       counterbazi2=40; 
    }
    if(counterbazi===3){
       counterbazi2=60; 
    }
    if(counterbazi===4){
       counterbazi2=80; 
    }
    if(counterbazi===5){
       counterbazi2=100; 
    }
     if(counterbazi===6){
       counterbazi2=120; 
    }
     if(counterbazi===7){
       counterbazi2=140; 
    }
     if(counterbazi===8){
       counterbazi2=160; 
    }
     if(counterbazi===9){
       counterbazi2=170; 
    }
     if(counterbazi===-1){
       counterbazi2=-20; 
    }
    if(counterbazi===-2){
       counterbazi2=-40; 
    }
    if(counterbazi===-3){
       counterbazi2=-60; 
    }
    if(counterbazi===-4){
       counterbazi2=-80; 
    }
    if(counterbazi===-5){
       counterbazi2=-100; 
    }
     if(counterbazi===-6){
       counterbazi2=-120; 
    }
     if(counterbazi===-7){
       counterbazi2=-140; 
    }
     if(counterbazi===-8){
       counterbazi2=-160; 
    }
     if(counterbazi===-9){
       counterbazi2=-170; 
    }
     if(counterbazi===-7 && counterbazi4===9){
    
    alert("Good job,, you compelet this level :)")
}
    
    
    let moveing2=`translateX(${counterbazi2}px)`;
    let moveing4=`translateY(${counterbazi3}px)`;

   
    
    
        
    
   
    console.log(counterbazi);
    
   

    player1.style.transform=moveing2+moveing4;
})
dokmeup.addEventListener("click",function(){
    
    counterbazi4--;
    
    if(counterbazi4===1){
       counterbazi3=20; 
    }
    if(counterbazi4===2){
       counterbazi3=40; 
    }
    if(counterbazi4===3){
       counterbazi3=60; 
    }
    if(counterbazi4===4){
       counterbazi3=80; 
    }
    if(counterbazi4===5){
       counterbazi3=100; 
    }
     if(counterbazi4===6){
       counterbazi3=120; 
    }
     if(counterbazi4===7){
       counterbazi3=140; 
    }
     if(counterbazi4===8){
       counterbazi3=160; 
    }
     if(counterbazi4===9){
       counterbazi3=170; 
    }
     if(counterbazi4===-1){
       counterbazi3=-20; 
    }
    if(counterbazi4===-2){
       counterbazi3=-40; 
    }
    if(counterbazi4===-3){
       counterbazi3=-60; 
    }
    if(counterbazi4===-4){
       counterbazi3=-80; 
    }
    if(counterbazi4===-5){
       counterbazi3=-100; 
    }
     if(counterbazi4===-6){
       counterbazi3=-120; 
    }
     if(counterbazi4===-7){
       counterbazi3=-140; 
    }
     if(counterbazi4===-8){
       counterbazi3=-160; 
    }
     if(counterbazi4===-9){
       counterbazi3=-170; 
    }
     if(counterbazi===-1){
       counterbazi2=-20; 
    }
    if(counterbazi===-2){
       counterbazi2=-40; 
    }
    if(counterbazi===-3){
       counterbazi2=-60; 
    }
    if(counterbazi===-4){
       counterbazi2=-80; 
    }
    if(counterbazi===-5){
       counterbazi2=-100; 
    }
     if(counterbazi===-6){
       counterbazi2=-120; 
    }
     if(counterbazi===-7){
       counterbazi2=-140; 
    }
     if(counterbazi===-8){
       counterbazi2=-160; 
    }
     if(counterbazi===-9){
       counterbazi2=-170; 
    }
     if(counterbazi===1){
       counterbazi2=20; 
    }
    if(counterbazi===2){
       counterbazi2=40; 
    }
    if(counterbazi===3){
       counterbazi2=60; 
    }
    if(counterbazi===4){
       counterbazi2=80; 
    }
    if(counterbazi===5){
       counterbazi2=100; 
    }
     if(counterbazi===6){
       counterbazi2=120; 
    }
     if(counterbazi===7){
       counterbazi2=140; 
    }
     if(counterbazi===8){
       counterbazi2=160; 
    }
     if(counterbazi===9){
       counterbazi2=170; 
    }
    let moveing3=`translateY(${counterbazi3}px)`;
    let moveing2=`translateX(${counterbazi2}px)`;

   
    
     if(counterbazi===-7 && counterbazi4===9){
    
    alert("Good job,, you compelet this level :)")
}
        
    
    
    console.log(counterbazi4);
    
   

    player1.style.transform=moveing3+moveing2;
})
dokmedown.addEventListener("click",function(){
     counterbazi4++;
    
    if(counterbazi4===1){
       counterbazi3=20; 
    }
    if(counterbazi4===2){
       counterbazi3=40; 
    }
    if(counterbazi4===3){
       counterbazi3=60; 
    }
    if(counterbazi4===4){
       counterbazi3=80; 
    }
    if(counterbazi4===5){
       counterbazi3=100; 
    }
     if(counterbazi4===6){
       counterbazi3=120; 
    }
     if(counterbazi4===7){
       counterbazi3=140; 
    }
     if(counterbazi4===8){
       counterbazi3=160; 
    }
     if(counterbazi4===9){
       counterbazi3=170; 
    }
     if(counterbazi4===-1){
       counterbazi3=-20; 
    }
    if(counterbazi4===-2){
       counterbazi3=-40; 
    }
    if(counterbazi4===-3){
       counterbazi3=-60; 
    }
    if(counterbazi4===-4){
       counterbazi3=-80; 
    }
    if(counterbazi4===-5){
       counterbazi3=-100; 
    }
     if(counterbazi4===-6){
       counterbazi3=-120; 
    }
     if(counterbazi4===-7){
       counterbazi3=-140; 
    }
     if(counterbazi4===-8){
       counterbazi3=-160; 
    }
     if(counterbazi4===-9){
       counterbazi3=-170; 
    }
     if(counterbazi===-1){
       counterbazi2=-20; 
    }
    if(counterbazi===-2){
       counterbazi2=-40; 
    }
    if(counterbazi===-3){
       counterbazi2=-60; 
    }
    if(counterbazi===-4){
       counterbazi2=-80; 
    }
    if(counterbazi===-5){
       counterbazi2=-100; 
    }
     if(counterbazi===-6){
       counterbazi2=-120; 
    }
     if(counterbazi===-7){
       counterbazi2=-140; 
    }
     if(counterbazi===-8){
       counterbazi2=-160; 
    }
     if(counterbazi===-9){
       counterbazi2=-170; 
    }
     if(counterbazi===1){
       counterbazi2=20; 
    }
    if(counterbazi===2){
       counterbazi2=40; 
    }
    if(counterbazi===3){
       counterbazi2=60; 
    }
    if(counterbazi===4){
       counterbazi2=80; 
    }
    if(counterbazi===5){
       counterbazi2=100; 
    }
     if(counterbazi===6){
       counterbazi2=120; 
    }
     if(counterbazi===7){
       counterbazi2=140; 
    }
     if(counterbazi===8){
       counterbazi2=160; 
    }
     if(counterbazi===9){
       counterbazi2=170; 
    }
    
    
    
    let moveing4=`translateY(${counterbazi3}px)`;
    let moveing2=`translateX(${counterbazi2}px)`;
    

   
    
    
        
    
   console.log("conterbazi="+counterbazi);
    console.log(counterbazi4);
    if(counterbazi===-7 && counterbazi4===9){
    
    alert("Good job,, you compelet this level :)")
   
}
    
   

    player1.style.transform=moveing4+moveing2;
})
bute1.addEventListener("click",function(){
    
    let sonyom33234=bazi.classList.contains("anime50");
    if(sonyom33234){
       
        bazi.classList.remove("anime50");
    }else{
        
        bazi.classList.add("anime50");
       
        div.classList.remove("anime");
    }
    return;

})
baziclose.addEventListener("click",function(){
    let sonyom33234=bazi.classList.contains("anime50");
    if(sonyom33234){
       
        bazi.classList.remove("anime50");
    }else{
        
        bazi.classList.add("anime50");
       
        div.classList.remove("anime");
    }
    return;
})
btnqaa2.addEventListener("click",function(){
    
    let mano4323=btnqaa2.classList.contains("anime893");
    if(mano4323){
        btnqaa2.classList.remove("anime893");
        bazi.style.background="#F4D35E"
    }else{
      btnqaa2.classList.add("anime893");
       bazi.style.background="#FD1061";
    }
    return;
})
//chess project-------------------------------------------------------------------------->//


const chess=document.querySelector(".chess");
const closechess=document.getElementById("chess-close1");
const zamin1=document.querySelector(".chess-body1");
const zamin2=document.querySelector(".chess-body2");
const zamin3=document.querySelector(".chess-body3");
const zamin4=document.querySelector(".chess-body4");
const zamin5=document.querySelector(".chess-body5");
const zamin6=document.querySelector(".chess-body6");
const zamin7=document.querySelector(".chess-body7");
const zamin8=document.querySelector(".chess-body8");
const zamin9=document.querySelector(".chess-body9");

const horse=document.getElementById("horse");
const rokh=document.getElementById("rokh");
let counterma=0;
let counterma2=0;
let counterme=0;

horse.addEventListener("click",function(){
    counterma=1;

    zamin1.style.background="lightblue"
    zamin3.style.background="lightblue"
console.log(counterma);
console.log(counterme);
if(counterme===1){
    zamin6.style.background="lightblue"
    zamin1.style.background="white"
    zamin3.style.background="white"
    zamin8.style.background="lightblue"
}
if(counterme===2){
    zamin4.style.background="lightblue"
    zamin1.style.background="white"
    zamin3.style.background="white"
    zamin8.style.background="lightblue"
}
if(counterme===3){
    zamin1.style.background="lightblue"
    zamin3.style.background="white"
    zamin7.style.background="lightblue"
}
if(counterme===4){
    zamin3.style.background="lightblue"
    zamin1.style.background="white"
    zamin7.style.background="white"
    zamin9.style.background="lightblue"
}
if(counterme===5){
    zamin2.style.background="lightblue"
    zamin1.style.background="white"
    zamin7.style.background="white"
    zamin3.style.background="white"
    zamin6.style.background="lightblue"

}
if(counterme===6){
    zamin2.style.background="lightblue"
    zamin1.style.background="white"
    zamin7.style.background="white"
    zamin3.style.background="white"
    zamin4.style.background="lightblue"

}
if(counterme===7){
    zamin9.style.background="lightblue"
    zamin1.style.background="white"
    zamin7.style.background="white"
    zamin3.style.background="white"
    zamin7.style.background="lightblue"

}
    
})
zamin1.addEventListener("click",function(){
    counterme=1
    if(counterma===1){
        horse.style.transform="translateX(-80px) translateY(-160px)"
         counterma=0;
        zamin1.style.background="white"
        zamin3.style.background="white"
        zamin7.style.background="white"
    }
    console.log(counterma);
console.log(counterme);
 
})
zamin3.addEventListener("click",function(){
   counterme=2
    if(counterma===1){
        horse.style.transform="translateX(80px) translateY(-160px)"
        counterma=0;
        zamin1.style.background="white"
        zamin3.style.background="white"
        zamin9.style.background="white"
    }
    console.log(counterma);
console.log(counterme);
})

zamin6.addEventListener("click",function(){
     if(counterma===1 && counterme===1 || counterme===5 ){
        horse.style.transform="translateX(80px) translateY(-80px)"
        counterma=0;
        zamin6.style.background="#282B28"
        zamin8.style.background="#282B28"
        zamin2.style.background="#282B28"
        counterme=3
    }
    
    console.log(counterma);
console.log(counterme);
 
})
zamin8.addEventListener("click",function(){
    
   
    if(counterma===1 && counterme===1 || counterme===2){
        horse.style.transform="translateX(0px) translateY(0px)"
        
        zamin6.style.background="#282B28"
        zamin8.style.background="#282B28"
        zamin4.style.background="#282B28"
        counterme=0;
        
        counterma=0;
        
    }
    console.log(counterme);
    console.log(counterma);
})
zamin4.addEventListener("click",function(){
     if(counterma===1 &&  counterme===2 || counterme===6){
        horse.style.transform="translateX(-80px) translateY(-80px)"
        counterma+=-1;
        zamin4.style.background="#282B28"
        zamin8.style.background="#282B28"
        zamin2.style.background="#282B28"
        counterme=4;
    }
    console.log(counterma);
console.log(counterme);
 
})
zamin7.addEventListener("click",function(){
     if(counterma===1 && counterme===3 || counterme===7){
        horse.style.transform="translateX(-80px) translateY(0px)"
        counterma=0;
        zamin6.style.background="#282B28"
        zamin8.style.background="#282B28"
        zamin1.style.background="white"
        zamin7.style.background="white"
        zamin9.style.background="white"
        
        counterme=5
    }
    
    console.log(counterma);
console.log(counterme);
 
})
zamin9.addEventListener("click",function(){
     if(counterma===1 && counterme===4 || counterme===7 ){
        horse.style.transform="translateX(80px) translateY(0px)"
        counterma=0;
        zamin6.style.background="#282B28"
        zamin8.style.background="#282B28"
        zamin3.style.background="white"
        zamin7.style.background="white"
        zamin9.style.background="white"
        
        counterme=6
    }
    
    console.log(counterma);
console.log(counterme);
 
})
zamin2.addEventListener("click",function(){
     if(counterma===1 && counterme===5 || counterme===6 ){
        horse.style.transform="translateX(0px) translateY(-160px)"
        counterma=0;
        zamin6.style.background="#282B28"
        zamin8.style.background="#282B28"
        zamin2.style.background="#282B28"
        zamin4.style.background="#282B28"
        zamin3.style.background="white"
        zamin1.style.background="white"
        zamin9.style.background="white"
        horse.style.zIndex="1"

        
        counterme=7
    }
    if(counterme===7 && counterma===0){
        alert("You Beat Rokh---YOU WON!:)")
    }
    console.log(counterma);
console.log(counterme);
 
})
bute1.addEventListener("click",function(){
    
    let sonyom332341=chess.classList.contains("anime-chess");
    if(sonyom332341){
       
        chess.classList.remove("anime-chess");
    }else{
        
        chess.classList.add("anime-chess");
       
        div.classList.remove("anime");
    }
    return;

})
closechess.addEventListener("click",function(){
    
    let sonyom332341=chess.classList.contains("anime-chess");
    if(sonyom332341){
       
        chess.classList.remove("anime-chess");
    }else{
        
        chess.classList.add("anime-chess");
       
        div.classList.remove("anime");
    }
    return;

})



















