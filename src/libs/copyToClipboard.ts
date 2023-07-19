export default async function copyToClipboard(value: string, cb?: () => void) {
    try {
        await navigator.clipboard.writeText(value);
    } catch {
        const textarea = document.createElement("textarea");

        textarea.value = value;
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
