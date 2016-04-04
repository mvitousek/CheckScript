interface a {
  c : number
  b? : string
}

interface f extends a {
  x : number
  y? : number
}

function g(x:f) {
  x.x
  x.y
  x.b
  x.c
}

g({c:2,x:20})
g({x:30, c:33,y:40})