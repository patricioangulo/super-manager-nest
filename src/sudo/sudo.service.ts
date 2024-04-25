import { Injectable } from '@nestjs/common';
import { CreateSudoDto } from './dto/create-sudo.dto';
import { UpdateSudoDto } from './dto/update-sudo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/0-database/sudo/schemas/user.schema';

@Injectable()
export class SudoService {
  constructor(@InjectModel(User.name, 'sudo') private sudoModel: Model<User>) { }

  async create(createSudoDto: CreateSudoDto):Promise<any> {
    const createSudo = new this.sudoModel(createSudoDto)
    return createSudo.save()
  }

  findAll() {
    return `This action returns all sudo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sudo`;
  }

  update(id: number, updateSudoDto: UpdateSudoDto) {
    return `This action updates a #${id} sudo`;
  }

  remove(id: number) {
    return `This action removes a #${id} sudo`;
  }
}
