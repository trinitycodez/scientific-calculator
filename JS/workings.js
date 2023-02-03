"use strict";
let work_class = document.querySelector(".work-class");
let result_class = document.querySelector(".result-class");
let btn_general = document.querySelectorAll(".btn");
var OPRT;
(function (OPRT) {
    OPRT["PLUS"] = "+";
    OPRT["MINUS"] = "-";
    OPRT["MULTIPLE"] = "*";
    OPRT["DIVISION"] = "/";
})(OPRT || (OPRT = {}));
// operators
const doc0 = document.querySelector(".btn_dive").textContent;
const doc1 = document.querySelector(".btn_tims").textContent;
const doc2 = document.querySelector(".btn_plus").textContent;
const doc3 = document.querySelector(".btn_mins").textContent;
const doc4 = document.querySelector(".btn_sqrt").textContent;
const doc5 = document.querySelector(".btn_dot").textContent;
const doc6 = document.querySelector(".btn_opnB").textContent;
const doc7 = document.querySelector(".btn_clsB").textContent;
const doc8 = document.querySelector(".btn_pii").textContent;
const doc9 = document.querySelector(".btn_exp").textContent;
const doc10 = document.querySelector(".btn_powr").textContent;
const doc11 = document.querySelector(".btn_fact").textContent;
const doc12 = document.querySelector(".btn_ln").textContent;
const doc13 = document.querySelector(".btn_log").textContent;
const doc14 = document.querySelector(".btn_ans").textContent;
const doc15 = document.querySelector(".btn_X2").textContent;
const doc16 = document.querySelector(".btn_X3").textContent;
const doc17 = document.querySelector(".btn_sin").textContent;
const doc18 = document.querySelector(".btn_cos").textContent;
const doc19 = document.querySelector(".btn_tan").textContent;
const doc20 = document.querySelector(".btn_prct").textContent;
// holder solve
let holderOprt = "";
let holderNum = "";
let solver = "";
function solve(value, oprt) {
    equatt(value);
    let span = "<span>";
    if (oprt && value.textContent) {
        // for operator display
        let y = document.createTextNode(`${value.textContent}`).nodeValue;
        if (y == doc0)
            y = "/";
        if (y == doc4)
            y = `${y + doc6}`;
        if (y == doc9)
            y = y + "^(";
        if ((y == doc10) || (y == doc12) || (y == doc13) || (y == doc17) || (y == doc18) || (y == doc19))
            y = y + "(";
        if (y == doc15)
            y = "<sup>2</sup>";
        if (y == doc16)
            y = "<sup>3</sup>";
        span += y + "</span>";
        holderOprt = span;
        work_class.innerHTML += holderOprt;
        console.log(holderOprt);
        return;
    }
    if (value.textContent) {
        // for number display
        let x = value.textContent;
        holderNum = x;
        work_class.innerHTML += holderNum;
        // console.log(holderNum);
    }
    else {
        work_class.innerHTML = "";
        console.log("error");
    }
}
const emptyItr = []; // -- for square root manipulation --
const pii_array = []; // -- for Pii manipulation --
const exp_array = []; // -- for exponetial power manipulation --
const power_array = []; // -- for power ^ manipulation --
const factorial_array = []; // -- for factorial ! manipulation --
const LN_array = []; // -- for Natural Logarithm manipulation --
const L10_array = []; // -- for Logarithm base 10 manipulation --
const Ans_array = []; // -- for ANSwer manipulation --
const power2_array = []; // -- for Power2 manipulation --
const sohCahToa = []; // -- for sohCahToa manipulation --
const percentage_array = []; // -- for percentage manipulation --
const factorial_pack = [];
let factorial_val = "";
const percentage_pack = [];
let percentage_val = "";
// number of Brackets func using oddEven
let i = 0;
let p = 0;
let brkt_numFormation = false;
let Mathfactorial = "";
let fact001 = "";
let fact002 = "";
function equatt(valTxt) {
    let y = document.createTextNode(`${valTxt.textContent}`).nodeValue;
    // digits
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (parseInt(y) === arr[parseInt(y)]) {
        if (solver.endsWith("Math.PI") || solver.endsWith(")")) {
            solver += "*" + y;
            brkt_numFormation = true;
            console.log(solver);
            return;
        }
        // if (solver.endsWith("!")) {
        //     solver += "*" + y;
        //     // factorial_val += "*" + y;
        //     console.log(solver, " Displyed now");
        //     return;
        // }
        solver += arr[parseInt(y)];
        console.log(solver);
        return;
    }
    if (y == "!") {
        factorial_array.push("*");
    }
    // number of Brackets func
    function oddEven() { i = i + 1; }
    function evenOdd() { p = p + 1; }
    // operators
    const arr2 = [doc0, doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12, doc13, doc14, doc15, doc16, doc17, doc18, doc19, doc20];
    switch (y) {
        case arr2[0]:
            solver += OPRT.DIVISION;
            power_array.push(OPRT.DIVISION);
            factorial_array.push(OPRT.DIVISION);
            power2_array.push(OPRT.DIVISION);
            percentage_array.push(OPRT.DIVISION);
            break;
        case arr2[1]:
            solver += OPRT.MULTIPLE;
            power_array.push(OPRT.MULTIPLE);
            factorial_array.push(OPRT.MULTIPLE);
            power2_array.push(OPRT.MULTIPLE);
            percentage_array.push(OPRT.MULTIPLE);
            break;
        case arr2[2]:
            solver += OPRT.PLUS;
            power_array.push(OPRT.PLUS);
            factorial_array.push(OPRT.PLUS);
            power2_array.push(OPRT.PLUS);
            percentage_array.push(OPRT.PLUS);
            break;
        case arr2[3]:
            solver += OPRT.MINUS;
            power_array.push(OPRT.MINUS);
            factorial_array.push(OPRT.MINUS);
            power2_array.push(OPRT.MINUS);
            percentage_array.push(OPRT.MINUS);
            break;
        case arr2[4]:
            //doc4 square root
            fact001 += "Math.sqrt("; //...factorial
            fact002 += "Math.sqrt("; //...percentage
            if (!solver.valueOf()) {
                solver = "Math.sqrt(";
                emptyItr.push("M");
                break;
            }
            if (solver.endsWith(OPRT.PLUS)) {
                solver += "Math.sqrt(";
                emptyItr.push("M");
            }
            else if (solver.endsWith(OPRT.MINUS)) {
                solver += "Math.sqrt(";
                emptyItr.push("M");
            }
            else if (solver.endsWith(OPRT.MULTIPLE)) {
                solver += "Math.sqrt(";
                emptyItr.push("M");
            }
            else if (solver.endsWith(OPRT.DIVISION)) {
                solver += "Math.sqrt(";
                emptyItr.push("M");
            }
            else if (solver.endsWith("(")) {
                solver += "Math.sqrt(";
                emptyItr.push("M");
            }
            else {
                solver += "*Math.sqrt(";
                emptyItr.push("*");
            }
            break;
        case arr2[5]:
            //doc5 dots
            solver += ".";
            break;
        case arr2[6]:
            //doc6 open bracket
            oddEven();
            if (!solver.valueOf()) {
                solver = "(";
                break;
            }
            if (solver.endsWith("0") || solver.endsWith("1") || solver.endsWith("2") || solver.endsWith("3") || solver.endsWith("4") || solver.endsWith("5") || solver.endsWith("6") || solver.endsWith("7") || solver.endsWith("8") || solver.endsWith("9") || solver.endsWith("Math.PI")) {
                solver += ("*" + doc6);
            }
            else if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith(OPRT.DIVISION)) {
                solver += doc6;
            }
            else if (solver.endsWith("(")) {
                solver += doc6; //formally '('
            }
            else {
                solver += doc6;
            }
            break;
        case arr2[7]:
            //doc7 close bracket
            solver += doc7;
            evenOdd();
            break;
        case arr2[8]:
            //doc8 Pii
            if (!solver.valueOf()) {
                solver = "Math.PI";
                pii_array.push("codeNum");
                break;
            }
            if (solver.endsWith(OPRT.PLUS)) {
                solver += "Math.PI";
                pii_array.push("codeNum");
            }
            else if (solver.endsWith(OPRT.MINUS)) {
                solver += "Math.PI";
                pii_array.push("codeNum");
            }
            else if (solver.endsWith(OPRT.MULTIPLE)) {
                solver += "Math.PI";
                pii_array.push("codeNum");
            }
            else if (solver.endsWith(OPRT.DIVISION)) {
                solver += "Math.PI";
                pii_array.push("codeNum");
            }
            else if (solver.endsWith("(")) {
                solver += "Math.PI";
                pii_array.push("codeNum");
            }
            else {
                solver += "*Math.PI";
                pii_array.push("*codeNum");
            }
            break;
        case arr2[9]:
            //docs 9 exponetial e
            if (!solver.valueOf()) {
                solver = "Math.exp(";
                exp_array.push("M");
                break;
            }
            if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith(OPRT.DIVISION) || solver.endsWith("(")) {
                solver += "Math.exp(";
                exp_array.push("M");
            }
            else {
                solver += "*Math.exp(";
                exp_array.push("*");
            }
            break;
        case arr2[10]:
            //docs 10 power of ^
            Mathfactorial += "Math.pow(";
            if (!solver.valueOf()) {
                solver = "Math.pow(,";
                break;
            }
            if ((solver.includes("(") && solver.includes(")")) && solver.endsWith(")")) {
                solver += doc10;
                console.log(i + " =i, p= " + p);
                let pwr = solver.lastIndexOf("^");
                let opb = solver.lastIndexOf("Math.pow(", pwr);
                {
                    // if (i == p) {
                    //     opb = solver.lastIndexOf("Math.pow(", pwr);
                    // } else 
                }
                if (i > p || i == p) {
                    let hold = solver.lastIndexOf("(", pwr);
                    let hel1 = solver.lastIndexOf(")", pwr);
                    let hel2 = solver.indexOf(")", hold);
                    console.log(hel1 + " " + hel2);
                    opb = solver.lastIndexOf("(".repeat((hel1 - hel2) + 1), pwr);
                    if (hel1 - hel2 == 0) {
                        opb = solver.lastIndexOf("(".repeat(1), pwr);
                    }
                    console.log(opb + " this is Open and Close brackets counting...");
                }
                let subStr = solver.substring(opb, pwr);
                console.log(subStr + " sub");
                solver = solver.substring(0, opb);
                if (solver.endsWith("Math.pow")) {
                    solver += `(Math.pow${subStr},`;
                    console.log("falsify");
                    break;
                } // (Math.pow(2,3)...
                solver += `Math.pow(${subStr},`;
                console.log(solver + " solver content");
                return;
            }
            else if (solver.endsWith("0") || solver.endsWith("1") || solver.endsWith("2") || solver.endsWith("3") || solver.endsWith("4") || solver.endsWith("5") || solver.endsWith("6") || solver.endsWith("7") || solver.endsWith("8") || solver.endsWith("9")) {
                solver += doc10;
                let pwr = solver.lastIndexOf("^");
                if (solver.lastIndexOf(OPRT.PLUS) && (power_array[power_array.length - 1] == OPRT.PLUS)) {
                    let num = solver.lastIndexOf("+", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1); // plus 1 to include the + operator && must do to elucidate the former input in the solver
                    solver += `Math.pow(${subStr},`;
                }
                else if (solver.lastIndexOf(OPRT.MINUS) && (power_array[power_array.length - 1] == OPRT.MINUS)) {
                    let num = solver.lastIndexOf("-", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},`;
                }
                else if (solver.lastIndexOf(OPRT.DIVISION) && (power_array[power_array.length - 1] == OPRT.DIVISION)) {
                    let num = solver.lastIndexOf("/", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},`;
                }
                else if (solver.lastIndexOf(OPRT.MULTIPLE) && (power_array[power_array.length - 1] == OPRT.MULTIPLE)) {
                    let num = solver.lastIndexOf("*", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},`;
                }
                else if (!solver.includes("(")) {
                    let subStr = solver.substring(0, pwr); // this is for number value...
                    solver = `Math.pow(${subStr},`;
                    console.log("what is this");
                }
                else {
                    let opb = solver.lastIndexOf("(", pwr);
                    let subStr = solver.substring(opb + 1, pwr);
                    solver = solver.substring(0, opb + 1);
                    solver += `Math.pow(${subStr},`;
                    console.log(subStr + " testing something");
                }
            }
            else if (solver.endsWith("Math.PI") || solver.endsWith("Ans")) {
                solver += doc10;
                let pwr = solver.lastIndexOf("^");
                if (solver.endsWith("Ans^")) {
                    let hold1 = solver.lastIndexOf("Ans", pwr);
                    let subStr = solver.substring(hold1, pwr);
                    solver = solver.substring(0, hold1);
                    solver += `Math.pow(${subStr},`;
                    break;
                }
                let hold1 = solver.lastIndexOf("Math.PI", pwr);
                let subStr = solver.substring(hold1, pwr);
                solver = solver.substring(0, hold1);
                solver += `Math.pow(${subStr},`;
            }
            else {
                solver += "Math.pow(,";
                console.log("Gosh!!!");
            }
            break;
        case arr2[11]:
            // docs 11 factorial !
            function fact(num) {
                let val = 1;
                for (let i = num; i >= 0; i--) {
                    if (i == 0 || i == 1) {
                        return (val *= 1);
                    }
                    val = val * i;
                }
            }
            if (!solver.valueOf()) {
                solver = "!";
                factorial_pack.push("");
                break;
            }
            if ((solver.includes("(") && solver.includes(")")) && solver.endsWith(")")) {
                solver += doc11;
                let fac = solver.lastIndexOf("!");
                let opb = solver.lastIndexOf(fact001, fac); // close brckt numbers
                if (i > p || i == p) {
                    let hold = solver.lastIndexOf("(", fac);
                    let hel1 = solver.lastIndexOf(")", fac);
                    let hel2 = solver.indexOf(")", hold);
                    console.log(hel1 + " " + hel2);
                    opb = solver.lastIndexOf("(".repeat((hel1 - hel2) + 1), fac);
                    // console.log("OPB1and2OPB");
                    if ((hel1 - hel2) == 0) {
                        opb = solver.lastIndexOf("(".repeat(1), fac);
                        console.log(opb + " hel1and2");
                    }
                    let subStr = solver.substring(opb, fac);
                    console.log(subStr + " inside");
                    solver = solver.substring(0, opb);
                    factorial_pack.push(solver + subStr);
                    let hold1 = fact(eval(subStr));
                    console.log(subStr + "subtr");
                    console.log(factorial_pack);
                    if (solver.endsWith("Math.sqrt")) {
                        solver += `(${hold1})`;
                        console.log(solver + " falsify");
                        return;
                    } // for math sqrt
                    solver += `${hold1}`;
                    console.log(solver + " go!");
                    return;
                }
                let subStr = solver.substring(opb, fac);
                if (!fact001.valueOf() || opb < 0) {
                    opb = solver.lastIndexOf("Math.sqrt("); //MathFactorial in Math.pow
                    subStr = solver.substring(opb, fac);
                }
                solver = solver.substring(0, opb);
                factorial_pack.push(solver + subStr);
                let hold;
                try {
                    hold = fact(eval(subStr));
                }
                catch (error) {
                    console.error("emm " + error);
                    clearWork();
                    setTimeout(() => { work_class.innerHTML = ""; }, 1);
                    return;
                }
                console.log(factorial_pack);
                if (solver.endsWith("Math.sqrt")) {
                    solver += `(${hold})`;
                    console.log(solver + " falsify");
                    return;
                } // for math sqrt
                solver += `${hold}`;
                console.log(solver + " go!");
                fact001 = ""; // variable
            }
            else if (solver.endsWith("0") || solver.endsWith("1") || solver.endsWith("2") || solver.endsWith("3") || solver.endsWith("4") || solver.endsWith("5") || solver.endsWith("6") || solver.endsWith("7") || solver.endsWith("8") || solver.endsWith("9")) {
                solver += "!";
                console.log("entered ! exclaimation: ", solver);
                factorial_val = doc11;
                let fac = solver.lastIndexOf("!");
                if (solver.lastIndexOf(OPRT.PLUS) && (factorial_array[factorial_array.length - 1] == OPRT.PLUS)) {
                    let valNum = solver.lastIndexOf("+", fac);
                    let subStr = solver.substring(valNum + 1, fac);
                    solver = solver.substring(0, valNum + 1); // plus 1 to include the + operator && must do to elucidate the former input in the solver
                    factorial_pack.push(solver + subStr);
                    let hold = fact(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (solver.lastIndexOf(OPRT.MINUS) && (factorial_array[factorial_array.length - 1] == OPRT.MINUS)) {
                    let valNum = solver.lastIndexOf("-", fac);
                    let subStr = solver.substring(valNum + 1, fac);
                    solver = solver.substring(0, valNum + 1);
                    factorial_pack.push(solver + subStr);
                    let hold = fact(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (solver.lastIndexOf(OPRT.DIVISION) && (factorial_array[factorial_array.length - 1] == OPRT.DIVISION)) {
                    let valNum = solver.lastIndexOf("/", fac);
                    let subStr = solver.substring(valNum + 1, fac);
                    solver = solver.substring(0, valNum + 1);
                    factorial_pack.push(solver + subStr);
                    let hold = fact(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (solver.lastIndexOf(OPRT.MULTIPLE) && (factorial_array[factorial_array.length - 1] == OPRT.MULTIPLE)) {
                    let valNum = solver.lastIndexOf("*", fac);
                    let subStr = solver.substring(valNum + 1, fac);
                    solver = solver.substring(0, valNum + 1);
                    factorial_pack.push(solver + subStr);
                    let hold = fact(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (!solver.includes("(")) {
                    // } else if (solver.endsWith("!")) {
                    let subStr = solver.substring(0, fac); // this is for number value...
                    let hold = fact(eval(subStr));
                    solver = `${hold}`;
                    factorial_pack.push(subStr);
                    console.log(factorial_pack);
                    console.log("what is this!!!");
                }
                else {
                    let opb = solver.lastIndexOf("(", fac);
                    let subStr = solver.substring(opb + 1, fac);
                    solver = solver.substring(0, opb + 1);
                    factorial_pack.push(solver + subStr);
                    let hold = fact(eval(subStr));
                    solver += `${hold}`;
                }
            }
            else if (solver.endsWith("Ans")) {
                solver += doc11;
                let fac = solver.lastIndexOf("!");
                let winDox = window.localStorage.getItem("ans");
                let hold1 = solver.lastIndexOf("Ans", fac);
                let subStr = solver.substring(hold1, fac);
                solver = solver.substring(0, hold1);
                factorial_pack.push(solver + subStr);
                let hold = fact(eval(subStr.replace(/Ans/gi, `${winDox}`)));
                solver += `${hold}`;
            }
            else {
                solver += "!";
                let fac = solver.lastIndexOf("!");
                factorial_pack.push(solver.substring(0, fac));
                console.log("Gosh!!!");
            }
            break;
        case arr2[12]:
            // docs 12 Natural Logarithm LN
            if (!solver.valueOf()) {
                solver = "Math.log(";
                LN_array.push("M");
                break;
            }
            if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.DIVISION) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith("(")) {
                solver += "Math.log(";
                LN_array.push("M");
            }
            else {
                solver += "*Math.log(";
                LN_array.push("*");
            }
            break;
        case arr2[13]:
            // docs 13 Logarithm base 10...
            if (!solver.valueOf()) {
                solver = "Math.log10(";
                L10_array.push("M");
                break;
            }
            if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.DIVISION) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith("(")) {
                solver += "Math.log10(";
                L10_array.push("M");
            }
            else {
                solver += "*Math.log10(";
                L10_array.push("*");
            }
            break;
        case arr2[14]:
            // docs 14 ANSwer on the result_class...
            if (!solver.valueOf()) {
                solver = "Ans";
                break;
            }
            if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.DIVISION) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith("(")) {
                solver += "Ans";
                Ans_array.push("A");
                break;
            }
            solver += "*Ans";
            Ans_array.push("*A");
            break;
        case arr2[15]:
            // docs 15 superScript 2...
            if (!solver.valueOf()) {
                solver = "Math.pow(,2)";
                break;
            }
            if ((solver.includes("(") && solver.includes(")")) && solver.endsWith(")")) {
                solver += "2";
                let pwr = solver.lastIndexOf("2");
                let opb = solver.lastIndexOf("Math.pow(", pwr);
                if (i > p || i == p) {
                    let hold = solver.lastIndexOf("(", pwr);
                    let hel1 = solver.lastIndexOf(")", pwr);
                    let hel2 = solver.indexOf(")", hold);
                    console.log(hel1 + " " + hel2);
                    opb = solver.lastIndexOf("(".repeat((hel1 - hel2) + 1), pwr);
                    if (hel1 - hel2 == 0) {
                        opb = solver.lastIndexOf("(".repeat(1), pwr);
                    }
                    console.log(opb + " this is Open and Close brackets counting...");
                }
                let subStr = solver.substring(opb, pwr);
                solver = solver.substring(0, opb);
                if (solver.endsWith("Math.pow")) {
                    solver += `(Math.pow${subStr},2)`;
                    console.log("falsify");
                    break;
                }
                solver += `Math.pow(${subStr},2)`;
                console.log(subStr + " substringIfy");
            }
            else if (solver.endsWith("0") || solver.endsWith("1") || solver.endsWith("2") || solver.endsWith("3") || solver.endsWith("4") || solver.endsWith("5") || solver.endsWith("6") || solver.endsWith("7") || solver.endsWith("8") || solver.endsWith("9")) {
                solver += "2";
                let pwr = solver.lastIndexOf("2");
                if (solver.lastIndexOf(OPRT.PLUS) && (power2_array[power2_array.length - 1] == OPRT.PLUS)) {
                    let num = solver.lastIndexOf("+", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1); // plus 1 to include the + operator && must do to elucidate the former input in the solver
                    solver += `Math.pow(${subStr},2)`;
                    console.log("kiki1");
                }
                else if (solver.lastIndexOf(OPRT.MINUS) && (power2_array[power2_array.length - 1] == OPRT.MINUS)) {
                    let num = solver.lastIndexOf("-", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},2)`;
                    console.log("kiki2");
                }
                else if (solver.lastIndexOf(OPRT.DIVISION) && (power2_array[power2_array.length - 1] == OPRT.DIVISION)) {
                    let num = solver.lastIndexOf("/", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},2)`;
                    console.log("kiki3");
                }
                else if (solver.lastIndexOf(OPRT.MULTIPLE) && (power2_array[power2_array.length - 1] == OPRT.MULTIPLE)) {
                    let num = solver.lastIndexOf("*", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},2)`;
                    console.log("kiki4");
                }
                else if (!solver.includes("(")) {
                    let subStr = solver.substring(0, pwr); // this is for number value...
                    solver = `Math.pow(${subStr},2)`;
                    console.log("what is this");
                }
                else {
                    let opb = solver.lastIndexOf("(", pwr);
                    let subStr = solver.substring(opb + 1, pwr);
                    solver = solver.substring(0, opb + 1);
                    solver += `Math.pow(${subStr},2)`;
                }
            }
            else if (solver.endsWith("Math.PI") || solver.endsWith("Ans")) {
                solver += "2";
                let pwr = solver.lastIndexOf("2");
                if (solver.endsWith("Ans2")) {
                    let hold1 = solver.lastIndexOf("Ans", pwr);
                    let subStr = solver.substring(hold1, pwr);
                    solver = solver.substring(0, hold1);
                    solver += `Math.pow(${subStr},2)`;
                    break;
                }
                let hold1 = solver.lastIndexOf("Math.PI", pwr);
                let subStr = solver.substring(hold1, pwr);
                solver = solver.substring(0, hold1);
                solver += `Math.pow(${subStr},2)`;
            }
            else {
                solver += "Math.pow(,2)";
                console.log("Gosh!!!");
            }
            break;
        case arr2[16]:
            // docs 16 superScript 3...
            if (!solver.valueOf()) {
                solver = "Math.pow(,3)";
                break;
            }
            if ((solver.includes("(") && solver.includes(")")) && solver.endsWith(")")) {
                solver += "3";
                let pwr = solver.lastIndexOf("3");
                let opb = solver.lastIndexOf("(", pwr);
                if (i > p || i == p) {
                    let hold = solver.lastIndexOf("(", pwr);
                    let hel1 = solver.lastIndexOf(")", pwr);
                    let hel2 = solver.indexOf(")", hold);
                    console.log(hel1 + " " + hel2);
                    opb = solver.lastIndexOf("(".repeat((hel1 - hel2) + 1), pwr);
                    if (hel1 - hel2 == 0) {
                        opb = solver.lastIndexOf("(".repeat(1), pwr);
                    }
                    console.log(opb + " this is Open and Close brackets counting...");
                }
                let subStr = solver.substring(opb, pwr);
                solver = solver.substring(0, opb);
                if (solver.endsWith("Math.pow")) {
                    solver += `(Math.pow${subStr},3)`;
                    console.log("falsify");
                    break;
                }
                solver += `Math.pow(${subStr},3)`;
                console.log(subStr + " substringIfy");
            }
            else if (solver.endsWith("0") || solver.endsWith("1") || solver.endsWith("2") || solver.endsWith("3") || solver.endsWith("4") || solver.endsWith("5") || solver.endsWith("6") || solver.endsWith("7") || solver.endsWith("8") || solver.endsWith("9")) {
                solver += "3";
                let pwr = solver.lastIndexOf("3");
                if (solver.lastIndexOf(OPRT.PLUS) && (power2_array[power2_array.length - 1] == OPRT.PLUS)) {
                    let num = solver.lastIndexOf("+", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1); // plus 1 to include the + operator && must do to elucidate the former input in the solver
                    solver += `Math.pow(${subStr},3)`;
                    console.log("Plus");
                }
                else if (solver.lastIndexOf(OPRT.MINUS) && (power2_array[power2_array.length - 1] == OPRT.MINUS)) {
                    let num = solver.lastIndexOf("-", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},3)`;
                    console.log("Minus");
                }
                else if (solver.lastIndexOf(OPRT.DIVISION) && (power2_array[power2_array.length - 1] == OPRT.DIVISION)) {
                    let num = solver.lastIndexOf("/", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},3)`;
                    console.log("Division");
                }
                else if (solver.lastIndexOf(OPRT.MULTIPLE) && (power2_array[power2_array.length - 1] == OPRT.MULTIPLE)) {
                    let num = solver.lastIndexOf("*", pwr);
                    let subStr = solver.substring(num + 1, pwr);
                    solver = solver.substring(0, num + 1);
                    solver += `Math.pow(${subStr},3)`;
                    console.log("Multiple");
                }
                else if (!solver.includes("(")) {
                    let subStr = solver.substring(0, pwr); // this is for number value...
                    solver = `Math.pow(${subStr},3)`;
                    console.log("what is this");
                }
                else {
                    let opb = solver.lastIndexOf("(", pwr);
                    let subStr = solver.substring(opb + 1, pwr);
                    solver = solver.substring(0, opb + 1);
                    solver += `Math.pow(${subStr},3)`;
                }
            }
            else if (solver.endsWith("Math.PI") || solver.endsWith("Ans")) {
                solver += "3";
                let pwr = solver.lastIndexOf("3");
                if (solver.endsWith("Ans3")) {
                    let hold1 = solver.lastIndexOf("Ans", pwr);
                    let subStr = solver.substring(hold1, pwr);
                    solver = solver.substring(0, hold1);
                    solver += `Math.pow(${subStr},3)`;
                    break;
                }
                let hold1 = solver.lastIndexOf("Math.PI", pwr);
                let subStr = solver.substring(hold1, pwr);
                solver = solver.substring(0, hold1);
                solver += `Math.pow(${subStr},3)`;
            }
            else {
                solver += "Math.pow(,3)";
                console.log("Gosh!!!");
            }
            break;
        case arr2[17]:
            // docs 17 of SinX...
            if (!solver.valueOf()) {
                solver = "Math.sin(Math.PI/180*";
                break;
            }
            if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.DIVISION) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith("(")) {
                solver += "Math.sin(Math.PI/180*";
                sohCahToa.push("M");
            }
            else {
                solver += "*Math.sin(Math.PI/180*";
                sohCahToa.push("*");
            }
            break;
        case arr2[18]:
            // docs 18 of CosX...
            if (!solver.valueOf()) {
                solver = "Math.cos(Math.PI/180*";
                break;
            }
            if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.DIVISION) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith("(")) {
                solver += "Math.cos(Math.PI/180*";
                sohCahToa.push("M");
            }
            else {
                solver += "*Math.cos(Math.PI/180*";
                sohCahToa.push("*");
            }
            break;
        case arr2[19]:
            // docs 19 of TanX...
            if (!solver.valueOf()) {
                solver = "Math.tan(Math.PI/180*";
                break;
            }
            if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.DIVISION) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith("(")) {
                solver += "Math.tan(Math.PI/180*";
                sohCahToa.push("M");
            }
            else {
                solver += "*Math.tan(Math.PI/180*";
                sohCahToa.push("*");
            }
            break;
        case arr2[20]:
            // docs 20 of Percentage %...
            function perCent(num) {
                let valNum = num / 100;
                return valNum;
            }
            if (!solver.valueOf()) {
                solver = "%";
                percentage_pack.push("");
                break;
            }
            if ((solver.includes("(") && solver.includes(")")) && solver.endsWith(")")) {
                solver += doc20;
                let per = solver.lastIndexOf("%");
                let opb = solver.lastIndexOf(fact002, per);
                if (i > p || i == p) {
                    let hold = solver.lastIndexOf("(", per);
                    let hel1 = solver.lastIndexOf(")", per);
                    let hel2 = solver.indexOf(")", hold);
                    console.log(hel1 + " " + hel2);
                    opb = solver.lastIndexOf("(".repeat((hel1 - hel2) + 1), per);
                    if (hel1 - hel2 == 0) {
                        opb = solver.lastIndexOf("(".repeat(1), per);
                    }
                    let subStr = solver.substring(opb, per);
                    solver = solver.substring(0, opb);
                    percentage_pack.push(solver + subStr);
                    let hold1 = perCent(eval(subStr));
                    console.log(hold1);
                    console.log(percentage_pack);
                    if (solver.endsWith("Math.sqrt")) {
                        solver += `(${hold1})`;
                        return;
                    } // for Math sqrt static func
                    solver += `${hold1}`;
                    return;
                }
                let subStr = solver.substring(opb, per);
                if (!fact002.valueOf() || opb < 0) {
                    opb = solver.lastIndexOf("Math.sqrt("); //MathFactorial in Math.pow
                    subStr = solver.substring(opb, per);
                }
                solver = solver.substring(0, opb);
                percentage_pack.push(solver + subStr);
                let hold1;
                try {
                    hold1 = perCent(eval(subStr));
                }
                catch (error) {
                    console.error("Sorry " + error);
                    clearWork();
                    setTimeout(() => { work_class.innerHTML = ""; }, 1);
                    return;
                }
                console.log(hold1);
                console.log(percentage_pack);
                if (solver.endsWith("Math.sqrt")) {
                    solver += `(${hold1})`;
                    return;
                } // for Math sqrt static func
                solver += `${hold1}`;
            }
            else if (solver.endsWith("0") || solver.endsWith("1") || solver.endsWith("2") || solver.endsWith("3") || solver.endsWith("4") || solver.endsWith("5") || solver.endsWith("6") || solver.endsWith("7") || solver.endsWith("8") || solver.endsWith("9")) {
                solver += doc20;
                percentage_val = doc20;
                let per = solver.lastIndexOf("%");
                if (solver.lastIndexOf(OPRT.PLUS) && (percentage_array[percentage_array.length - 1] == OPRT.PLUS)) {
                    let valNum = solver.lastIndexOf("+", per);
                    let subStr = solver.substring(valNum + 1, per);
                    solver = solver.substring(0, valNum + 1); // plus 1 to include the + operator && must do to elucidate the former input in the solver
                    percentage_pack.push(solver + subStr);
                    let hold = perCent(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (solver.lastIndexOf(OPRT.MINUS) && (percentage_array[percentage_array.length - 1] == OPRT.MINUS)) {
                    let valNum = solver.lastIndexOf("-", per);
                    let subStr = solver.substring(valNum + 1, per);
                    solver = solver.substring(0, valNum + 1);
                    percentage_pack.push(solver + subStr);
                    let hold = perCent(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (solver.lastIndexOf(OPRT.DIVISION) && (percentage_array[percentage_array.length - 1] == OPRT.DIVISION)) {
                    let valNum = solver.lastIndexOf("/", per);
                    let subStr = solver.substring(valNum + 1, per);
                    solver = solver.substring(0, valNum + 1);
                    percentage_pack.push(solver + subStr);
                    let hold = perCent(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (solver.lastIndexOf(OPRT.MULTIPLE) && (percentage_array[percentage_array.length - 1] == OPRT.MULTIPLE)) {
                    let valNum = solver.lastIndexOf("*", per);
                    let subStr = solver.substring(valNum + 1, per);
                    solver = solver.substring(0, valNum + 1);
                    percentage_pack.push(solver + subStr);
                    let hold = perCent(eval(subStr));
                    console.log(hold);
                    solver += `${hold}`;
                }
                else if (!solver.includes("(")) {
                    let subStr = solver.substring(0, per); // this is for number value...
                    let hold = perCent(eval(subStr));
                    solver = `${hold}`;
                    percentage_pack.push(subStr);
                    console.log(percentage_pack);
                    console.log("what is this!!!");
                }
                else {
                    let opb = solver.lastIndexOf("(", per);
                    let subStr = solver.substring(opb + 1, per);
                    solver = solver.substring(0, opb + 1);
                    percentage_pack.push(solver + subStr);
                    let hold = perCent(eval(subStr));
                    solver += `${hold}`;
                    console.log(solver);
                }
            }
            else if (solver.endsWith("Ans") || solver.endsWith("Math.PI")) {
                solver += doc20;
                let per = solver.lastIndexOf("%");
                if (solver.endsWith("Math.PI")) {
                    let hold1 = solver.lastIndexOf("Math.PI", per);
                    let subStr = solver.substring(hold1, per);
                    solver = solver.substring(0, hold1);
                    percentage_pack.push(solver + subStr);
                    let hold = perCent(eval(subStr));
                    solver += `${hold}`;
                    return;
                }
                let winDox = window.localStorage.getItem("ans");
                let hold1 = solver.lastIndexOf("Ans", per);
                let subStr = solver.substring(hold1, per);
                solver = solver.substring(0, hold1);
                percentage_pack.push(solver + subStr);
                let hold = perCent(eval(subStr.replace(/Ans/gi, `${winDox}`)));
                solver += `${hold}`;
            }
            else {
                solver += "%";
                let per = solver.lastIndexOf("%");
                percentage_pack.push(solver.substring(0, per));
                console.log("Gosh!!!");
            }
            break;
        default:
            break;
    }
    console.log(solver);
}
function result() {
    // window.localStorage.setItem("ans", "");
    // toLocaleString to be used...
    try {
        if (solver) {
            let winDox = window.localStorage.getItem("ans");
            let result_val = eval((solver.replace(/Ans/gi, `${winDox}`)));
            let result_valStr = "";
            if (result_val.valueOf()) {
                if (result_val.valueOf().toString().match(/(undefined|null|NaN)/gi)) {
                    console.log("THIS IS ME PROGRAMMING");
                    result_class.innerHTML = "<em style='font-weight:400 !important'>Math Error</em>";
                    return;
                }
                else if (result_val.valueOf().toString().match(/(infinity|-infinity)/gi)) {
                    if (result_val.valueOf().toString() == "Infinity") {
                        result_valStr = "&infin;";
                        result_class.innerHTML = result_valStr;
                        window.localStorage.setItem("ans", "Infinity");
                    }
                    else {
                        result_valStr = "-&infin;";
                        result_class.innerHTML = result_valStr;
                        window.localStorage.setItem("ans", "-Infinity");
                    }
                    return;
                }
            }
            result_class.innerHTML = `${result_val}`;
            console.log("Hello World!");
            window.localStorage.setItem("ans", `${result_val}`);
            return;
            // result_class.innerText = result_val.toLocaleString("en-En");
        }
        else {
            result_class.innerText = "";
        }
    }
    catch (error) {
        result_class.innerHTML = "<em style='font-weight:400 !important'>Syntax Error</em>";
        console.error(error);
    }
}
function clearWork() {
    holderOprt = "";
    holderNum = "";
    solver = "";
    work_class.innerText = "";
    result_class.innerText = "";
    i = 0;
    p = 0;
    brkt_numFormation = false;
    Mathfactorial = "";
    fact001 = "";
    fact002 = "";
}
let arr;
let arrOprt;
let arr2;
function backSpace() {
    result_class.textContent = "";
    let power2and3 = work_class.innerHTML;
    factorial_val = work_class.innerText.valueOf();
    // for screen value to delete
    if (work_class.innerHTML.valueOf()) {
        let p = work_class.innerHTML.valueOf();
        if (p.endsWith("0") || p.endsWith("1") || p.endsWith("2") || p.endsWith("3") || p.endsWith("4") || p.endsWith("5") || p.endsWith("6") || p.endsWith("7") || p.endsWith("8") || p.endsWith("9")) {
            arr2 = p.trim().split("");
            arr2.pop();
            console.log(arr2 + " screen");
            work_class.innerHTML = arr2.join("");
        }
        if (p.endsWith(">")) {
            let x = p.lastIndexOf("<span>");
            let y = p.substring(0, x);
            console.log(y.trim() + " screen span");
            work_class.innerHTML = y.trim();
        }
    } // end of screen
    if (solver.valueOf() === "") {
        return;
    }
    if (solver.endsWith(")*0") || solver.endsWith(")*1") || solver.endsWith(")*2") || solver.endsWith(")*3") || solver.endsWith(")*4") || solver.endsWith(")*5") || solver.endsWith(")*6") || solver.endsWith(")*7") || solver.endsWith(")*8") || solver.endsWith(")*9") && brkt_numFormation == true) {
        let hold1 = solver.lastIndexOf(")");
        let hold2 = solver.substring(0, hold1 + 1);
        solver = hold2;
        console.log(solver + " solver");
        brkt_numFormation = false;
        return;
    }
    if (solver.endsWith("Math.sqrt(")) {
        let x, y = "";
        if (solver.endsWith("Math.sqrt(") && (emptyItr[emptyItr.length - 1] == "M")) {
            x = solver.lastIndexOf("Math.sqrt(");
            y = solver.substring(0, x);
            solver = y;
            emptyItr.pop();
            console.log("nothing");
        }
        else if (solver.endsWith("*Math.sqrt(") && (emptyItr[emptyItr.length - 1] == "*")) {
            x = solver.lastIndexOf("*Math.sqrt(");
            y = solver.substring(0, x);
            solver = y;
            emptyItr.pop();
            console.log("multiple times");
        }
        // variable
        let mathFact = fact001.lastIndexOf("Math.sqrt(");
        fact001 = fact001.substring(0, mathFact);
        console.log(fact001 + " Fact001 sqrt"); //end
        let mathFact2 = fact002.lastIndexOf("Math.sqrt(");
        fact002 = fact002.substring(0, mathFact2);
        console.log(fact002 + " Fact002 sqrt"); //end
        console.log(y);
        return;
    }
    if (solver.endsWith("Math.PI")) {
        let p, q = "";
        if (solver.endsWith("Math.PI") && (pii_array[pii_array.length - 1] == "codeNum")) {
            p = solver.lastIndexOf("Math.PI");
            q = solver.substring(0, p);
            solver = q;
            pii_array.pop();
            console.log(solver + " love");
        }
        else if (solver.endsWith("*Math.PI") && (pii_array[pii_array.length - 1] == "*codeNum")) {
            p = solver.lastIndexOf("*Math.PI");
            q = solver.substring(0, p);
            solver = q;
            pii_array.pop();
            console.log(solver + " grace");
        }
        return;
    }
    if (solver.endsWith("Math.exp(")) {
        if (solver.endsWith("Math.exp(") && (exp_array[exp_array.length - 1] == "M")) {
            let hold1 = solver.lastIndexOf("Math.exp(");
            let hold2 = solver.substring(0, hold1);
            solver = hold2;
            exp_array.pop();
            console.log(solver);
            console.log("Erase Exp1");
        }
        else if (solver.endsWith("*Math.exp(") && (exp_array[exp_array.length - 1] == "*")) {
            let hold1 = solver.lastIndexOf("*Math.exp(");
            let hold2 = solver.substring(0, hold1);
            solver = hold2;
            exp_array.pop();
            console.log(solver);
            console.log("Erase Exp2");
        }
        return;
    }
    if (solver.endsWith(",")) {
        // this is for power ^ ...
        if (solver.endsWith(",")) {
            let hold1 = solver.lastIndexOf("(");
            let hold2 = solver.lastIndexOf(",");
            let hold1and2 = solver.substring(hold1 + 1, hold2);
            let hold3 = solver.lastIndexOf("Math.pow(");
            if (solver.endsWith("),")) {
                hold1 = solver.lastIndexOf("Math.pow(", hold2);
                hold1and2 = solver.substring(hold1 + 9, hold2);
                console.log(hold1and2 + " falsify");
            }
            //variables
            let mathFact = Mathfactorial.lastIndexOf("Math.pow(");
            Mathfactorial = Mathfactorial.substring(0, mathFact);
            console.log(Mathfactorial + " Math-Factorial"); //end
            solver = solver.substring(0, hold3) + hold1and2;
            // solver = solver.substring(0, hold1) + hold1and2;
            console.log(solver + " Raised the Power");
        }
        return;
    }
    if (factorial_val.endsWith("!")) {
        solver = `${factorial_pack[factorial_pack.length - 1]}`;
        factorial_pack.pop();
        console.log(solver + " heyy!!!!!");
        // console.log(factorial_val);
        console.log(factorial_pack);
        return;
    }
    if (solver.endsWith("Math.log(")) {
        let p, q = "";
        if (solver.endsWith("*Math.log(") && (LN_array[LN_array.length - 1] == "*")) {
            p = solver.lastIndexOf("*Math.log");
            q = solver.substring(0, p);
            solver = q;
            LN_array.pop();
            console.log(solver + " solver");
            return;
        }
        p = solver.lastIndexOf("Math.log");
        q = solver.substring(0, p);
        solver = q;
        LN_array.pop();
        console.log(solver + " solver");
        return;
    }
    if (solver.endsWith("Math.log10(")) {
        let p, q = "";
        if (solver.endsWith("*Math.log10(") && (L10_array[L10_array.length - 1] == "*")) {
            p = solver.lastIndexOf("*Math.log10(");
            q = solver.substring(0, p);
            solver = q;
            L10_array.pop();
            console.log(solver + " solver");
            return;
        }
        p = solver.lastIndexOf("Math.log10(");
        q = solver.substring(0, p);
        solver = q;
        L10_array.pop();
        console.log(solver + " solver");
        console.log("doingsss!!!");
        return;
    }
    if (solver.endsWith("Ans")) {
        let p, q = "";
        if (solver.endsWith("*Ans") && (Ans_array[Ans_array.length - 1] == "*A")) {
            p = solver.lastIndexOf("*Ans");
            q = solver.substring(0, p);
            solver = q;
            Ans_array.pop();
            console.log(solver + " solver");
            return;
        }
        p = solver.lastIndexOf("Ans");
        q = solver.substring(0, p);
        solver = q;
        Ans_array.pop();
        console.log(solver + " solver");
        return;
    }
    if (power2and3 === null || power2and3 === void 0 ? void 0 : power2and3.endsWith("<span><sup>2</sup></span>")) {
        // this solves for the power 2 and 3
        if (solver.endsWith(",2)")) {
            let hold1 = solver.lastIndexOf("(");
            let hold2 = solver.lastIndexOf(",");
            let hold1and2 = solver.substring(hold1 + 1, hold2);
            if (solver.endsWith("),2)")) {
                hold1and2 = solver.substring(hold1 + 1, hold2);
                console.log("falsify");
            }
            let hold3 = solver.lastIndexOf("Math.pow(");
            solver = solver.substring(0, hold3) + hold1and2;
        }
        console.log(solver + " solver");
        return;
    }
    if (power2and3 === null || power2and3 === void 0 ? void 0 : power2and3.endsWith("<span><sup>3</sup></span>")) {
        // this solves for the power 2 and 3
        if (solver.endsWith(",3)")) {
            let hold1 = solver.lastIndexOf("(");
            let hold2 = solver.lastIndexOf(",");
            let hold1and2 = solver.substring(hold1 + 1, hold2);
            if (solver.endsWith("),3)")) {
                hold1and2 = solver.substring(hold1 + 1, hold2);
                console.log("falsify");
            }
            let hold3 = solver.lastIndexOf("Math.pow(");
            solver = solver.substring(0, hold3) + hold1and2;
            console.log(solver + " solver");
        }
        return;
    }
    if ((power2and3 === null || power2and3 === void 0 ? void 0 : power2and3.endsWith("<span>sin(</span>")) || (power2and3 === null || power2and3 === void 0 ? void 0 : power2and3.endsWith("<span>cos(</span>")) || (power2and3 === null || power2and3 === void 0 ? void 0 : power2and3.endsWith("<span>tan(</span>"))) {
        let p, q = "";
        // console.log(power2and3 + " SOHCAHTOA");
        if ((solver.endsWith("*Math.sin(Math.PI/180*") || solver.endsWith("*Math.cos(Math.PI/180*") || solver.endsWith("*Math.tan(Math.PI/180*")) && (sohCahToa[sohCahToa.length - 1] == "*")) {
            if (solver.endsWith("*Math.sin(Math.PI/180*")) {
                p = solver.lastIndexOf("*Math.sin(");
            }
            else if (solver.endsWith("*Math.cos(Math.PI/180*")) {
                p = solver.lastIndexOf("*Math.cos(");
            }
            else if (solver.endsWith("*Math.tan(Math.PI/180*")) {
                p = solver.lastIndexOf("*Math.tan(");
            }
            // p = solver.lastIndexOf("*Math");
            q = solver.substring(0, p);
            solver = q;
            sohCahToa.pop();
            console.log(solver + " solver1");
            return;
        }
        if (solver.endsWith("Math.sin(Math.PI/180*")) {
            p = solver.lastIndexOf("Math.sin(");
        }
        else if (solver.endsWith("Math.cos(Math.PI/180*")) {
            p = solver.lastIndexOf("Math.cos(");
        }
        else if (solver.endsWith("Math.tan(Math.PI/180*")) {
            p = solver.lastIndexOf("Math.tan(");
        }
        // p = solver.lastIndexOf("Math.sin(")|| solver.lastIndexOf("Math.cos(") ;
        q = solver.substring(0, p);
        solver = q;
        sohCahToa.pop();
        console.log(solver + " solver2");
        return;
    }
    if (factorial_val.endsWith("%")) {
        solver = `${percentage_pack[percentage_pack.length - 1]}`;
        percentage_pack.pop();
        console.log(solver + " heyy!!!!!");
        console.log(percentage_pack);
        return;
    }
    let openBracket = document.createTextNode(`${work_class.textContent}`).nodeValue;
    if (solver.endsWith("Math.PI*0") || solver.endsWith("Math.PI*1") || solver.endsWith("Math.PI*2") || solver.endsWith("Math.PI*3") || solver.endsWith("Math.PI*4") || solver.endsWith("Math.PI*5") || solver.endsWith("Math.PI*6") || solver.endsWith("Math.PI*7") || solver.endsWith("Math.PI*8") || solver.endsWith("Math.PI*9") && openBracket.endsWith(`${doc8}`)) { // -- digit added times to --
        let hold1 = solver.lastIndexOf("*");
        let hold2 = solver.substring(0, hold1);
        solver = hold2;
        console.log(solver + " Pii_Times");
        return;
    }
    if (solver.endsWith("*(") && (openBracket.endsWith("0") || openBracket.endsWith("1") || openBracket.endsWith("2") || openBracket.endsWith("3") || openBracket.endsWith("4") || openBracket.endsWith("5") || openBracket.endsWith("6") || openBracket.endsWith("7") || openBracket.endsWith("8") || openBracket.endsWith("9") || openBracket.endsWith(`${doc8}`))) {
        let hold1 = solver.lastIndexOf("*(");
        let hold2 = solver.substring(0, hold1);
        solver = hold2;
        console.log(openBracket);
        console.log(hold2 + " off");
        return;
    }
    // variables
    if (factorial_val.endsWith("(") || factorial_val.endsWith(")")) {
        if (factorial_val.endsWith("(")) {
            i -= 1;
            console.log(i + " i");
        }
        if (factorial_val.endsWith(")")) {
            p -= 1;
            console.log(p + " p");
        }
    }
    // for solver value to delete if above conditions are not met!
    arr = solver.split("");
    arr.pop();
    solver = arr.join("");
    console.log(solver + " solver");
}
