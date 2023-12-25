export function isPassAuthPages(urlPathname: string, pathnames: string[]) {
  return pathnames.some((path) => urlPathname.startsWith(path));
}
