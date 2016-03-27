function f(ls:Array<number>) {
    for (var x of ls) {
        console.log(x);
    }
}

function id(x:any) { return x; }

f(id([1,2,"a"]))