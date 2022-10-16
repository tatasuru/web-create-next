import Link from "next/link";

export default function Nav () {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
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
