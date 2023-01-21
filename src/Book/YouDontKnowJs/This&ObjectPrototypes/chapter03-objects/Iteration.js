/**
 * Created by jony on 1/4/17.
 */

var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log( myArray[i] );
}
// 1 2 3


/**
 * for of loop
 */
var myArray = [ 1, 2, 3 ];
for (var v of myArray) {
    console.log( v );
}
// 1
// 2
// 3


/**
 *  Arrays have a built-in @@iterator
 */
var myArray = [ 1, 2, 3 ];
var it = myArray[Symbol.iterator]();

it.next();//{value:1, done:false }
it.next();//{value:2, done:false }
it.next();//{value:3, done:false }
it.next();//{done:true }


/**
 * It is possible to define your own default @@iterator for any object that you care to iterate over. For example:
 */

var myObject = {
    a: 2,
    b: 3
};
Object.defineProperty( myObject, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
            next: function () {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                };
                // iterate `myObject` manually
                var it = myObject[Symbol.iterator]();
                it.next(); // { value:2, done:false }
                it.next(); // { value:3, done:false }
                it.next(); // { value:undefined, done:true }
                // iterate `myObject` with `for..of`
                for (var v of myObject) {
                    console.log(v);
                }
            }
        }
    }
});
// 2
// 3


/**
 * random number generate
 */
var randoms = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {value: Math.random()};
            }
        };
    }
};
var randoms_pool = [];
for (var n of randoms) {
    randoms_pool.push(n);
    // don't proceed unbounded!
    if (randoms_pool.length === 100) break;
}