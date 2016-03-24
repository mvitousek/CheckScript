function greeter(person:string, x:Foo) {
    return "Hello, " + person;
}

function id(x:any): any {
    return x;
}

interface Foo {
  blah : number
}
var user = "Jane User";

console.log(greeter(id(42), {blah:42}));