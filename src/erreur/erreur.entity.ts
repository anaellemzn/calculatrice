import{BaseEntity,PrimaryGeneratedColumn,CreateDateColumn,Entity} from 'typeorm';

@Entity('erreur')
export class Erreur extends BaseEntity {
    @PrimaryGeneratedColumn()
   id: number;
    @CreateDateColumn()
   created_at: Date;
}
