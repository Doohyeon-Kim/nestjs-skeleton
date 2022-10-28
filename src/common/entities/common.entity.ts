import { AfterLoad, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {formatToDateTimeString} from "../utilities/handler/format-handler/time-format.handler.";

export class CommonEntity {
    @CreateDateColumn()
    @ApiProperty()
    created_at: string;

    @UpdateDateColumn()
    @ApiProperty()
    updated_at: string;

    @DeleteDateColumn({ select: false })
    @ApiProperty()
    deleted_at: string;

    @AfterLoad()
    dateFormatToString() {
        this.created_at = formatToDateTimeString(this.created_at);
        this.updated_at = formatToDateTimeString(this.updated_at);
        this.deleted_at = formatToDateTimeString(this.deleted_at);
    }
}
