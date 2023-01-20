/**
 * Created by jony on 1/13/17.
 */

function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name;
};
function Bar(name,label) {
    Foo.call( this, name );
    this.label = label;
}
// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`
Bar.prototype = Object.create( Foo.prototype );
// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!
Bar.prototype.myLabel = function() {
    return this.label;
};
var a = new Bar( "a", "obj a" );
a.myName(); // "a"
a.myLabel(); // "obj a"


// pre-ES6
// throws away default existing `Bar.prototype`
Bar.prototype = Object.create( Foo.prototype );
// ES6+
// modifies existing `Bar.prototype`
Object.setPrototypeOf( Bar.prototype, Foo.prototype );

/**
 * Inspecting “Class” Relationships
 */
// helper utility to see if `o1` is
// related to (delegates to) `o2`
function isRelatedTo(o1,
                     o2) {
    function F(){}
    F.prototype = o2;
    return o1 instanceof
        F;
}
var a = {};
var b = Object.create( a );
isRelatedTo( b, a ); // true