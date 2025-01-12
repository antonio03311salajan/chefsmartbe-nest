import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Reteta } from '../reteta/reteta.entity';

@Entity()
export class CategorieReteta {
  @PrimaryColumn()
  categorieRetetaID: string;

  @Column()
  nume: string;

  @OneToMany(() => Reteta, (reteta) => reteta.categorieReteta)
  reteta: Reteta[];
}
