function f(ls:Array<number>) {
    ls[2]
    for (var x of ls) {
        console.log(x);
    }
}

f([1,2,3])