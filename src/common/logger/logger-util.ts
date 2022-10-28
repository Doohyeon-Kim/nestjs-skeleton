import {Injectable} from "@nestjs/common";

@Injectable()
export class LoggerUtil {
    constructor() {
    }

    generateLogger(message: string, emoji: string): string {
        message = message.toString();
        let buffer: string[] = [];
        buffer.push('\n--------------------------------------------------');
        message.split('\n').forEach(messageLine => {
            buffer.push(`${emoji} ${messageLine}`);
        })
        buffer.push('--------------------------------------------------');
        message = buffer.join('\n');
        return message;
    }
}

@Injectable()
export class Emojis {
    log: string = '🦥';
    info: string = '💡';
    debug: string = '🐛';
    warning: string = '⚠️';
    error: string = '🛑';
    exception: string = '🚫';
    build: string = '🏗';
    robot: string = '🤖';
}
