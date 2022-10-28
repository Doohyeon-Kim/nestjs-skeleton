export class CustomError implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Custom DhkError";
        this.message = message ?? "This is a Custom Error";
        this.title = title ?? "Server Error";
        this.detail = detail ?? "Error occurred from Server";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
}

export class BadRequest implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Bad Request";
        this.message = message ?? "The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications.";
        this.title = title ?? "Bad Request";
        this.detail = detail ?? "Client sent an invalid request.";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
}

export class Unauthorized implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Unauthorized";
        this.message = message ?? "The request requires user authentication. The response MUST include a WWW-Authenticate header field containing a challenge applicable to the requested resource.";
        this.title = title ?? "Unauthorized";
        this.detail = detail ?? "앱을 다시 실행하거나 재로그인하시면 문제 없이 이용하실 수 있어요.";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
 
}

export class Forbidden implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Forbidden";
        this.message = message ?? "The server understood the request, but is refusing to fulfill it. Authorization will not help and the request should not be repeated. Error code response for missing or invalid authentication token.";
        this.title = title ?? "Forbidden";
        this.detail = detail ?? "서버가 요청을 이해했지만 수행하는 것을 거절했습니다. 토큰이 올바른지 확인해보세요.";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
}

export class NotFound implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Not found";
        this.message = message ?? "The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent. Used when the requested resource is not found, whether it doesn't exist or if there was a 401 or 403 that, for security reasons, the service wants to mask.";
        this.title = title ?? "NotFound";
        this.detail = detail ?? "요청한 리소스를 찾지 못했습니다.";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
}

export class Conflict implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Conflict";
        this.message = message ?? "The request could not be completed due to a conflict with the current state of the resource. Whenever a resource conflict would be caused by fulfilling the request.";
        this.title = title ?? "Conflict";
        this.detail = detail ?? "That request is a conflicting request.\\nPlease change the data and try again.";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
}

export class RequestTimeout implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Request Timeout";
        this.message = message ?? "The client did not produce a request within the time that the server was prepared to wait.";
        this.title = title ?? "시간이 초과되었어요.";
        this.detail = detail ?? "요청을 처리하는데 시간이 사전에 정의 된 시간을 초과했습니다.";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
}

export class InternalServerError implements DhkError {
    constructor(type?: string, message?: string, title?: string, detail?: string) {
        this.type = type ?? "Internal Server";
        this.message = message ?? "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.";
        this.title = title ?? "Internal Server.";
        this.detail = detail ?? "서버에 문제가 발생했어요.";
    }
    type: string;
    message: string;
    title: string;
    detail: string;
}

