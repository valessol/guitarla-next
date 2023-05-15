import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const [activePath, setActivePath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router]);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/">
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="imagen logotipo"
          />
        </Link>
        <nav className={styles.navigation}>
          <Link href="/" className={activePath === "/" ? styles.active : ""}>
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={activePath === "/nosotros" ? styles.active : ""}
          >
            Nosotros
          </Link>
          <Link
            href="/blog"
            className={activePath === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href="/tienda"
            className={activePath === "/tienda" ? styles.active : ""}
          >
            Tienda
          </Link>
          <Link
            href="/carrito"
            className={activePath === "/carrito" ? styles.active : ""}
          >
            <Image
              width={30}
              height={25}
              src="/img/carrito.png"
              alt="acceder al carrito"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
