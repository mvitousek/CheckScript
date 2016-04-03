function h<X>(x:X) { return x; }

function f<X>(x:X[]) : X {
  return x[0];
}

function g<Y>(h:Y[]) : Y {
  return f(h)
}

function multi<X, Y>(a:X, b:Y) { }

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