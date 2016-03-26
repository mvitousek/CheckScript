function greeter(person:string, x:Foo) {
    x.blah
    return "Hello, " + person;
}

interface Foo {
  blah : number
}
var user = "Jane User";

console.log(greeter(user, {blah:42}));