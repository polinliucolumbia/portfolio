import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <p className="text-label text-muted">
            © {year} Polin Liu. All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4 sm:gap-6" role="list">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/art",      label: "Art"      },
                { href: "/about",    label: "About"    },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-2 px-1 text-label text-muted hover:text-ink transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@polinliu.com"
                  className="block py-2 px-1 text-label text-muted hover:text-ink transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
