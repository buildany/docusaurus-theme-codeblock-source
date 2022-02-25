export const validUrl = (value: string | null | undefined): string | null => {
  let url;

  if (!value) {
    return null;
  }

  try {
    url = new URL(value);
  } catch (_) {
    return null;
  }

  return url.protocol === "http:" || url.protocol === "https:"
    ? url.href
    : null;
};
