import { Personne } from './Personne';
import {Adresse} from './Adresse';

export class ListePersonnes {
    private personnes: Personne[];

    constructor(personnes: Personne[]) {
        this.personnes = personnes;
    }

    // Getter/Setter
    getPersonnes(): Personne[] {
        return this.personnes;
    }

    setPersonnes(personnes: Personne[]): void {
        this.personnes = personnes;
    }

    // Méthode findByNom
    findByNom(s: String): Personne | null {
        for(const personne of this.personnes){
            if(personne.getNom() == s){
                return personne ;
            }
        }
    return null ;   
    }

     // Méthode findByCodePostal
    findByCodePostal(cp: string): boolean {
    for(const personne of this.personnes){
        for(const adresse of personne.getAdresses()){
            if(adresse.getCodePostal() == cp){
                return true;
            }
        }
    }
     return false;
    }

    // Méthode countPersonneVille
    countPersonneVille(ville: string): number {
        let nombre = 0; 
        for(const personne of this.personnes){
            for(const adresse of personne.getAdresses()){ 
                if(adresse.getVille() == ville){
                    nombre++;
                }
            } 
        }
        return nombre;
    }

}