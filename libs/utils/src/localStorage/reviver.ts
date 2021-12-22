// These argument types are official parts of the TS spec, so we can't avoid using any here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reviver(key: string, value: any): any {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }

    return value;
}
