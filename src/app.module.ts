import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SudoModule } from './sudo/sudo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI+'sudo', {connectionName: 'sudo'}),
    MongooseModule.forRoot(process.env.MONGO_URI+'kobrapp', {connectionName:'kobrapp'}),
    AuthModule,
    SudoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
