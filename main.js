const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

button.onclick = function(){
    //p.innerText = input.value;
    input.value.toLowerCase()
    let list = input.value.split("");
    list.reverse();
    let s = list.join("");

if(input.value == s) {
    p.innerText = "Палиндром"
}

else {
    p.innerText = "НЕ палиндром"
}

    console.log(s);
   
}