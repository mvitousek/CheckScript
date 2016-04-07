function f(x:number, ...ys:number[]) {
  return x + ys[0];
}

f(1,2,3,4);
f(1);

function g<X>(x:X, ...ys:X[]) {
  return x;
}

g(1,2,3,4);
g(1);