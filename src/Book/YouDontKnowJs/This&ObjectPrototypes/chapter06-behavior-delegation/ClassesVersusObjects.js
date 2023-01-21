/**
 * Created by jony on 1/14/17.
 */

/**
 * creating UI widgets (buttons, drop-downs, etc.)
 */


/**
 * the “class” design in classic-style pure JS without any “class” helper library or syntax:
 */
// Parent class
function Widget(width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
}

Widget.prototype.render = function ($where) {
    if (this.$elem) {
        this.$elem.css({
            width: this.width + "px",
            height: this.height + "px"
        }).appendTo($where);
    }
};

// Child class
function Button(width, height, label) {
    // "super" constructor call
    Widget.call(this, width, height);
    this.label = label || "Default";

    this.$elem = $("<button>").text(this.label);
}

// make `Button` "inherit" from `Widget`
Button.prototype = Object.create(Widget.prototype);

// override base "inherited" `render(..)`
Button.prototype.render = function ($where) {
    // "super" call
    Widget.prototype.render.call(this, $where);
    this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick = function (evt) {
    console.log("Button '" + this.label + "' clicked!");
};

$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = new Button(125, 30, "Hello");
    var btn2 = new Button(150, 40, "World");
    btn1.render($body);
    btn2.render($body);
});


/**
 * how we’d implement the same code using class: - ES6 class sugar
 */
class Widget {
    constructor(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }

    render($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
}

class Button extends Widget {
    constructor(width, height, label) {
        super(width, height);
        this.label = label || "Default";
        this.$elem = $("<button>").text(this.label);
    }

    render($where) {
        // super($where);   //temporary comment
        this.$elem.click(this.onClick.bind(this));
    }

    onClick(evt) {
        console.log("Button '" + this.label + "' clicked!");
    }
}

$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = new Button(125, 30, "Hello");
    var btn2 = new Button(150, 40, "World");
    btn1.render($body);
    btn2.render($body);
});


/**
 * Delegating Widget Objects
 */
var Widget = {
    init: function (width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert: function ($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
};

var Button = Object.create(Widget);

Button.setup = function (width, height, label) {
    // delegated call
    this.init(width, height);
    this.label = label || "Default";
    this.$elem = $("<button>").text(this.label);
};

Button.build = function ($where) {
    // delegated call
    this.insert($where);
    this.$elem.click(this.onClick.bind(this));
};

Button.onClick = function (evt) {
    console.log("Button '" + this.label + "' clicked!");
};

$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    btn1.setup(125, 30, "Hello");
    var btn2 = Object.create(Button);
    btn2.setup(150, 40, "World");
    btn1.build($body);
    btn2.build($body);
});