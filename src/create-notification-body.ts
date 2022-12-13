import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(3, 240, {
    message: '$property deve estar entre $constraint1 e $constraint2',
  })
  content: string;

  category: string;
}
