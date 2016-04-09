interface Foo {
  x: number
}

function isFoo(x:any) : x is Foo {
  return x.x
}

function bar(x: any) {
  if (isFoo(x))
    42
  else
    777
}

bar({x:20})

class MyFileSystemObject {
    isMyFile(): this is MyFile { return this instanceof MyFile; }
    isDirectory(): this is Directory { return this instanceof Directory;}
    isNetworked(): this is (Networked & this) { return this.networked; }
    constructor(public path: string, private networked: boolean) {}
}

class MyFile extends MyFileSystemObject {
    constructor(path: string, public content: string) { super(path, false); }
}
class Directory extends MyFileSystemObject {
    children: MyFileSystemObject[];
}
interface Networked {
    host: string;
}

let fso: MyFileSystemObject = new MyFile("foo/bar.txt", "foo");
if (fso.isMyFile()) {
    fso.content; // fso is MyFile
}
else if (fso.isDirectory()) {
    fso.children; // fso is Directory
}
else if (fso.isNetworked()) {
    fso.host; // fso is networked
}


