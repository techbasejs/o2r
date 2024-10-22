export interface Node {
    path: string;
    name: string;
    children?: Node[];
}

export function buildRouteTree(paths: string[]): Node[] {
    const tree: Node[] = [];

    paths.forEach(path => {
        const parts = path.split('/').map(part => part.replace('.tsx', ''));
        let currentLevel: Node[] = tree;

        parts.forEach((part, index) => {
            // Check if the part already exists at the current level
            let existingNode = currentLevel.find(node => node.name === part);

            if (!existingNode) {
                // If it's the last part, don't create children
                existingNode = { name: part, path };
                if (index < parts.length - 1) {
                    existingNode.children = [];
                }
                currentLevel.push(existingNode);
            }

            // Move to the next level
            currentLevel = existingNode.children || [];
        });
    });

    return tree;
}

export function convertPathToCamelCase(path: string) {
    return path
        .split('/') // Split by '/'
        .map(part => part.replace('.tsx', '').replace(/\[/g, '-').replace(/\]/g, 'P')) // Remove the extension
        .map(part => part.split('-') // Split by '-'
            .map(subPart => subPart.charAt(0).toUpperCase() + subPart.slice(1)) // Capitalize each part
            .join('')) // Join the parts back together
        .join(''); // Join all parts into a single string
}

export function getFileName(path: string) {
    // Split the path by '/' and get the last part, then remove the extension
    const parts = path.split('/');
    const fileWithExtension = parts[parts.length - 1];
    return fileWithExtension.replace('.tsx', '');
}
