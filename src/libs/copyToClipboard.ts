export default async function copyToClipboard(value: string, cb?: () => void) {
    try {
        await navigator.clipboard.writeText(value);
    } catch {
        const textarea = document.createElement("textarea");

        textarea.value = value;
        document.body.append(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
    }
    cb?.();
}
