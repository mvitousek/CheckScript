class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() : string {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");

function doGreet(gr: Greeter) {
  return gr.greet();
}

console.log(doGreet(greeter));