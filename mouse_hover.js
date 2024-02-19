const element2 = document.querySelector(".sequence-type");
let vid2 = document.getElementById("vid2");
element2.addEventListener('mouseover',()=>{vid2.play(); vid2.loop = true; vid2.currentTime = 1.2;})
element2.addEventListener('mouseout',()=>{vid2.pause(); vid2.currentTime = 1.2;})