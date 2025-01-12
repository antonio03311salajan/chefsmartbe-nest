import { Body, Controller, Post } from '@nestjs/common';
import { UtilizatorService } from './utilizator.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUtilizatorDto } from './dto/create-utilizator.dto';

@Controller('utilizator')
export class UtilizatorController {
  constructor(
    private readonly utilizatorService: UtilizatorService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/register')
  async create(@Body() createUserDTO: CreateUtilizatorDto) {
    return await this.utilizatorService.create(createUserDTO);
  }
}
