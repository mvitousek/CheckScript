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

class A extends Greeter {
    anothergreet: string;
}

interface D extends A {
    foo?: number
}

class G implements D {
    bar : number;
    greeting: string;
    othergreeting: string
    anothergreet: string;
    greet() : string {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");

function doGreet(gr: Greeter) {
  return gr.greet();
}

console.log(doGreet(greeter));