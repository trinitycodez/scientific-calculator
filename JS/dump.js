"use strict";
//Factorial
// let val:number = 1;
// function fact(num:number) {
//     let val:number = 1;
//     for (let i = num; i >= 0; i--) {
//         if (i == 0 || i == 1) {
//             val *= 1; return;
//         }
//         val = val * i;
//         console.log(val);
//     }
// }
// fact((6));
// Dump...
// if (i > p || i == p) {
//     let hold = solver.lastIndexOf("(", fac);
//     let hel1 = solver.lastIndexOf(")", fac);
//     let hel2 = solver.indexOf(")", hold);
//     console.log(hel1 +" "+ hel2);
//     opb = solver.lastIndexOf("(".repeat((hel1-hel2)+1), fac);
//     // console.log("OPB1and2OPB");
//     if ((hel1-hel2) == 0) {
//         opb = solver.lastIndexOf("(".repeat(1), fac);
//         console.log(opb +" hel1and2");
//     }
// }
// let subStr = solver.substring(opb, fac);
// if (opb == 0) {
//     opb = solver.lastIndexOf("Math.sqrt(") //MathFactorial in Math.pow
//     subStr = solver.substring(opb, fac);
// }
// console.log(subStr + " inside");
// solver = solver.substring(0, opb);
// factorial_pack.push(solver + subStr);
// let hold = fact(eval(subStr));
// console.log(subStr + "subtr");
// console.log(factorial_pack);
// if (solver.endsWith("Math.sqrt")) {solver += `(${hold})`; console.log(solver + " falsify"); return;} // for math sqrt
// solver += `${hold}`;
// console.log(solver + " go!");
// start
// let opb = solver.lastIndexOf("Math.pow(", pwr);
// if (i > p || i == p) {
//     let hold = solver.lastIndexOf("(", pwr);
//     let hel1 = solver.lastIndexOf(")", pwr);
//     let hel2 = solver.indexOf(")", hold);
//     console.log(hel1 +" "+ hel2);
//     opb = solver.lastIndexOf("(".repeat((hel1-hel2)+1), pwr);
//     if (hel1-hel2 == 0) {
//         opb = solver.lastIndexOf("(".repeat(1), pwr);
//     }
//     console.log(opb + " this is Open and Close brackets counting...");
// }
// let subStr = solver.substring(opb, pwr);
// console.log(subStr + " sub");
// solver = solver.substring(0, opb);
// solver += `Math.pow(${subStr},`;
// console.log(solver + " solver content"); 
// return;
// end
// if (i%2 == 0) {
// opb = solver.lastIndexOf("(", pwr);
// opb = solver.lastIndexOf("Math.pow(", pwr);
// }
// if (solver.endsWith("Math.sqrt((")) {
//     arrOprt = solver.split("");
//     arrOprt.pop();
//     solver = arrOprt.join("");
//     console.log(solver);
//     return;
// }
// if (!solver.valueOf()) {solver = "Math.pow(Math.E,("; exp_array.push("M"); break;} Switch_case exp
// if (solver.endsWith(OPRT.PLUS) || solver.endsWith(OPRT.MINUS) || solver.endsWith(OPRT.MULTIPLE) || solver.endsWith(OPRT.DIVISION) || solver.endsWith("(")) {
//     solver += "Math.pow(Math.E,(";
//     exp_array.push("M");
// } else {
//     solver += "*Math.pow(Math.E,(";
//     exp_array.push("*");
// }
// if (solver.endsWith("Math.pow(Math.E,(")) { backspace exp
//     if (solver.endsWith("Math.pow(Math.E,(") && (exp_array[exp_array.length-1] == "M") ) {
//         let hold1 = solver.lastIndexOf("Math.pow(Math.E,(");
//         let hold2 = solver.substring(0, hold1);
//         solver = hold2;
//         exp_array.pop();
//         console.log("Erase Exp1");
//     } else if (solver.endsWith("*Math.pow(Math.E,(") && (exp_array[exp_array.length-1] == "*") ) {
//         let hold1 = solver.lastIndexOf("*Math.pow(Math.E,(");
//         let hold2 = solver.substring(0, hold1);
//         solver = hold2;
//         exp_array.pop();
//         console.log("Erase Exp2");
//     }
//     return;
// }
