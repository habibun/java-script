/**
 * Created by jony on 1/11/17.
 */

var myObject = {
    a: 2
};

console.log(myObject.a);

/**
 * Shadowing can even occur implicitly in subtle ways, so care must be
 * taken if trying to avoid it. Consider:
 */
var anotherObject = {
    a: 2
};

var myObject = Object.create( anotherObject );
anotherObject.a; // 2
myObject.a; // 2
anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" ); // false
myObject.a++; // oops, implicit shadowing!
anotherObject.a; // 2
myObject.a; // 3
myObject.hasOwnProperty( "a" ); // true