var p=document.querySelector('.time');
// console.log(p);
var h=document.querySelector('.hour');
var m = document.querySelector('.minute');
var s = document.querySelector('.second');
window.setInterval(function (){
    d = new Date();
    clock(d.getHours(),d.getMinutes(),d.getSeconds());
    var h = d.getHours().toString();
    h = ((h.length < 2) ? '0' : '' )+ h;
    var m = d.getMinutes().toString();
    m = ((m.length < 2) ? '0' : '') + m;

    var s = d.getSeconds().toString();
    s = ((s.length < 2) ? '0' : '') + s;
    p.innerHTML = h+ ':' +m  + ":" + s ;
},1000);

clock = (ht,mt,st) =>{
    ht=ht%12;
    mt=mt%60;
    st=st%60;

    let sd = st*6; //parseInt
    // console.log("st "+ st +"sd"+sd);
    let md=mt*6 + st*0.1;
    let hd=30*ht +(md/12);
    hd-=90;
    md-=90;
    sd-=90;
    h.style.transform = `rotate(${hd}deg)`;
    m.style.transform = `rotate(${md}deg)`;
    s.style.transform = `rotate(${sd}deg)`;

}