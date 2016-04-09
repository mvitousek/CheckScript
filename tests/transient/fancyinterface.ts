function f(x:{y:number}) { x.y }

f({y:42})

function g(x:{y:number}[]) { x[0].y }

g([{y:42}])