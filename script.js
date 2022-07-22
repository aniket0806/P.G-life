var a=document.querySelector('#anim1');
 var b=document.querySelector('#anim2');
 var c=document.querySelector('#anim3');
 a.addEventListener("click",function() {
    a.style.left="-100%";
     b.style.left="0%";
 })
 b.addEventListener("click",function() {
    c.style.left="0%";
     b.style.left="-200%";
 })
 c.addEventListener("click",function() {
    a.style.left="0%";
     c.style.left="-100%";
 })