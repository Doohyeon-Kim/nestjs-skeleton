import {Logger} from "@nestjs/common";
import {
    BadRequest,
    Conflict, CustomError,
    Forbidden,
    InternalServerError,
    NotFound,
    Unauthorized
} from "../../../../error/errors";
import {DhkLogger} from "../../../../logger/logger";


export class DhkException {
    statusCode: number;
    error: DhkError;

    constructor(error: DhkError, statusCode: number) {
        this.error = error;
        this.statusCode = statusCode;
        new DhkLogger().error(error);
    }
}

export class CustomException extends DhkException {
    constructor(type?: string, message?: string, title?: string, detail?: string, statusCode?: number) {
        super(new CustomError(type, message, title, detail), statusCode ?? 500);
    }
}

export class BadRequestException extends DhkException {
    constructor(error?: BadRequest) {
        super(error ?? new BadRequest(), 400);
    }
}

export class UnauthorizedException extends DhkException {
    constructor(error?: Unauthorized ) {
        super(error ?? new Unauthorized(), 401);
    }
}

export class ForbiddenException extends DhkException {
    constructor() {
        super(new Forbidden(), 403);
    }
}

export class NotFoundException extends DhkException {
    constructor() {
        super(new NotFound(), 404);
    }
}

export class ConflictException extends DhkException {
    constructor() {
        super(new Conflict(), 409);
    }
}

export class InternalServerErrorException extends DhkException {
    constructor() {
        super(new InternalServerError(), 500);
    }
}
