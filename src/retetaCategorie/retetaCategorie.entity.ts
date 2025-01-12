import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Reteta } from '../reteta/reteta.entity';
import { CategorieReteta } from '../categorieReteta/categorieReteta.entity';

@Entity()
export class RetetaCategorie {
  @PrimaryColumn()
  retetaCategorieID: string;

  @ManyToOne(() => Reteta, (reteta) => reteta.categorieReteta)
  reteta: Reteta;

  @ManyToOne(
    () => CategorieReteta,
    (categorieReteta) => categorieReteta.categorieRetetaID,
  )
  categorieReteta: CategorieReteta;
}
