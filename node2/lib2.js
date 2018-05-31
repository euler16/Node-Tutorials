//global.a = 20

/*scopes:-
			FILE scope
			GLOBAL scope
			this scope/ module.exports

			module.exports (if not present) returns this
			else
				returns whatever inside it (even if blank)
*/


let d = 5;
let e = 6;
this.a = 10;
this.b = 20;

function happy() {
	return 'I am Happy';
}
// every function should return

module.exports = {
	d,e,happy,
	h:happy
}