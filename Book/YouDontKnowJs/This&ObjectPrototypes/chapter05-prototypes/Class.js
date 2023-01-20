/**
 * Created by jony on 1/12/17.
 */

function Foo()
{
}

var a = new Foo();

console.log(Object.getPrototypeOf(a) === Foo.prototype);

/**
 * Constructors
 */
function Foo() {
// ...
}
Foo.prototype.constructor === Foo; // true
var a = new Foo();
a.constructor === Foo; // true

/**
 * Mechanics
 * @param name
 * @constructor
 */
function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name;
};
var a = new Foo( "a" );
var b = new Foo( "b" );
a.myName(); // "a"
b.myName(); // "b"