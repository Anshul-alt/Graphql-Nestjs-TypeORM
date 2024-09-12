import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingsInput {
  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  recieveNotifications: boolean;

  @Field({ nullable: true, defaultValue: false })
  recieveEmails: boolean;
}
