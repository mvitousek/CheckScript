interface Foo {
    x : number
}

function f(v:Foo) {
    if (v.x)
        return 1
    else if (v.x || v.x && v.x)
        return 2
    else
        return ((v.x ? 1 : 2) + ((v.x && v.x || v.x) ? 1 : 2))
}

f({x:30})
        