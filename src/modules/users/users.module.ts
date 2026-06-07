import { Module } from '@nestjs/common';
import { User, UserSchema } from './schemas/user/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersRepository],
  controllers: [],
  exports: [UsersRepository],
})
export class UsersModule {}
