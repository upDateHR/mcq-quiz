export function getApiUrl(path: string): string {
  const baseUrl = ((import.meta as any).env?.VITE_API_URL || '').replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
