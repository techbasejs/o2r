import type { Plugin } from 'vite';
import { genReactRouter } from './index';
import fs from 'fs';
import { globSync } from 'glob'
import path from 'pathe'
const workDir = process.cwd()

export const generatePlugin = (): Plugin => {
    return {
        name: "generate-plugin",
        buildStart: () => {
            console.log('[route-generate-plugin]')
            bootstrap()
        },
        watchChange() {
            console.log('[route-generate-plugin]')
            bootstrap()
        },
    }
}

function bootstrap() {
    const vitePFolderPath = path.resolve(workDir, ".vite-p")

    if (!fs.existsSync(vitePFolderPath)) {
        fs.mkdirSync(vitePFolderPath);
    }
    const pageDir = path.resolve(workDir, "src/pages/");
    const pageDirPattern = path.resolve(pageDir, "**/*.tsx")
    const files = globSync(pageDirPattern).map((file: string) => path.resolve(file).replace(pageDir, ""))
    const routeStr = genReactRouter(files, {
        rootDir: pageDir,
    })
    fs.writeFileSync(path.resolve(vitePFolderPath, "routes.tsx"), routeStr, 'utf-8')
}