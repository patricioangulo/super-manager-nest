import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SudoController } from './sudo.controller';
import { SudoService } from './sudo.service';
import { User, UserSchema } from 'src/0-database/sudo/schemas/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}], 'sudo')
  ],
  controllers: [SudoController],
  providers: [SudoService],
})
export class SudoModule {}
