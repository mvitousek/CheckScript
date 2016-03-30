class Foo {
    constructor() { }
}

function f(x: number | Foo) {
    return x
}

f(new Foo())
f(42)

function id(x):any { return x; }

f(id("hello"));