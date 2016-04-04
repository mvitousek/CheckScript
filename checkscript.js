function check(val, ty, nullable) {
    function hasType(val, ty) {
        function primitive(ty) {
            return ty === 'number' ||
                ty === 'string' ||
                ty === 'boolean';
        }

        if (!ty)
            return true;
        else if (primitive(ty)) 
            return typeof val === ty;
        else if (ty === Array) {
            return val.constructor === Array;
        } else if (ty.constructor === Array) {
            if (typeof val !== 'object')
                return false;
            for (var i = 0; i < ty.length; i++) {
                if (!(ty[i] in val))
                    return false;
            }
            return true;
        } else if (ty instanceof Union) {
            for (var j = 0; j < ty.types.length; j++) {
                if (hasType(val, ty.types[j]))
                    return true;
            }
            return false;
        } else if (ty instanceof Intersection) {
            for (var j = 0; j < ty.types.length; j++) {
                if (!hasType(val, ty.types[j]))
                    return false;
            }
            return true;
        } else {
            return val instanceof ty;
        }
    }

    function checkFail() {
        throw new Error("Check failure!");
    }
    
    if (hasType(val, ty) || (nullable && val == null)) {
        return val;
    } else {
        checkFail();
    }
}

function Union() {
    this.types = Array.prototype.slice.call(arguments);
    return this;
} 

function Intersection() {
    this.types = Array.prototype.slice.call(arguments);
    return this;
} 

function TypeArgs(tys) {
    this.types = Array.prototype.slice.call(arguments);
    return this;
}
