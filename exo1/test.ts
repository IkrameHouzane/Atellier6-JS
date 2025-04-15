import { Point } from './Point';

//  Création de points et test des getters 
console.log("  1: Création et getters ");
const p1 = new Point(0, 0);
console.log("Point p1 : (" + p1.getAbs() + ", " + p1.getOrd() + ")");

const p2 = new Point(3, 4);
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
const distance = p1.calculerDistance(p2);
console.log("Distance entre p1 et p2: " + distance);

