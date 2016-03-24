

function check(val, ty) {

    function hasType(val, ty) {
        function primitive(ty) {
            return ty === Number ||
                ty === String ||
                ty === Boolean;
        }

        if (primitive(ty)) 
            return ty(val) === val;
        else if (ty.constructor === Array) {
            return true;
            // This is a structural object type, handle it
        } else {
            return val instanceof ty;
        }
    }

    function checkFail() {
        throw "Check failure!";
    }
    
    if (hasType(val, ty)) {
        return val;
    } else {
        checkFail();
    }
}


/* 
Import with
if (typeof $$cts$$runtime === "undefined") {
    if (typeof require !== "undefined") require("./cts-runtime.js");
    else if (typeof document !== "undefined") { document.writeLine("<script src=\"cts-runtime.js\"></script>"); }
    else throw new Error("Could not load ConcreteTypeScript runtime!");
}
*/
