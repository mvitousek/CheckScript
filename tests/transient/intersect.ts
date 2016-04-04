interface a {
  x : number
}

interface b {
  y : number
}

function f(x: a&b) {
  x.y + x.x
}

f({x:42, y:32})