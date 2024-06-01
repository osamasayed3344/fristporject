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
    buttons[0].innerHTML="<i class='fa-solid fa-heart' style='background-color: rgb(82, 48, 48); color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-basket-shopping' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-magnifying-glass' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i>";
}

buttonsitem[0].onmouseout=function(){
    buttons[0].innerHTML="";
}
buttonsitem[1].onmouseover=function(){
    buttons[1].innerHTML="<i class='fa-solid fa-heart' style='background-color: rgb(82, 48, 48); color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-basket-shopping' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-magnifying-glass' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i>";
}

buttonsitem[1].onmouseout=function(){
    buttons[1].innerHTML="";
}
buttonsitem[2].onmouseover=function(){
    buttons[2].innerHTML="<i class='fa-solid fa-heart' style='background-color: rgb(82, 48, 48); color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-basket-shopping' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-magnifying-glass' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i>";
}

buttonsitem[2].onmouseout=function(){
    buttons[2].innerHTML="";
}
buttonsitem[3].onmouseover=function(){
    buttons[3].innerHTML="<i class='fa-solid fa-heart' style='background-color: rgb(82, 48, 48); color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-basket-shopping' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i><i class='fa-solid fa-magnifying-glass' style='background-color: rgb(82, 48, 48);color: white;padding: 10px;margin-right: 10px;'></i>";
}

buttonsitem[3].onmouseout=function(){
    buttons[3].innerHTML="";
}


console.log(buttonsitem);
