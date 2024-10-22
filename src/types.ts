export type ReactRouter = {
    path?: string;
    element?: string;
    children?: ReactRouter[];
}

export type ReactRouterMiddleware = {
    name: string;
    paths?: string[];
}

export type ReactRouterOptions = {
    rootDir?: string;
}