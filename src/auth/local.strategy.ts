import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UtilizatorService } from '../utilizator/utilizator.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: UtilizatorService) {
    super({
      usernameField: 'email',
    });
  }
}
