import {Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction} from "express";
import {DhkLogger} from "./logger";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        new DhkLogger().httpRequest(req);
        next();
    }
}
