"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    // Getter pour abs
    Point.prototype.getAbs = function () {
        return this.abs;
    };
    // Setter pour abs
    Point.prototype.setAbs = function (newAbs) {
        this.abs = newAbs;
    };
    // Getter pour ord
    Point.prototype.getOrd = function () {
        return this.ord;
    };
    // Setter pour ord
    Point.prototype.setOrd = function (newOrd) {
        this.ord = newOrd;
    };
    // Méthode calculant la distance entre deux points
    Point.prototype.calculerDistance = function (p) {
        var dx = this.abs - p.getAbs();
        var dy = this.ord - p.getOrd();
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    return Point;
}());
exports.Point = Point;
