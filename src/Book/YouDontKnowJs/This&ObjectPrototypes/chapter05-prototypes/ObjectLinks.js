/**
 * Created by jony on 1/13/17.
 */

var foo = {
    something: function() {
        console.log( "Tell me something good..." );
    }
};
var bar = Object.create( foo );
bar.something(); // Tell me something good...

/**
 * Links as Fallbacks?
 */
var anotherObject = {
    cool: function() {
        console.log( "cool!" );
    }
};
var myObject = Object.create( anotherObject );
myObject.cool(); // "cool!"