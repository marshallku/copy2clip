export default async function copyToClipboard(value: string, cb?: () => void) {
    await navigator.clipboard.writeText(value);
    cb?.();
}
