/**
 * Created by habibun on 12/28/16.
 */

/**
 * count not working as expected
 * @param num
 */
/*

function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    this.count++;
}
var count = 0;
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// how many times was `foo` called?
console.log( foo.count ); // 0 -- WTF?

*/

/**
 * same example creating another object to hold count property
 */
/*

function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    data.count++;
}

var data = {
    count: 0
};
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// how many times was `foo` called?
console.log( data.count ); // 4

*/

/**
 * use the foo identifier as a function object reference in each place
 */

/*

function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    foo.count++;
}

foo.count = 0;
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}

//foo:6
//foo: 7
//foo: 8
//foo: 9
// how many times was `foo` called?
console.log( foo.count ); // 4

*/

/**
 * force this actually to point the function object
 */
function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    // Note: `this` IS actually `foo` now, based on
    // how `foo` is called (see below)
    this.count++;
}

foo.count = 0;
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
// using `call(..)`, we ensure the `this`
// points at the function object (`foo`) itself
        foo.call( foo, i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// how many times was `foo` called?
console.log( foo.count ); // 4

