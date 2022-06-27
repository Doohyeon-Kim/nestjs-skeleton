
export class UserDto {
  user_id: string;
  email: string;
  nickname: string;
  currentHashedRefreshToken?: string;
}
