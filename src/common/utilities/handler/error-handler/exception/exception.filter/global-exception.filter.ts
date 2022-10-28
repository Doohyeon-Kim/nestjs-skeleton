// import {ArgumentsHost, Catch, ExceptionFilter} from "@nestjs/common";
// import {Response} from "express";
// import {DhkException} from "../dcb.exception";
//
// @Catch()
// export  class GlobalExceptionFilter implements ExceptionFilter{
//     catch(exception: unknown, host: ArgumentsHost): any {
//
//         const ctx = host.switchToHttp();
//         const response = ctx.getResponse<Response>();
//         const request = ctx.getRequest<Request>();
//
//         switch (exception.constructor){
//             case DhkException:
//         }
//     }
// }
