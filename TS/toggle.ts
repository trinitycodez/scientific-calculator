const side_optr = document.querySelector(".sideOptr")! as HTMLDivElement;
const side_optr_toggle = document.querySelector(".side_pointer")!;
const pointer_oprt = document.querySelector(".pointer_icon")! as HTMLDivElement;

const display_Side_oprt = document.querySelector(".display_Side_oprt")! as HTMLDivElement;
let bool = true;

side_optr_toggle.addEventListener("click", ()=> {
    side_optr.classList.toggle("display_Side_oprt");
    pointer_oprt.classList.toggle("pointer_rotate");
});

// operators
const btn_dive = document.querySelector(".btn_dive") as HTMLDivElement; 
const btn_tims = document.querySelector(".btn_tims") as HTMLDivElement; 
const btn_plus = document.querySelector(".btn_plus") as HTMLDivElement; 
const btn_mins = document.querySelector(".btn_mins") as HTMLDivElement; 
const btn_sqrt = document.querySelector(".btn_sqrt") as HTMLDivElement; 
const btn_dot = document.querySelector(".btn_dot") as HTMLDivElement;
const btn_opnB = document.querySelector(".btn_opnB") as HTMLDivElement;
const btn_clsB = document.querySelector(".btn_clsB") as HTMLDivElement;
const btn_pii = document.querySelector(".btn_pii") as HTMLDivElement;
const btn_exp = document.querySelector(".btn_exp") as HTMLDivElement;
const btn_powr = document.querySelector(".btn_powr") as HTMLDivElement;
const btn_fact = document.querySelector(".btn_fact") as HTMLDivElement;
const btn_ln = document.querySelector(".btn_ln") as HTMLDivElement;
const btn_log = document.querySelector(".btn_log") as HTMLDivElement;
const btn_ans = document.querySelector(".btn_ans") as HTMLDivElement;
const btn_X2 = document.querySelector(".btn_X2") as HTMLDivElement;
const btn_X3 = document.querySelector(".btn_X3") as HTMLDivElement;
const btn_sin = document.querySelector(".btn_sin") as HTMLDivElement;
const btn_cos = document.querySelector(".btn_cos") as HTMLDivElement;
const btn_tan = document.querySelector(".btn_tan") as HTMLDivElement;
const btn_prct = document.querySelector(".btn_prct") as HTMLDivElement;
const num0 = document.querySelector(".btn0") as HTMLDivElement;
const num1 = document.querySelector(".btn1") as HTMLDivElement;
const num2 = document.querySelector(".btn2") as HTMLDivElement;
const num3 = document.querySelector(".btn3") as HTMLDivElement;
const num4 = document.querySelector(".btn4") as HTMLDivElement;
const num5 = document.querySelector(".btn5") as HTMLDivElement;
const num6 = document.querySelector(".btn6") as HTMLDivElement;
const num7 = document.querySelector(".btn7") as HTMLDivElement;
const num8 = document.querySelector(".btn8") as HTMLDivElement;
const num9 = document.querySelector(".btn9") as HTMLDivElement;

document.addEventListener("keypress", (e)=> {
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