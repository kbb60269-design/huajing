export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("http") || src.startsWith("/huajing/")) {
    return src;
  }
  return `/huajing${src}`;
}
