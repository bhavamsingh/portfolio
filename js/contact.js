let form = document.getElementById("form")
// console.log(form);
form.addEventListener("submit", (e)=>{
e.preventDefault();
console.log("form submit")
let fields1 = form.querySelectorAll("input")
// console.log(fields1)
for(let elm of fields1 ){
    console.log(elm.name+" "+elm.value)
}
let fields2 = form.querySelectorAll("select")
// console.log(fields2)
for(let elm of fields2 ){
    console.log(elm.name+" "+elm.value)
}
alert("your form has been submited")
document.getElementById("reset").click()

})
