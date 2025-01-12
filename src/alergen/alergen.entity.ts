import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Reteta } from '../reteta/reteta.entity';

@Entity()
export class Alergen {
  @PrimaryColumn()
  alergenID: string;

  @Column()
  denumire: string;

  @ManyToMany(() => Reteta, (reteta) => reteta.alergeni)
  @JoinTable()
  reteta: Reteta[];
}
