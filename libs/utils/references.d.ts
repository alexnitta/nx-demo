/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Window {
    interface Global {
        localStorage: {
            getItem: (key: string) => any;
            setItem: (key: string, value: string) => any;
        };
    }
}
