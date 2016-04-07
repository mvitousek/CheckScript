interface Foo {
    x: number
}

var a:Foo = {} as Foo;
a.x = 42;

var b:Foo = <Foo>{};
b.x = 42;


var ap:Foo = ({} as Foo);
ap.x = 42;

var bp:Foo = (<Foo>{});
bp.x = 42;

var ca = {};
var cb:Foo = ca as Foo;

var d:Foo = <Foo>ca;

[(ca as Foo), (<Foo>ca)];

if ((ca as Foo).x || (<Foo>ca).x && a.x) { }