export const nav = [
  { href: "/", label: "首页" },
  { href: "/story", label: "品牌" },
  { href: "/collections", label: "器物" },
  { href: "/pattern", label: "纹样" },
  { href: "/gift", label: "礼赠" },
  { href: "/space", label: "空间" },
] as const;

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
