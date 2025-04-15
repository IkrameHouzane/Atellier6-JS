"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Adresse_1 = require("./Adresse");
var Personne_1 = require("./Personne");
var ListePersonnes_1 = require("./ListePersonnes");
// Création d'adresses
var adresse1 = new Adresse_1.Adresse("123 Rue Anassi", "Casablanca", "75001");
var adresse2 = new Adresse_1.Adresse("456 Rue Hassan 2", "Mohammedia", "69002");
// Création de personnes
var personne1 = new Personne_1.Personne("Ikrame", "F", [adresse1]);
var personne2 = new Personne_1.Personne("Wassim", "M", [adresse2]);
// Création de la liste
var liste = new ListePersonnes_1.ListePersonnes([personne1, personne2]);
// Tests des méthodes
console.log((_a = liste.findByNom("Ikrame")) === null || _a === void 0 ? void 0 : _a.getNom());
console.log(liste.findByCodePostal("75001"));
console.log(liste.countPersonneVille("Mohammedia"));
