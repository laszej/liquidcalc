const result = document.getElementById("result")
const button = document.getElementById("button")
const reset = document.getElementById("reset")

function digits(){
const baza1 = document.getElementById("baza1")
const baza2 = document.getElementById("baza2")
const moc1 = document.getElementById("moc1")
const moc2 = document.getElementById("moc2")  

const regEx =  /[^0-9]*$/gm
baza1.value = baza1.value.replace(regEx, "")
baza2.value = baza2.value.replace(regEx, "")
moc1.value = moc1.value.replace(regEx, "")
moc2.value = moc2.value.replace(regEx, "")
}

button.addEventListener("click", ()=>
{const baza1 = parseFloat(document.getElementById("baza1").value)
const baza2 = parseFloat(document.getElementById("baza2").value)
const moc1 = parseFloat(document.getElementById("moc1").value)
const moc2 = parseFloat(document.getElementById("moc2").value)

const suma = baza1 + baza2;
console.log(suma)
const power = ((baza1*moc1) + (baza2*moc2)) / (baza1 + baza2)
console.log(power)
result.innerHTML = `Otrzymasz ${suma} ml liquidu o mocy ${power}mg/ml`})

reset.addEventListener("click", ()=>{location.reload()})

// 
// /[^0-9]*$/gm


