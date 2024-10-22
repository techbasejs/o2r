export const MIDDLEWARE_TPL = `const O2RMiddleware = ({ children, next }: { children: React.ReactNode; next: (context: any) => Promise<boolean> | boolean }) => {
    if (next(2)) {
        return children;
    }
    return <div>...Loading</div>
}`