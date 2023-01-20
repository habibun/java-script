/**
 * Created by habibun on 12/31/16.
 */


/**
 * Let’s illustrate the arrow-function lexical scope:
 */
/*function foo() {
 // return an arrow function
 return (a) => {
 // `this` here is lexically inherited from `foo()`
 console.log( this.a );
 };
 }

 var obj1 = {
 a: 2
 };

 var obj2 = {
 a: 3
 };

 var bar = foo.call( obj1 );
 bar.call( obj2 ); // 2, not 3!*/


/**
 * The most common use case will likely be in the use of callbacks, such as event handlers or timers:
 */
function foo() {
    setTimeout(() => {
        // `this` here is lexically inherited from `foo()`
        console.log( this.a );
    },100);
}

var obj = {
    a: 2
};

foo.call( obj ); // 2

/**
 * which is basically almost indistinguishable from the spirit of ES6 arrow-functions:
 */
function foo() {
    var self = this; // lexical capture of `this`
    setTimeout( function(){
        console.log( self.a );
    }, 100 );
}
var obj = {
    a: 2
};
foo.call( obj ); // 2
