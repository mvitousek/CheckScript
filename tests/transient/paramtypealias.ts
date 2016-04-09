interface parammed<T> {
  x: T;
}

type Lazy<T> = T | (() => T);
type OrNum<T> = T | number;

function foo(x:OrNum<string>, ys:OrNum<string>[], z:Array<any>, w:parammed<number>) {
  ys[0]
  z[0]
}

foo("hello", [42], [1], {x:42});