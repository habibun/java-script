/**
 * Created by jony on 1/13/17.
 */


/**
 * Class Theory
 */
/*class Task {
 id;
 }
 // constructor `Task()`
 Task(ID) {
 id = ID;
 }

 outputTask() {
 output( id );
 }

 class XYZ inherits Task {
 label;
 }
 // constructor `XYZ()`
 XYZ(ID,Label) { super( ID ); label = Label; }
 outputTask() { super(); output( label ); }

 class ABC inherits Task {
 // ...
 }*/

/**
 * Delegation Theory
 */
Task = {
    setID: function(ID) { this.id = ID; },
    outputID: function() { console.log( this.id ); }
};
// make `XYZ` delegate to `Task`
XYZ = Object.create( Task );
XYZ.prepareTask = function(ID,Label) {
    this.setID( ID );
    this.label = Label;
};
XYZ.outputTaskDetails = function() {
    this.outputID();
    console.log( this.label );
};
// ABC = Object.create( Task );
// ABC ... = ...

/**
 * Mental Models Compared
 */
//oo
function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function() {
    return "I am " + this.me;
};
function Bar(who) {
    Foo.call( this, who );
}
Bar.prototype = Object.create( Foo.prototype );
Bar.prototype.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};
var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );
b1.speak();
b2.speak();

//OLOO
Foo = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return "I am " + this.me;
    }
};
Bar = Object.create( Foo );
Bar.speak = function() {
    alert( "Hello, " + this.identify() + "." );
};
var b1 = Object.create( Bar );
b1.init("b1" );
var b2 = Object.create( Bar );
b2.init("b2" );
b1.speak();
b2.speak();