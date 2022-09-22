
'use strict';
// let sym = Symbol.for('sym');
// let id = Symbol.for('id');
// 
// let idClone = Symbol.for('id');
// 
// console.log(id == idClone);
// console.log(idClone);
// console.log(Symbol.keyFor(sym));

let obj = {};

let answerBool = confirm('Are you already 18?');
let answer = prompt('How old are you?', '');

obj.con = answerBool;
obj.prom = answer;
document.write(obj.con, obj.prom);