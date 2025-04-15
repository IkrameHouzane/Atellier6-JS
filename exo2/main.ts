import { Adresse } from './Adresse';
import { Personne } from './Personne';
import { ListePersonnes } from './ListePersonnes';

// Création d'adresses
const adresse1 = new Adresse("123 Rue Anassi", "Casablanca", "75001");
const adresse2 = new Adresse("456 Rue Hassan 2", "Mohammedia", "69002");

// Création de personnes
const personne1 = new Personne("Ikrame", "F", [adresse1]);
const personne2 = new Personne("Wassim", "M", [adresse2]);

// Création de la liste
const liste = new ListePersonnes([personne1, personne2]);

// Tests des méthodes
console.log(liste.findByNom("Ikrame")?.getNom()); 
console.log(liste.findByCodePostal("75001"));    
console.log(liste.countPersonneVille("Mohammedia"));   