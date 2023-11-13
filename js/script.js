let capital = document.querySelector(".capital")
let text = document.querySelector(".text")
let upper = document.querySelector(".uppercase")
let lower = document.querySelector(".lowercase")
let copy = document.querySelector(".copy")
let clear = document.querySelector(".clear")

// uppercase
upper.addEventListener("click", function(){
    text.value = text.value.toUpperCase();
})
//lowercase

lower.addEventListener("click", function(){
    text.value = text.value.toLowerCase();
})

// copy
copy.addEventListener("click", function(){
    text.select();
    document.execCommand('copy')
    
})

// clear
clear.addEventListener("click", function(){
   text.value = ""
})


