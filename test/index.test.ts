import { describe, test, expect } from "vitest";
import { genReactRouter } from '../src';
import { ReactRouter, ReactRouterMiddleware } from "../src/types";
import { routeStr } from "./mockdata";

describe('test', () => {
    test('Basic', () => {
        const paths = [
            'index.tsx',
            'layout.tsx',
            'aaaa/index.tsx',
            'aaaa/bbbb.tsx',
            'aaaa/cccc.tsx',
            'aaaa/[oooo].tsx',
            'aaaa/dddd.tsx',
            "aaaa/layout.tsx",
            "aaaa/middleware.tsx",
            "bbbb/index.tsx",
            'bbbb/dddd.tsx',
            'bbbb/eeee-hggh.tsx',
            'bbbb/ffff.tsx',
            'cccc/middleware.tsx',
            'cccc/auth.tsx',
        ]

        const output = genReactRouter(paths)

        const output1 = genReactRouter(paths, {
            rootDir: 'src/pages/'
        })

        console.log(output1)

        // expect(routeStr).toMatch(output)

    })
})