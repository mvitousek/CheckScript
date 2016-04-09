interface Greetable {
    greet(message: string): boolean;
    size?: { width: number; height: number; };
    (source: string, subString: string): boolean;
}

interface Index {
    [name: string]: Greetable;
}

function sak(blah: string, ss: string) { return false; }
(<any>sak).greet = function (msg: string) { return true; };

function foo(x:Greetable) {
  x.greet("me");
  x("a", "b");
  x.size["width"];
}

function bar(x:Index) {
  x["hello"]
}

bar({"bluh":<any>sak})

interface MyAttempt {
    questions: { [s: number]: Greetable; };
}

function baz(z:MyAttempt) {
  z.questions[0]
}

baz({questions: [<any>sak]});

foo(<any>sak);
/* [InterfaceDeclaration(decorators=None,
name=Identifier(text=Greetable), typeParameters=None,
heritageClauses=None,
members=[MethodSignature(name=Identifier(text=greet),
questionToken=None, typeParameters=None,
parameters=[Parameter(decorators=None, dotDotDotToken=None,
name=Identifier(text=message), questionToken=None,
type=StringKeyword(), initializer=None)],
type=BooleanKeyword()),PropertySignature(name=Identifier(text=size),
questionToken=QuestionToken(),
type=TypeLiteral(members=[PropertySignature(name=Identifier(text=width),
questionToken=None,
type=NumberKeyword()),PropertySignature(name=Identifier(text=height),
questionToken=None,
type=NumberKeyword())])),CallSignature(typeParameters=None,
parameters=[Parameter(decorators=None, dotDotDotToken=None,
name=Identifier(text=source), questionToken=None,
type=StringKeyword(), initializer=None),Parameter(decorators=None,
dotDotDotToken=None, name=Identifier(text=subString),
questionToken=None, type=StringKeyword(), initializer=None)],
type=BooleanKeyword())]),InterfaceDeclaration(decorators=None,
name=Identifier(text=Index), typeParameters=None,
heritageClauses=None, members=[IndexSignature(decorators=None,
parameters=[Parameter(decorators=None, dotDotDotToken=None,
name=Identifier(text=name), questionToken=None, type=StringKeyword(),
initializer=None)],
type=TypeReference(typeName=Identifier(text=Greetable)))]),FunctionDeclaration(decorators=None,
asteriskToken=None, name=Identifier(text=sak), typeParameters=None,
parameters=[Parameter(decorators=None, dotDotDotToken=None,
name=Identifier(text=blah), questionToken=None, type=StringKeyword(),
initializer=None),Parameter(decorators=None, dotDotDotToken=None,
name=Identifier(text=ss), questionToken=None, type=StringKeyword(),
initializer=None)],
body=Block(statements=[ReturnStatement(expression=FalseKeyword())])),ExpressionStatement(expression=BinaryExpression(left=PropertyAccessExpression(expression=ParenthesizedExpression(expression=TypeAssertionExpression(type=AnyKeyword(),
expression=Identifier(text=sak))), dotToken=DotToken(),
name=Identifier(text=greet)), operatorToken=EqualsToken(),
right=FunctionExpression(asteriskToken=None, name=None,
typeParameters=None, parameters=[Parameter(decorators=None,
dotDotDotToken=None, name=Identifier(text=msg), questionToken=None,
type=StringKeyword(), initializer=None)],
body=Block(statements=[ReturnStatement(expression=TrueKeyword())])))),FunctionDeclaration(decorators=None,
asteriskToken=None, name=Identifier(text=foo), typeParameters=None,
parameters=[Parameter(decorators=None, dotDotDotToken=None,
name=Identifier(text=x), questionToken=None,
type=TypeReference(typeName=Identifier(text=Greetable)),
initializer=None)],
body=Block(statements=[ExpressionStatement(expression=CallExpression(expression=PropertyAccessExpression(expression=Identifier(text=x),
dotToken=DotToken(), name=Identifier(text=greet)),
arguments=[StringLiteral()])),ExpressionStatement(expression=CallExpression(expression=Identifier(text=x),
arguments=[StringLiteral(),StringLiteral()]))])),ExpressionStatement(expression=CallExpression(expression=Identifier(text=foo),
arguments=[TypeAssertionExpression(type=AnyKeyword(),
expression=Identifier(text=sak))]))] */