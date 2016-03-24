function greeter(person:string, x:Foo): Foo {
    return x
}

interface Foo {
  blah : any
}
var user = "Jane User";

greeter(user, {blah:42});