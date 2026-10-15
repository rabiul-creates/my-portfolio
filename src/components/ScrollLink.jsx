import { useLenis } from "lenis/react";

export default function ScrollLink({ href, children, className }) {
  const lenis = useLenis();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        lenis?.scrollTo(href);
      }}
    >
      {children}
    </a>
  );
}
