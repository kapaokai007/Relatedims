function send_data(){
let a = document.getElementById("diff-level");
let b = document.getElementById("help-level");
console.log(a.value);
console.log(b.value);
takes = [a.value,b.value];
localStorage.setItem("takes",JSON.stringify(takes));
Location.href="puzzle-size.html";
}