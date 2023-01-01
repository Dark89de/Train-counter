let pocetenBroj = 0
let broj = document.getElementById("broj-p")
let zacuvanBroj = document.getElementById("zacuvan")

function broenje() {
    pocetenBroj += 1
    broj.textContent = pocetenBroj
}

function zacuvaj() {
    let sobiranje = pocetenBroj + " + "
    zacuvanBroj.textContent += sobiranje
    broj.textContent = 0
    pocetenBroj = 0
}