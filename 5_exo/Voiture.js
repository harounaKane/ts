var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Voiture = /** @class */ (function () {
    function Voiture(_marque, _vitesse) {
        this._marque = _marque;
        this._vitesse = _vitesse;
    }
    Voiture.prototype.accelerer = function () {
        this._vitesse += 10;
    };
    Voiture.prototype.decelerer = function () {
        if (this._vitesse > 0) {
            this._vitesse -= 10;
        }
    };
    Object.defineProperty(Voiture.prototype, "marque", {
        get: function () { return this._marque; },
        set: function (marque) {
            this._marque = marque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Voiture.prototype, "vitesse", {
        get: function () { return this._vitesse; },
        set: function (vitesse) {
            this._vitesse = vitesse;
        },
        enumerable: false,
        configurable: true
    });
    return Voiture;
}());
var voiture = new Voiture("Audi", 0);
// voiture.accelerer();
// console.log(voiture.vitesse);
// voiture.decelerer();
// console.log(voiture.vitesse);
// voiture.decelerer();
// console.log(voiture.vitesse);
var VoitureSport = /** @class */ (function (_super) {
    __extends(VoitureSport, _super);
    function VoitureSport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VoitureSport.prototype.turbo = function () {
        this.vitesse += 50;
    };
    return VoitureSport;
}(Voiture));
// const vs = new VoitureSport("Ferrari", 0);
// vs.turbo();
// console.log(vs.vitesse);
// vs.decelerer();
// console.log(vs.vitesse);
var prenoms = ["toto", "tata"];
var prix = [10, 20];
var x = 10;
console.log(typeof x);
function retourner(val) {
    return val;
}
console.log(retourner(10));
console.log(retourner("toto"));
