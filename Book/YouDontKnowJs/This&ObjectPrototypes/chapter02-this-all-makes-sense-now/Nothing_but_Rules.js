/**
 * Created by habibun on 12/29/16.
 */

/**
 * default catch-all rule when none of the other rules apply
 * */

/*
 function foo()
 {
 console.log(this.a);
 }

 var a = 2;
 foo();
 */

/**
 * in strict mode
 */
/*function foo()
 {
 "use strict";

 console.log(this.a);
 }
 var a = 2;

 foo();*/

/**
 *  the strict mode state of the call-site of foo() is irrelevant
 */
/*function foo() {
 console.log( this.a );
 }

 var a = 2;

 (function(){
 "use strict";
 foo(); // 2
 })();*/

/**
 * Implicit Binding
 */
/*function foo()
 {
 console.log(this.a);
 }

 var obj = {
 a: 2,
 foo: foo
 };

 obj.foo();*/


/**
 * Only the top/last level of an object property reference chain matters to the call-site. For instance
 */
/*function foo() {
 console.log( this.a );
 }
 var obj2 = {
 a: 42,
 foo: foo
 };
 var obj1 = {
 a: 2,
 obj2: obj2
 };
 obj1.obj2.foo(); // 42*/

/**
 * Implicitly lost
 */
/*function foo() {
 console.log( this.a );
 }
 var obj = {
 a: 2,
 foo: foo
 };
 var bar = obj.foo; // function reference/alias!
 var a = "oops, global"; // `a` also property on global object
 bar(); // "oops, global"*/


/**
 * The more subtle, more common, and more unexpected way this occurs is when we consider passing a callback function:
 */
/*function foo() {
 console.log( this.a );
 }

 function doFoo(fn) {
 // `fn` is just another reference to `foo`
 fn(); // <-- call-site!
 }


 var obj = {
 a: 2,
 foo: foo
 };

 var a = "oops, global"; // `a` also property on global object
 doFoo( obj.foo ); // "oops, global"*/


/**
 * Explicit Binding
 */

/* function foo()
 {
 console.log(this.a);
 }

 var obj = {
 a: 2
 };

 foo.call(obj);*/

/**
 * Hard binding
 */
/* function foo() {
 console.log( this.a );
 }

 var obj = {
 a: 2
 };

 var bar = function() {
 foo.call( obj );
 };

 bar(); // 2
 setTimeout( bar, 100 ); // 2

 // hard-bound `bar` can no longer have its `this` overridden
 bar.call( window ); // 2*/


/**
 * The most typical way to wrap a function with a hard binding creates a
 pass-through of any arguments passed and any return value received
 */
/*function foo(something) {
 console.log( this.a, something );
 return this.a + something;
 }

 var obj = {
 a: 2
 };

 var bar = function() {
 return foo.apply( obj, arguments );
 };

 var b = bar( 3 ); // 2 3
 console.log( b ); // 5*/


/**
 * Another way to express this pattern is to create a reusable helper:
 */

/*function foo(something) {
 console.log( this.a, something );
 return this.a + something;
 }
 // simple `bind` helper
 function bind(fn, obj) {
 return function() {
 return fn.apply( obj, arguments );
 };
 }
 var obj = {
 a: 2
 };

 var bar = bind( foo, obj );
 var b = bar( 3 ); // 2 3
 console.log( b ); // 5*/

/**
 * Since hard binding is such a common pattern, it’s provided with a built-
 in utility as of ES5, Function.prototype.bind, and it’s used like this:
 */
/*function foo(something) {
 console.log( this.a, something );
 return this.a + something;
 }
 var obj = {
 a: 2
 };
 var bar = foo.bind( obj );
 var b = bar( 3 ); // 2 3
 console.log( b ); // 5*/

/**
 * API call “contexts”
 */
/*function foo(el) {
 console.log( el, this.id );
 }
 var obj = {
 id: "awesome"
 };
 // use `obj` as `this` for `foo(..)` calls
 [1, 2, 3].forEach( foo, obj );
 // 1 awesome 2 awesome 3 awesome*/

/**
 * new Binding
 */

function foo(a)
{
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a);
