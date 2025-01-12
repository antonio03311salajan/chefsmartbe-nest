import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alergen } from './alergen/alergen.entity';
import { CategorieReteta } from './categorieReteta/categorieReteta.entity';
import { Ingredient } from './ingredient/ingredient.entity';
import { Reteta } from './reteta/reteta.entity';
import { RetetaCategorie } from './retetaCategorie/retetaCategorie.entity';
import { Utilizator } from './utilizator/utilizator.entity';
import { UtilizatorModule } from './utilizator/utilizator.module';

const ENTITIES = [
  Alergen,
  CategorieReteta,
  Ingredient,
  Reteta,
  RetetaCategorie,
  Utilizator,
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: ENTITIES,
      synchronize: true,
    }),
    UtilizatorModule,
  ],
})
export class AppModule {}
