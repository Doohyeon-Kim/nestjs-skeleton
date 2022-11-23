import {Emojis, LoggerUtil} from "./logger-util";


interface DhkLoggerInterface {
    log(message: string): void;

    error(error: DhkError): void;

    warning(message: string): void;

    info(message: string): void;

    build(message: string): void;

    debug(message: string): void;

    httpRequest({req, headers}: HttpRequestLogParams): void;

    httpResponse(response: object): void;
}

@Injectable()
export class DhkLogger implements DhkLoggerInterface {
    constructor(
        private readonly loggerUtil: LoggerUtil = new LoggerUtil(),
        private readonly emojis: Emojis = new Emojis()) {

    }

    log(message: string): void {
        Logger.log(this.loggerUtil.generateLogger(message, this.emojis.log));
    }

    info(message: string): void {
        Logger.verbose(this.loggerUtil.generateLogger(message, this.emojis.info));
    }

    warning(message: string): void {
        Logger.warn(this.loggerUtil.generateLogger(message, this.emojis.warning));
    }

    error(error: DhkError): void {
        const message = `type: ${error.type}\nmessage: ${error.message}\ntitle: ${error.title}\ndetail: ${error.detail}`;
        Logger.error(this.loggerUtil.generateLogger(message, this.emojis.error), `${new Error().stack}`, `${error.type}`);
    }

    debug(message: string): void {
        Logger.debug(this.loggerUtil.generateLogger(message, this.emojis.debug));
    }

    build(message: string): void {
        Logger.log(this.loggerUtil.generateLogger(message, this.emojis.build));
    }

    httpRequest(req, headers = false): void {
        let appConfig: AppConfig = new AppConfig();
        Logger.log(this.loggerUtil.generateLogger(`[Http Request: ${currentTime()}]\nurl: ${appConfig.serverUrl}${req.url ?? ""}\nheaders: ${headers == false ? "omitted" : JSON.stringify(req.headers) ?? ""}\ntoken: ${req.headers['authorization'] === undefined ? 'null' : req.headers['authorization'].substring(7)}\nbody: ${JSON.stringify(req.body) ?? ""}`, this.emojis.robot));
    }

    httpResponse(response: object): void {
        Logger.log(this.loggerUtil.generateLogger(`[Http Response: ${currentTime()}]\n${JSON.stringify(response)}`, this.emojis.robot));
    }
}

// interface HttpRequestLogParams {
//     endPoint?: string;
//     param?: any;
//     headers?: any;
//     body?: any;
// }

interface HttpRequestLogParams {
    req: Request,
    headers?: boolean
}

