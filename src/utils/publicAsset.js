export function publicAsset(path) {
  if (!path) return "";
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  const cleanPath = String(path).replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
