/**
 * Created by habibun on 12/31/16.
 */

/*var myObject = {
 a: 2
 };
 myObject.a; // 2
 myObject["a"]; // 2*/

/**
 *  since the [".."] syntax uses a string’s value to specify the location
 */
/*var myObject = {
 a: 2
 };
 var idx;
 if (wantA) {
 idx = "a";
 }
 // later
 console.log( myObject[idx] ); // 2*/


/**
 *  If you use any other value besides a string (primitive) as the property, it will first be con‐verted to a string.
 */
/*var myObject = { };

 myObject[true] = "foo";
 myObject[3] = "bar";
 myObject[myObject] = "baz";

 myObject["true"]; // "foo"
 myObject["3"]; // "bar"
 console.log(myObject["[object Object]"]); // "baz"*/

/**
 * Computed Property Names
 */
/*var prefix = "foo";
 var myObject = {
 [prefix + "bar"]: "hello",
 [prefix + "baz"]: "world"
 };
 myObject["foobar"]; // hello
 myObject["foobaz"]; // world*/

/**
 * Property Versus Method
 */
/*function foo() {
 console.log( "foo" );
 }
 var someFoo = foo; // variable reference to `foo`
 var myObject = {
 someFoo: foo
 };
 foo; // function foo(){..}
 someFoo; // function foo(){..}
 myObject.someFoo; // function foo(){..}*/


/**
 * Arrays
 */
/*var myArray = [ "foo", 42, "bar" ];
 myArray.length; // 3
 myArray[0]; // "foo"
 myArray[2]; // "bar"*/


/**
 * Arrays are objects, so even though each index is a positive integer, you can also add properties onto the array:
 */
/*var myArray = [ "foo", 42, "bar" ];
 myArray.baz = "baz";
 myArray.length; // 3
 myArray.baz; // "baz"
 console.log(myArray[3]);*/

/**
 * Be careful: if you try to add a property to an array, but the property name looks like a number
 */
/*var myArray = [ "foo", 42, "bar" ];
 myArray["3"] = "baz";
 myArray.length; // 4
 myArray[3]; // "baz"*/


/**
 * Duplicating Objects
 */
function anotherFunction() { /*..*/ }
var anotherObject = {
    c: true
};
var anotherArray = [];
var myObject = {
    a: 2,
    b: anotherObject, // reference, not a copy!
    c: anotherArray, // another reference!
    d: anotherFunction
};
anotherArray.push( anotherObject, myObject );

/**
 * Property Descriptors
 */

    //Writable

var myObject = {};
Object.defineProperty( myObject, "a", {
    value: 2,
    writable: false, // not writable!
    configurable: true,
    enumerable: true
} );
myObject.a = 3;
myObject.a; // 2


//Configurable

var myObject = {
    a: 2
};
myObject.a = 3;
myObject.a; // 3
Object.defineProperty( myObject, "a", {
    value: 4,
    writable: true,
    configurable: false, // not configurable!
    enumerable: true
} );
myObject.a; // 4
myObject.a = 5;
myObject.a; // 5
Object.defineProperty( myObject, "a", {
    value: 6,
    writable: true,
    configurable: true,
    enumerable: true
} ); // TypeError

//Another thing configurable:false prevents is the ability to use the delete operator to remove an existing property:

var myObject = {
    a: 2
};
myObject.a; // 2
delete myObject.a;
myObject.a; // undefined
Object.defineProperty( myObject, "a", {
    value: 2,
    writable: true,
    configurable: false,
    enumerable: true
} );
myObject.a; // 2
delete myObject.a;
myObject.a; // 2

/**
 * Enumerable
 */


/**
 * Immutability
 */

/**
 * Object constant
 */
    //as an object property, like:
var myObject = {};
Object.defineProperty( myObject, "FAVORITE_NUMBER", {
    value: 42,
    writable: false,
    configurable: false
} );


/**
 * Prevent extensions
 */
var myObject = {
    a: 2
};
Object.preventExtensions( myObject );
myObject.b = 3;
myObject.b; // undefined


/**
 * Seal
 */

/**
 * Freeze
 * /'

 /**
 * [[Get]]
 */
var myObject = {
    a: 2
};
myObject.b; // undefined


var myObject = {
    a: undefined
};
myObject.a; // undefined
myObject.b; // undefined


/**
 * [[Put]]
 */


/**
 * Getters and Setters
 */
var myObject = {
    // define a getter for `a`
    get a() {
        return 2;
    }
};

Object.defineProperty(
    myObject,
    // target
    "b",
    // property name
    {
        // descriptor
        // define a getter for `b`
        get: function(){ return this.a * 2 },
        // make sure `b` shows up as an object property
        enumerable: true
    }
);

myObject.a; // 2

/**
 * Existence
 */
var myObject = {
    a: 2
};
("a" in myObject); // true
("b" in myObject); // false
myObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "b" ); // false

/**
 * Enumeration
 */
var myObject = { };
Object.defineProperty(
    myObject,
    "a",
    // make `a` enumerable, as normal
    { enumerable: true, value: 2 }
);
Object.defineProperty(
    myObject,
    "b",
    // make `b` nonenumerable
    { enumerable: false, value: 3 }
);
myObject.propertyIsEnumerable( "a" ); // true
myObject.propertyIsEnumerable( "b" ); // false
Object.keys( myObject ); // ["a"]
Object.getOwnPropertyNames( myObject ); // ["a", "b"]