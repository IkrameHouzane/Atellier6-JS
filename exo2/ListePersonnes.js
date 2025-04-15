"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
var ListePersonnes = /** @class */ (function () {
    function ListePersonnes(personnes) {
        this.personnes = personnes;
    }
    // Getter/Setter
    ListePersonnes.prototype.getPersonnes = function () {
        return this.personnes;
    };
    ListePersonnes.prototype.setPersonnes = function (personnes) {
        this.personnes = personnes;
    };
    // Méthode findByNom
    ListePersonnes.prototype.findByNom = function (s) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            if (personne.getNom() == s) {
                return personne;
            }
        }
        return null;
    };
    // Méthode findByCodePostal
    ListePersonnes.prototype.findByCodePostal = function (cp) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            for (var _b = 0, _c = personne.getAdresses(); _b < _c.length; _b++) {
                var adresse = _c[_b];
                if (adresse.getCodePostal() == cp) {
                    return true;
                }
            }
        }
        return false;
    };
    // Méthode countPersonneVille
    ListePersonnes.prototype.countPersonneVille = function (ville) {
        var nombre = 0;
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            for (var _b = 0, _c = personne.getAdresses(); _b < _c.length; _b++) {
                var adresse = _c[_b];
                if (adresse.getVille() == ville) {
                    nombre++;
                }
            }
        }
        return nombre;
    };
    return ListePersonnes;
}());
exports.ListePersonnes = ListePersonnes;
