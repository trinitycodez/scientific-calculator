const toggleDarkLight = document.querySelector(".dark") as HTMLDivElement;
// const toggleLightDark = document.querySelector(".light") as HTMLDivElement;

const side_optr = document.querySelector(".sideOptr")! as HTMLDivElement;
const side_optr_toggle = document.querySelector(".side_pointer")!;
const pointer_oprt = document.querySelector(".pointer_icon")! as HTMLDivElement;

const display_Side_oprt = document.querySelector(".display_Side_oprt")! as HTMLDivElement;
let bool = true;

const header = document.querySelector(".head")! as HTMLDivElement;
const section = document.querySelector("section")! as HTMLDivElement;
const body = document.querySelector("body")! as HTMLBodyElement;
const container = document.querySelector(".container")! as HTMLDivElement;
const displayName = document.querySelector(".name")! as HTMLDivElement;
const resultDisplay = document.querySelector(".result-class")! as HTMLDivElement;
const sideOptr = document.querySelector(".sideOptr")! as HTMLDivElement;
const backSpaceSVG = document.querySelectorAll(".backspace > path")!;


function darkLight(value?: string) {
    if (value === "false") {
        // in night view
        window.localStorage.setItem("toggleConstrast", "true");
        toggleDarkLight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" style="height: inherit; width: inherit;"><path d="M479.765 716Q538 716 579 675.235q41-40.764 41-99Q620 518 579.235 477q-40.764-41-99-41Q422 436 381 476.765q-41 40.764-41 99Q340 634 380.765 675q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM70 606q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170 606H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890 606H790ZM479.825 296Q467 296 458.5 287.375T450 266V166q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 166v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720q-12.825 0-21.325-8.62-8.5-8.63-8.5-21.38V886q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 886v100q0 12.75-8.675 21.38-8.676 8.62-21.5 8.62ZM240 378l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217 270 226 279l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5 774q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743 882 734 873Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786 313 777 322l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897 873.103q-8.897-8.896-8.897-21.5Q174 839 183 830l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291 783 291 795t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480 576Z" fill="#f0f8ff" /></svg>`
        toggleDarkLight.classList.replace("dark", "light");
        toggleDarkLight.title = "Light mode";
        header.style.backgroundColor = "#243447";
        section.style.backgroundColor = "#243447";
        body.style.backgroundColor = "#141d26";
        container.style.backgroundColor = "#141d26";
        displayName.style.color = "#ffffff";
        resultDisplay.style.color = "#ffffff";

        for (const iterator of btn_general) {
            iterator.classList.add("btnDarkMode");
        }
        
        for (let i = 0; i <= backSpaceSVG.length-1; i++) {
            let p = <SVGPathElement>backSpaceSVG[i];
            if (i === 0) {
                p.style.fill = "#e8f0f3"; continue;
            }
            p.style.stroke = "#e8f0f3";
        }
    } else {
        // in light view
        window.localStorage.setItem("toggleConstrast", "false");
        toggleDarkLight.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" style="height: inherit; width: inherit; background-color: #d1dfdf5e;"><path d="M480 936q-150 0-255-105T120 576q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480 936Z" fill="#141d26"/></svg>`
        toggleDarkLight.classList.replace("light", "dark");
        toggleDarkLight.title = "Night mode";
        header.style.backgroundColor = "#ffffff";
        section.style.backgroundColor = "";
        body.style.backgroundColor = "#f5f5f5";
        container.style.backgroundColor = "#ffffff";
        displayName.style.color = "";
        resultDisplay.style.color = "#000000";

        for (const iterator of btn_general) {
            iterator.classList.remove("btnDarkMode");
        }

        for (let i = 0; i <= backSpaceSVG.length-1; i++) {
            let p = <SVGPathElement>backSpaceSVG[i];
            if (i === 0) {
                p.style.fill = "#466F7E"; continue;
            }
            p.style.stroke = "#466F7E";
        }

    }
}

window.addEventListener("load", () => {
    let toggler = window.localStorage.getItem("toggleConstrast");
    toggler === "false" ? darkLight("true") : darkLight("false")
});
toggleDarkLight.addEventListener("click", () => {
    let toggler = window.localStorage.getItem("toggleConstrast");
    darkLight(toggler!);
});

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