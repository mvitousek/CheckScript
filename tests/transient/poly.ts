function h<X>(x:X) { return x; }

function f<X>(x:X[]) : X {
  return x[0];
}

function g<Y>(h:Y[]) : Y {
  return f<Y>(h)
}

function multi<X, Y>(a:X, b:Y) { }

g<number>([1])
h(10)

multi(42, "hello world");