"use strict";
const side_optr = document.querySelector(".sideOptr");
const side_optr_toggle = document.querySelector(".side_pointer");
const pointer_oprt = document.querySelector(".pointer_icon");
const display_Side_oprt = document.querySelector(".display_Side_oprt");
let bool = true;
side_optr_toggle.addEventListener("click", () => {
    side_optr.classList.toggle("display_Side_oprt");
    pointer_oprt.classList.toggle("pointer_rotate");
});
// operators
const btn_dive = document.querySelector(".btn_dive");
const btn_tims = document.querySelector(".btn_tims");
const btn_plus = document.querySelector(".btn_plus");
const btn_mins = document.querySelector(".btn_mins");
const btn_sqrt = document.querySelector(".btn_sqrt");
const btn_dot = document.querySelector(".btn_dot");
const btn_opnB = document.querySelector(".btn_opnB");
const btn_clsB = document.querySelector(".btn_clsB");
const btn_pii = document.querySelector(".btn_pii");
const btn_exp = document.querySelector(".btn_exp");
const btn_powr = document.querySelector(".btn_powr");
const btn_fact = document.querySelector(".btn_fact");
const btn_ln = document.querySelector(".btn_ln");
const btn_log = document.querySelector(".btn_log");
const btn_ans = document.querySelector(".btn_ans");
const btn_X2 = document.querySelector(".btn_X2");
const btn_X3 = document.querySelector(".btn_X3");
const btn_sin = document.querySelector(".btn_sin");
const btn_cos = document.querySelector(".btn_cos");
const btn_tan = document.querySelector(".btn_tan");
const btn_prct = document.querySelector(".btn_prct");
const num0 = document.querySelector(".btn0");
const num1 = document.querySelector(".btn1");
const num2 = document.querySelector(".btn2");
const num3 = document.querySelector(".btn3");
const num4 = document.querySelector(".btn4");
const num5 = document.querySelector(".btn5");
const num6 = document.querySelector(".btn6");
const num7 = document.querySelector(".btn7");
const num8 = document.querySelector(".btn8");
const num9 = document.querySelector(".btn9");
document.addEventListener("keypress", (e) => {
    switch (e.key) {
        case "0":
            solve(num0);
            break;
        case "1":
            solve(num1);
            break;
        case "2":
            solve(num2);
            break;
        case "3":
            solve(num3);
            break;
        case "4":
            solve(num4);
            break;
        case "5":
            solve(num5);
            break;
        case "6":
            solve(num6);
            break;
        case "7":
            solve(num7);
            break;
        case "8":
            solve(num8);
            break;
        case "9":
            solve(num9);
            break;
        case "/":
            solve(btn_dive, "dive");
            break;
        case "*":
            solve(btn_tims, "tims");
            break;
        case "+":
            solve(btn_plus, "plus");
            break;
        case "-":
            solve(btn_mins, "mins");
            break;
        case doc4:
            solve(btn_sqrt, "sqrt");
            break;
        case doc5:
            solve(btn_dot, "dot");
            break;
        case doc6:
            solve(btn_opnB, "opnB");
            break;
        case doc7:
            solve(btn_clsB, "clsB");
            break;
        case doc8:
            solve(btn_pii, "pii");
            break;
        case doc9:
            solve(btn_exp, "exp");
            break;
        case doc10:
            solve(btn_powr, "powr");
            break;
        case doc11:
            solve(btn_fact, "fact");
            break;
        case doc12:
            solve(btn_ln, "ln");
            break;
        case doc13:
            solve(btn_log, "log");
            break;
        case doc14:
            solve(btn_ans, "ans");
            break;
        case doc15:
            solve(btn_X2, "X2");
            break;
        case doc16:
            solve(btn_X3, "X3");
            break;
        case doc17:
            solve(btn_sin, "sin");
            break;
        case doc18:
            solve(btn_cos, "cos");
            break;
        case doc19:
            solve(btn_tan, "tan");
            break;
        case doc20:
            solve(btn_prct, "prct");
            break;
        case "Enter":
            result();
            break;
        default:
            break;
    }
    console.log(e);
});
