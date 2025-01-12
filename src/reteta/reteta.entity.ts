import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { CategorieReteta } from '../categorieReteta/categorieReteta.entity';
import { Utilizator } from '../utilizator/utilizator.entity';
import { Ingredient } from '../ingredient/ingredient.entity';
import { Alergen } from '../alergen/alergen.entity';

@Entity()
export class Reteta {
  @PrimaryColumn()
  RetetaID: string;

  @Column()
  nume: string;

  @Column()
  instuctiuni: string;

  @Column()
  tip_dieta: string;

  @ManyToOne(() => CategorieReteta, (categorieReteta) => categorieReteta.reteta)
  categorieReteta: CategorieReteta;

  @ManyToMany(() => Utilizator, (utilizator) => utilizator.reteta)
  @JoinTable()
  utilizatori: Utilizator[];

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.reteta)
  @JoinTable()
  ingrediente: Ingredient[];

  @ManyToMany(() => Alergen, (alergen) => alergen.reteta)
  @JoinTable()
  alergeni: Alergen[];
}
