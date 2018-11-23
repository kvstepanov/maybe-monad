export const Maybe = function (value) {
    this._value = value
}

Maybe.of = function (val) {
    return new Maybe(val)
}

Maybe.prototype.isNothing = function () {
    return (this._value === null || this._value === undefined)
}

Maybe.prototype.map = function (f) {
    if (this.isNothing()) {
        return Maybe.of(null)
    }
    return Maybe.of(f(this._value))
}

Maybe.prototype.flatten = function () {
    return this._value
}

