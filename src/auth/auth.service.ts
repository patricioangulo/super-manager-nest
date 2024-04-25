import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SudoDto } from './dto/sudo.dto';
import { User } from 'src/0-database/sudo/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name, 'sudo') private sudoModel: Model<User>,
    private jwtService: JwtService
  ) { }

  async login(sudoDto: SudoDto): Promise<{ access_token: string }> {
    const user = await this.sudoModel.findOne({ name: sudoDto.name })
    const validatePassword = await user.validatePassword(sudoDto.password)
    if (!user || !validatePassword) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
    
  }

  /*async create(createSudoDto: CreateSudoDto): Promise<Sudo> {
    const createdSudo = new this.sudoModel(createSudoDto);
    return createdSudo.save()
  }*/

  async findAll() {
    return this.sudoModel.find()
  }

  /*async delete(deleteSudoDto:DeleteSudoDto): Promise<any> {
    return this.sudoModel.deleteOne(deleteSudoDto)
    // const remove = this.sudoModel.deleteOne

    
    // return deleteSudo.deleteOne()
  }*/

  getToken(): string {
    return 'akjsdfgkjhasgdfkjagsd'
  }
}
