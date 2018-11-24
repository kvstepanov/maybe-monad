export const Maybe = function (value) {
    this._value = value
}

Maybe.of = function (val) {
    return new Maybe(val)
}

Maybe.prototype.isNothing = function () {
    return (this._value === null || this._value === undefined)
}

Maybe.prototype.map = function (fn) {
    if (this.isNothing()) {
        return Maybe.of(null)
    }
    return Maybe.of(fn(this._value))
}

Maybe.prototype.flatten = function () {
    if (this._value instanceof Maybe) {
        return this._value
    } else {
        return this
    }
}

Maybe.prototype.flatMap = function (fn) {
    return this.flatten().map(fn)
}
