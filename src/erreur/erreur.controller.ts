import { Controller,Post,Body } from '@nestjs/common';
import {Erreur} from './erreur.model';
import { ErreurService } from './erreur.service';

@Controller('Erreur')
export class ErreurController {
  constructor(private ErreurService: ErreurService) {}

  @Post()  // On a un POST à localhost:3000/Erreur on créer alors un échec 
  HandleEchec():Promise<(number|Erreur)[]>{
        console.log("POST pour une erreur"); //on crée un échec
        this.ErreurService.createErreur();
        console.log("Erreur sauvegardé"); //on renvoye la dernier erreur et son nombre 
        return this.ErreurService.dernierErreur();
      }
}
