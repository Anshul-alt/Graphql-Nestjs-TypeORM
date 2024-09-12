import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettingService } from './UserSettingService';
import { UserSettingsResolver } from 'src/graphql/resolver/UserSettingsResolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,],
})
export class UsersModule {}
