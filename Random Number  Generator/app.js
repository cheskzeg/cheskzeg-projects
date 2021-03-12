function random(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

   

    if (a > b) {
        const random = Math.floor(Math.random() * (a - b + 1) ) + b;

        document.getElementById("outputText").innerHTML = `Your random number from ${b} to ${a} is:`;
        document.getElementById("outputNumber").innerHTML = random;
    } else {
        const random = Math.floor(Math.random() * (b - a + 1) ) + a;

        document.getElementById("outputText").innerHTML = `Your random number from ${a} to ${b} is:`;
        document.getElementById("outputNumber").innerHTML = random;
    }
}