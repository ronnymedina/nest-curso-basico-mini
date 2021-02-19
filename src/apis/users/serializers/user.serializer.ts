import { Exclude, Expose } from 'class-transformer';

export class UserSerializer {
  @Exclude()
  _id: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  lastName: string;
}
