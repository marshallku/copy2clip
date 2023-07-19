export default function stringify(value: unknown) {
    switch (typeof value) {
        case "string":
            return value;
        case "number":
        case "boolean":
        case "undefined":
            return `${value}`;
        default:
            return JSON.stringify(value);
    }
}
