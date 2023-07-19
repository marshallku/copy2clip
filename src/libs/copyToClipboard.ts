import { stringify } from "../utils";

/**
 * Simply copies a value to clipboard
 *
 * @param value A value to copy
 * @param cb  Callback function
 */
export default async function copyToClipboard(value: unknown, cb?: () => void) {
    const stringifiedValue = stringify(value);

    try {
        await navigator.clipboard.writeText(stringifiedValue);
    } catch {
        const textarea = document.createElement("textarea");

        textarea.value = stringifiedValue;
        textarea.style.position = "fixed";
        textarea.style.width = "1px";
        textarea.style.height = "1px";
        textarea.style.top = "0";
        textarea.style.left = "-1px";
        document.body.append(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
    }
    cb?.();
}
