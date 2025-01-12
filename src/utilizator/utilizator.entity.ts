import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reteta } from '../reteta/reteta.entity';

@Entity()
export class Utilizator {
  @PrimaryGeneratedColumn()
  UtilizatorID: string;

  @Column()
  nume: string;

  @Column()
  email: string;

  @Column()
  parola: string;

  @Column({ default: 'utilizator' })
  rol: string;

  @Column()
  preferintaDieta: string;

  @ManyToMany(() => Reteta, (reteta) => reteta.utilizatori)
  @JoinTable()
  reteta: Reteta[];
}
