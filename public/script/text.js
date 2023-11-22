var pc = document.getElementById("pc");
var sp = document.getElementById("sp");
var accum = document.getElementById("accum");
var b = document.getElementById("B");
var c = document.getElementById("C");
var d = document.getElementById("D");
var e = document.getElementById("E");
var h = document.getElementById("H");
var l = document.getElementById("L");
var s = document.getElementById("S");
var z = document.getElementById("Z");
var cy = document.getElementById("CY");
var p = document.getElementById("P");
var ac = document.getElementById("AC");

var pcAdd= document.getElementById("address");
let currAddress=2000;

import { sta, mvi, mov } from "./storeFunctions.js";
import { lda } from "./loadFunctions.js";
import { add, sub, adi, inr, dcr } from "./arithemetic.js";
import { hlt } from "./controlFunctions.js";
import { cma, cmp } from "./logicalFunctions.js";

let run = document.getElementById("run");
const obj = {
  // Accumulator
  A: 0,
  // Register Pairs
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  H: 0,
  L: 0,
  // Flag register
  S: 0,
  Z: 0,
  AC: 0,
  P: 0,
  CY: 0,
  // Memory Locations
  memory:new Map(),
};

let instruction = new Map([
  // Load Functions
  ["MOV", mov],
  ["MVI", mvi],
  ["LDA", lda],
  // Store Functions
  ["STA", sta],
  // Arithmentic Funcitons
  ["ADD", add],
  ["SUB", sub],
  ["ADI", adi],
  ["INR", inr],
  ["DCR", dcr],
  // Logical Fucntions
  ["CMA", cma],
  ["CMP", cmp],
  // Terminating Functions
  ["HLT", hlt],
]);

run.addEventListener("click", function () {
  let codearea = document.getElementById("code");
  let code = codearea.value;

  // converting the whole code in array of strings.
  let codelines = code.split(/\n/);
  console.log(codelines);

  let i = 0;
  // Iterating over each line of code and spliting the instructions, registers, data, etc.
  for (i = 0; i < codelines.length; i++) {
    console.log(obj);
    let words = codelines[i].split(/[ ]/);
    console.log(words);
    if(words[0]=="") continue;
    var x = instruction.get(words[0])(words, obj,currAddress);
    if (x == 0) return;
    else currAddress=x;
    console.log(x);
  }
  console.log(obj);
  console.log(currAddress);
  //Showing data
  b.innerText = obj["B"];
  accum.innerText = obj["A"];
  d.innerText  = obj["D"];
  c.innerText  = obj["C"];
  e.innerText  = obj["E"];
  h.innerText  = obj["H"];
  l.innerText = obj["L"];
  s.innerText  = obj["S"];
  z.innerText  = obj["Z"];
  cy.innerText = obj["CY"];
  ac.innerText = obj["AC"];
  p.innerText = obj["P"];
  pcAdd.innerText=currAddress;
});



//get address

var fetch=document.getElementById("fetch");
var fetchAddress=document.getElementById("fetchAddress").value;
var dataOut=document.getElementById("dataOut");

fetch.addEventListener("click",function(){
    console.log('fetch has been called');
    fetchAddress=parseInt(fetchAddress);
    dataOut.innerText=obj.memory[fetchAddress];
});