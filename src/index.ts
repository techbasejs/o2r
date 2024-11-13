import { ReactRouter, ReactRouterOptions } from "./types"
import { genArrayFromRaw, genImport } from 'knitwork';
import { buildRouteTree, convertPathToCamelCase, Node } from "./utils";
import path from "pathe";

export const genReactRouter = (paths: string[], options?: ReactRouterOptions) => {
    const routeTree = buildRouteTree(paths)

    const reactRoutes = buildReactRoutes(routeTree);

    const reactRouteImports = buildReactRouteImports(paths, options);

    const reactRouterStr = [
        reactRouteImports.join('\n'),
        `export const routes = ${genArrayFromRaw(reactRoutes)}`,
    ].join('\n')
    return reactRouterStr;
}


const buildReactRoutes = (routes: Node[]) => {
    const routeMap = [];
    const middleware = getMiddleware(routes);

    for (const route of routes) {
        if (route.name === 'layout' || route.name === 'middleware') {
            continue;
        }

        let element = `<${convertPathToCamelCase(route.path)} />`;

        if (middleware) {
            const middlewareComponent = convertPathToCamelCase(middleware.path);
            element = `<${middlewareComponent}>${element}</${middlewareComponent}>`
        }
        let path = route.name.replace(/\[(.+?)\]/, ':$1');
        path = path === 'index' ? '' : path;
        const r: ReactRouter = {
            path: `"${path}"`,
            element: element,
            children: []
        };

        if (route.children && route.children.length > 0) {
            delete r.element;
            r.children = buildReactRoutes(route.children)

        }

        routeMap.push(r)
    }

    const layout = getLayout(routes)
    if (layout) {
        const element = `<${convertPathToCamelCase(layout.path)} />`;
        return [
            {
                element,
                children: routeMap
            }
        ]
    }

    return routeMap;
}

export const buildReactRouteImports = (paths: string[], options?: ReactRouterOptions) => {
    const rootDir = options?.rootDir || "";
    return paths.map(_path => genImport(path.resolve(rootDir, _path), convertPathToCamelCase(_path)))
}

export const getLayout = (routes: Node[]) => {
    return routes.find(route => route.name === 'layout')
}

export const getMiddleware = (routes: Node[]) => {
    return routes.find(route => route.name === 'middleware')
}