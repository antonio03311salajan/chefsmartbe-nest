import { Module } from '@nestjs/common';
import { UtilizatorService } from './utilizator.service';
import { UtilizatorController } from './utilizator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilizator } from './utilizator.entity';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from '../auth/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilizator]),
    JwtModule.register({
      secret: 'Secret1234!@#$',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UtilizatorController],
  providers: [LocalStrategy, JwtStrategy, UtilizatorService],
})
export class UtilizatorModule {}
