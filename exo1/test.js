"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
//  Création de points et test des getters 
console.log("  1: Création et getters ");
var p1 = new Point_1.Point(0, 0);
console.log("Point p1 : (" + p1.getAbs() + ", " + p1.getOrd() + ")");
var p2 = new Point_1.Point(3, 4);
console.log("Point p2 : (" + p2.getAbs() + ", " + p2.getOrd() + ")");
console.log("\n");
// Modification avec les setters
console.log("  2: Setters ");
p1.setAbs(1);
p1.setOrd(1);
console.log("Point p1 : (" + p1.getAbs() + ", " + p1.getOrd() + ")");
console.log("\n");
// Calcul de distance
console.log(" 3: Calcul de distance");
var distance = p1.calculerDistance(p2);
console.log("Distance entre p1 et p2: " + distance);
