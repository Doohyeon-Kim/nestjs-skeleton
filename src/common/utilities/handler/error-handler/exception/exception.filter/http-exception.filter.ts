import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';
import {Request, Response} from 'express';
import {InternalServerError} from '../../../../../error/errors';
import {DhkException, InternalServerErrorException} from '../dhk.exception';

@Catch(DhkException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: DhkException, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        if (!(exception instanceof DhkException)) {
            exception = new InternalServerErrorException();
        }

        response
            .status(exception.statusCode)
            .json({
                statusCode: exception.statusCode,
                error: exception.error
            });
    }
}
