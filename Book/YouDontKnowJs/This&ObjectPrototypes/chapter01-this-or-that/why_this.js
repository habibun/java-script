/**
 * Created by habibun on 12/28/16.
 */

/**
 * example using this
 * @returns {string}
 */
/*function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}
var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};
identify.call( me ); // KYLE
identify.call( you ); // READER
speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER*/


/**
 * example without this
 */
var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};
function identify(context) {
    return context.name.toUpperCase();
}
function speak(context) {
    var greeting = "Hello, I'm " + identify( context );
    console.log( greeting );
}
speak( you ); // READER
speak( me ); // Hello, I'm KYLE
