import { Injectable } from '@nestjs/common';
import { Utilizator } from './utilizator.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUtilizatorDto } from './dto/create-utilizator.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilizatorService {
  constructor(
    @InjectRepository(Utilizator)
    private readonly usersRepository: Repository<Utilizator>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  async create(createUserDTO: CreateUtilizatorDto) {
    createUserDTO.parola = await bcrypt.hash(createUserDTO.parola, 12);
    return this.usersRepository.save(createUserDTO);
  }
}
