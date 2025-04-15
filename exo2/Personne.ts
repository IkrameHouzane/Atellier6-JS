// Personne.ts
import { Adresse } from './Adresse';

export class Personne {
    private nom: string;
    private sexe: 'M' | 'F'; 
    private adresses: Adresse[];

    constructor(nom: string, sexe: 'M' | 'F', adresses: Adresse[]) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }

    // Getters
    getNom(): string {
        return this.nom;
    }

    getSexe(): string {
        return this.sexe;
    }

    getAdresses(): Adresse[] {
        return this.adresses;
    }

    // Setters
    setNom(nom: string): void {
        this.nom = nom;
    }

    setSexe(sexe: 'M' | 'F'): void {
        this.sexe = sexe;
    }

    setAdresses(adresses: Adresse[]): void {
        this.adresses = adresses;
    }
}