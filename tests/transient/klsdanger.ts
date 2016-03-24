class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");

function doGreet(gr: Greeter) {
  return gr.greet();
}

function id(x:any): any {
    return x;
}

console.log(doGreet(id(42)));