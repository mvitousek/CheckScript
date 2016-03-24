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
            // This is a structural object type
            for (var i = 0; i < ty.length; i++) {
                if (val[ty[i]] === undefined)
                    return false;
            }
            return true;
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


