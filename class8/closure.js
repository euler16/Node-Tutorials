var global = {};
function parent() {
    var i = 0;
    function increment() {
		i++;
    }
    
    function display() {
        console.log(i);
    }
	global.increment = increment;
	global.display = display;
}    

console.log(global)
//{}
console.log(parent());
//undefined
console.log(global)
//{increment: ƒ, display: ƒ}
console.log(i)
//VM351:1 Uncaught ReferenceError: i is not defined
//    at <anonymous>:1:1
//(anonymous) @ VM351:1
//console.log(global.display());
//VM281:9 0
//undefined
console.log(global.increment());
//undefined
console.log(global.display());
//VM281:9 1
//undefined
console.log(parent());
//undefined
console.log(global.display());
//VM281:9 0
//undefined