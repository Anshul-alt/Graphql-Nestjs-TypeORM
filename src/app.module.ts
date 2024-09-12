import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserSettingsResolver } from './graphql/resolver/UserSettingsResolver';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSetting';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser123',
      database:
        process.env.NODE_ENV === 'TEST'
          ? 'graphql_tutorial_test'
          : 'graphql_tutorial',
      entities: [User, UserSetting],
      synchronize: true,
      logging: false,
    }),
    UsersModule
  ],
  controllers: [],
  providers: [UserSettingsResolver],
})
export class AppModule {}
