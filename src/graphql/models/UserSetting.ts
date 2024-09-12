import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'userSettings'})
@ObjectType()
export class UserSetting {

  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  recieveNotifications: boolean;

  @Column()
  @Field({ defaultValue: false })
  recieveEmails: boolean;
}
