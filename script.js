const nextbtn=document.getElementById("next");
const prevbtn=document.getElementById("prev");
const sliderimg=document.querySelectorAll(".slider img");
const buttonsitem=document.querySelectorAll(".section2 .list_items .item > img");
const buttons=document.querySelectorAll(".section2 .list_items .item .buttons");
let index=1;
if(index==sliderimg.length){
    nextbtn.disabled=true; 
}
if(index==1){
    prevbtn.disabled=true;
}
nextbtn.onclick=function(){
    if(index<sliderimg.length){
        prevbtn.disabled=false; 
        sliderimg[0].style.transition="all 1s";
        sliderimg[0].style.marginLeft=index*-100+"%";
        index++;
    }else{
        nextbtn.disabled=true;
    }
}
prevbtn.onclick=function(){
    if(index>1){
        nextbtn.disabled=false;
        sliderimg[0].style.transition="all 1s";
        sliderimg[0].style.marginLeft=parseInt(sliderimg[0].style.marginLeft)+100;
        index--;
    }else{
        prevbtn.disabled=true;
    }
}

//--------------------------------------------------------
buttonsitem[0].onmouseover=function(){
    buttons[0].style.transition="all 0.5s";
    buttonsitem[0].src="img/product-image-1432876564_1800x1800.jpg";
    buttons[0].style.opacity="1";
}

buttonsitem[0].onmouseout=function(){
    buttons[0].style.transition="all 0.5s";
    buttonsitem[0].src="img/product-image-1432876562_1800x1800.jpg";
    buttons[0].style.opacity="0";
}
buttonsitem[1].onmouseover=function(){
    buttons[1].style.transition="all 0.5s";
    buttons[1].style.opacity="1";
}

buttonsitem[1].onmouseout=function(){
    buttons[1].style.transition="all 0.5s";
    buttons[1].style.opacity="0";
}
buttonsitem[2].onmouseover=function(){
    buttons[2].style.transition="all 0.5s";
    buttonsitem[2].src="img/product-image-1412138859_1800x1800.jpg";
    buttons[2].style.opacity="1";
}

buttonsitem[2].onmouseout=function(){
    buttons[2].style.transition="all 0.5s";
    buttonsitem[2].src="img/product-image-1412138848_1800x1800.jpg";
    buttons[2].style.opacity="0";
}
buttonsitem[3].onmouseover=function(){
    buttons[3].style.transition="all 0.5s";
    buttonsitem[3].src="img/product-image-1449495910_1800x1800.jpg";
    buttons[3].style.opacity="1";
}

buttonsitem[3].onmouseout=function(){
    buttons[3].style.transition="all 0.5s";
    buttonsitem[3].src="img/product-image-1449495905_1800x1800.webp";
    buttons[3].style.opacity="0";
}

//-----------------------------------------------------------------------------
let menubtn=document.getElementById("menubtn");
let closebtn=document.getElementById("closebtn");
let medbtn=document.querySelectorAll("header .med");
menubtn.onclick=function(){
    menubtn.style.opacity=0;
    closebtn.style.opacity=1;
    medbtn[0].style.transition="display 1s";
    medbtn[0].style.display="flex";
}
closebtn.onclick=function(){
    closebtn.style.opacity=0;
    menubtn.style.opacity=1;
    medbtn[0].style.transition="display 1s";
    medbtn[0].style.display="none";
}
