// These argument types are official parts of the TS spec, so we can't avoid using any here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function replacer(this: any, key: string, value: any): any {
    const originalObject = this[key];

    if (originalObject instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(originalObject.entries()),
        };
    }

    return value;
}
