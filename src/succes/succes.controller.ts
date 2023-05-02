import { Controller,Post,Body } from '@nestjs/common';
import { SuccesService } from './succes.service';
import { Succes } from './succes.entity';

@Controller('Succes')
export class SuccesController {
    constructor(private succesService:SuccesService ){}

    @Post() // On a un POST à localhost:3000/Succes
    handleSucces(@Body('timeTakenMs') timeTakenMs: number):Promise<[number,number]>{
        console.log("POST pour un succès ");// On sauvegarde le succès 
        this.succesService.createSucces(timeTakenMs);
        console.log("Succès sauvegardé");//  on renvoie le rapport general
        return this.succesService.reponseSucces(timeTakenMs);
    }
}