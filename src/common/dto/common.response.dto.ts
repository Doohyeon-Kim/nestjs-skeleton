import { ApiProperty } from '@nestjs/swagger';

export class CommonResponseDto {
    @ApiProperty()
    status_code: number;
    @ApiProperty()
    data: any;
}
