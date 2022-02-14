let main = document.querySelectorAll("#main")[0].innerHTML;



let div2 = document.getElementsByClassName("div2")[0];
let div3 = document.getElementsByClassName("div3")[0];
let div4 = document.getElementsByClassName("div4")[0];
let div5 = document.getElementsByClassName("div5")[0];
let div6 = document.getElementsByClassName("div6")[0];
let div7 = document.getElementsByClassName("div7")[0];
let div8 = document.getElementsByClassName("div8")[0];
let div9 = document.getElementsByClassName("div9")[0];

let div2_in = document.querySelectorAll(".div2_in");
let div3_in = document.querySelectorAll(".div3_in");
let div4_in = document.querySelectorAll(".div4_in");
let div5_in = document.querySelectorAll(".div5_in");
let div6_in = document.querySelectorAll(".div6_in");
let div7_in = document.querySelectorAll(".div7_in");
let div8_in = document.querySelectorAll(".div8_in");
let div9_in = document.querySelectorAll(".div9_in");

let reset_button = document.getElementById("reset");

reset_button.addEventListener("click", () => {
    window.location.reload(true)
})


function display2() {
    div2.style.display = "flex";
}
function display3() {
    div3.style.display = "flex";
}
function display4() {
    div4.style.display = "flex";
}
function display5() {
    div5.style.display = "flex";
}
function display6() {
    div6.style.display = "flex";
}
function display7() {
    div7.style.display = "flex";
}
function display8() {
    div8.style.display = "flex";
}
function display9() {
    div9.style.display = "flex";
}

  // function display() {
        //     div2.style.display = "flex";
        //     div3.style.display = "flex";
        //     div4.style.display = "flex";
        //     div5.style.display = "flex";
        //     div6.style.display = "flex";
        //     div7.style.display = "flex";
        //     div8.style.display = "flex";
        //     div9.style.display = "flex";
        // }

        // setTimeout(display, 2000);



// console.log(div2_in);

let input_number = document.getElementById("input_number");

input_number.focus();

let input_button = document.getElementById("input_button");



function random_number() {
    return Math.round((Math.random() * 98)) + 1;
}

// console.log(random_number());


    window.addEventListener("load", () => {

   
    const myInterval = setInterval(setColor, 1000);

    function setColor() {
      
        input_button.style.backgroundColor = input_button.style.backgroundColor == "rgb(255, 255, 158)" ? "rgb(107, 107, 255)" : "rgb(255, 255, 158)";

        input_button.style.color = input_button.style.color == "rgb(107, 107, 255)" ? "rgb(255, 255, 158)" : "rgb(107, 107, 255)";

        input_button.style.border = input_button.style.border == "2px solid rgb(107, 107, 255)" ? "2px solid rgb(255, 255, 158)" : "2px solid rgb(107, 107, 255)";
    }
    
    function stopColor() {
      clearInterval(myInterval);
    }
    
})



input_button.addEventListener("click", () => {

    let numbers1_array = [];
    // let counter = 0;

    if (input_number.value == 1) {
        div2.style.display = "flex";
    }

    for (i of div2_in) {
        let output_random = random_number();

        if (numbers1_array.includes(output_random)) {
            let output_random = random_number();
            numbers1_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers1_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }



    if (input_number.value == 2) {
        setTimeout(display2, 500)
        setTimeout(display3, 1000)
    }
    let numbers2_array = [];

    for (i of div3_in) {
        output_random = random_number();

        if (numbers2_array.includes(output_random)) {
            output_random = random_number();
            // numbers1_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers2_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }



    if (input_number.value == 3) {
        setTimeout(display2, 500)
        setTimeout(display3, 1000)
        setTimeout(display4, 1500)
    }
    let numbers3_array = [];

    for (i of div4_in) {
        output_random = random_number();

        if (numbers3_array.includes(output_random)) {
            output_random = random_number();
            numbers3_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers3_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }



    if (input_number.value == 4) {
        setTimeout(display2, 500)
        setTimeout(display3, 1000)
        setTimeout(display4, 1500)
        setTimeout(display5, 2000)
    }
    let numbers4_array = [];

    for (i of div5_in) {
        output_random = random_number();

        if (numbers4_array.includes(output_random)) {
            output_random = random_number();
            numbers4_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers4_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }


    if (input_number.value == 5) {
        setTimeout(display2, 500)
        setTimeout(display3, 1000)
        setTimeout(display4, 1500)
        setTimeout(display5, 2000)
        setTimeout(display6, 2500)
    }
    let numbers5_array = [];

    for (i of div6_in) {
        output_random = random_number();

        if (numbers5_array.includes(output_random)) {
            output_random = random_number();
            numbers5_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers5_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }


    if (input_number.value == 6) {
        setTimeout(display2, 500)
        setTimeout(display3, 1000)
        setTimeout(display4, 1500)
        setTimeout(display5, 2000)
        setTimeout(display6, 2500)
        setTimeout(display7, 3000)
    }
    let numbers6_array = [];

    for (i of div7_in) {
        output_random = random_number();

        if (numbers6_array.includes(output_random)) {
            output_random = random_number();
            numbers6_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers6_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }

   



    if (input_number.value == 7) {
        setTimeout(display2, 500)
        setTimeout(display3, 1000)
        setTimeout(display4, 1500)
        setTimeout(display5, 2000)
        setTimeout(display6, 2500)
        setTimeout(display7, 3000)
        setTimeout(display8, 3500)
    }
    let numbers7_array = [];

    for (i of div8_in) {
        output_random = random_number();

        if (numbers7_array.includes(output_random)) {
            output_random = random_number();
            numbers7_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers7_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }



    if (input_number.value == 8) {

        setTimeout(display2, 500)
        setTimeout(display3, 1000)
        setTimeout(display4, 1500)
        setTimeout(display5, 2000)
        setTimeout(display6, 2500)
        setTimeout(display7, 3000)
        setTimeout(display8, 3500)
        setTimeout(display9, 4000)

    }
    let numbers8_array = [];

    for (i of div9_in) {
        output_random = random_number();

        if (numbers8_array.includes(output_random)) {
            output_random = random_number();
            numbers8_array.push(output_random);
            i.innerHTML = output_random;
        } else {
            numbers8_array.push(output_random);
            i.innerHTML = output_random;
        }  
    }


})


