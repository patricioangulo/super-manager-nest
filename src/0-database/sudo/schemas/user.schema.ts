import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: true, unique:true})
  name: string;

  @Prop({required: true})
  password: string;

  @Prop({required: true})
  sudo: boolean;

  validatePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function(next){
  console.log('PRE SAVE!!!')
  if(this.isModified('password') || this.isNew){
      const document = this;

      bcrypt.hash(document.password, 10, (err, hash)=>{
          if(err){
              next(err);
          }else{
              document.password = hash;
              next();
          }
      })

  }else{
      next();
  }
})

UserSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};



