import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Erreur } from './erreur.entity';

@Injectable()
export class ErreurService {
    constructor(
        @InjectRepository(Erreur)
        private erreurRepository: Repository<Erreur>
    ){}

    async createErreur(): Promise<Erreur> {
        console.log("Sauvegarde de l'échec dans la base de donnée");//sauvegarde de l'echec
        const erreur = new Erreur();
        console.log(erreur) // On l'affiche pour vérifier
        await erreur.save();
        return erreur;
    }

    async dernierErreur(){// On cherche la derniere erreur
        console.log("Recherche de la derniere erreur");
        const reponse = await this.erreurRepository.find();// on cherche le dernier élément de la liste car c'est par ordre chronologique
        return [reponse[reponse.length-1],reponse.length];  // On retourne la derniere erreur et son nombre
    }
}
