class Foo {
    constructor() { }
}

function f(x: number | Foo) {
    return x
}

f(new Foo())
f(42)

function g(x: (number | Foo)[]) {
  for (var l of x)
      console.log(l);
}

g([42, new Foo()]);

function h(x: number[][]) {
    x[0][0]
}

h([[1]])