export const removeTrailingSlash = (url: string) =>
    url.endsWith('/') ? url.slice(0, -1) : url;