export const IS_DEV = process.env.NODE_ENV !== 'production';
export const BASEURL =
  process.env.PUBLIC_URL.length > 0
    ? new URL(process.env.PUBLIC_URL).pathname
    : '';
