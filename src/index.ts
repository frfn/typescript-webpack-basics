/* creating a class */
// this is understood

/* class Dog {
	constructor(private _name: string) {}

	get name() {
		return this._name;
	}
}
const oscar = new Dog("Dog Name: Oscar"); */
// console.log(returnAString(oscar.name));

// this class declaration is not understood by babel UNTIL you enable the plugin
export class A {
	greeting = "Hello World";
}

const returnAString = (someStr: string): string => {
	return someStr;
};

const l = (someStr: string) => {
	console.log(someStr);
};

console.log(new A().greeting);
l(returnAString("1"));
