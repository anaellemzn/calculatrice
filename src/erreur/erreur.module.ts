import { Module } from '@nestjs/common';
import { ErreurController } from './erreur.controller';
import { ErreurService } from './erreur.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Erreur} from './erreur.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Erreur])],
  controllers: [ErreurController],
  providers: [ErreurService],
  exports: [TypeOrmModule],
})
export class ErreurModule {}