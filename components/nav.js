import Link from "next/link";
import styles from "styles/nav.module.scss";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a>TOP</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
