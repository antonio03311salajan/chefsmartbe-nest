import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Reteta } from '../reteta/reteta.entity';

@Entity()
export class Ingredient {
  @PrimaryColumn()
  ingredientID: string;

  @Column()
  denumire: string;

  @Column()
  cantitate: number;

  @ManyToMany(() => Reteta, (reteta) => reteta.ingrediente)
  @JoinTable()
  reteta: Reteta[];
}
