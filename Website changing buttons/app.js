const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");
const part3 = document.getElementById("part3");
const part4 = document.getElementById("part4");

function hideAll() {
    part1.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "none";
    part4.style.display = "none";
}

function show1() {
    hideAll();
    part1.style.display = "flex";
}
function show2() {
    hideAll();
    part2.style.display = "flex";
}
function show3() {
    hideAll();
    part3.style.display = "flex";
}
function show4() {
    hideAll();
    part4.style.display = "flex";
}

function pythagoras() {
    const a = document.getElementById("pythagorasA").value;
    const b = document.getElementById("pythagorasB").value;

    const aSquare = a**2
    const bSquare = b**2
    const cSquare = aSquare + bSquare;
    const c = cSquare**0.5;

    document.getElementById("pythagorasA2B2").innerHTML = "a²= " + aSquare + "   b²= " + bSquare
    document.getElementById("pythagorasC2").innerHTML = "c²= " + cSquare
    document.getElementById("pythagorasC").innerHTML = "c = " + Math.round(1000*c)/1000 + "*"
}
