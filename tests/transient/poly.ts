function h<X>(x:X) { return x; }

function f<X>(x:X[]) : X {
  return x[0];
}

function g<Y>(h:Y[]) : Y {
  return f(h)
}

function multi<X, Y>(a:X, b:Y) { }

function joint<X>(a:X, b:X):X { return a; }

joint(42,20);

g<number>([1])
h(10)

multi(42, "hello world");


class Greeter {
    greeting: string;
    othergreeting: string
    constructor(message: string) {
        this.greeting = this.othergreeting = message;
    }
    greet() : string {
        return "Hello, " + this.greeting;
    }
}

interface Foo {
  blah : number
}

h(new Greeter("hello"))
h({blah:42})

function take_a_foo(x:Foo) {
  h(x)
}

take_a_foo({blah:42})

interface A<X> {
  x: X
}

interface B<Y> extends A<Y> {
  y: Y
}

interface C extends B<number> {
  z: number
}

function lm(a:A<string>, b:B<boolean>, c:C) {
  a.x;
  b.y;
  c.z;
}