export async function sleep(ms: number) {
  console.log(`waiting for ${ms}ms`);
  return new Promise((res) => setTimeout(res, ms));
}

export function trimTrailingSlash(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function randomString(length: number): string {
  return Array.from({ length }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function timestamp(length: number): string {
  return Date.now()
    .toString()
    .slice(13 - length);
}
