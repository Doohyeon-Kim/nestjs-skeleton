interface DhkError {
    type: string;
    message: string;
    title: string;
    detail: string;
}

interface DhkErrorConstructor {
    new(message?: string): Error;
    (message?: string): Error;
    readonly prototype: Error;
}

declare var DhkError: DhkErrorConstructor;
