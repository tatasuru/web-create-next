import Meta from "@/components/meta";
import Container from "@/components/container";
import Main from "@/components/main";
import styles from "styles/origin-contact.module.scss";
// import Image from "next/image";
import Eyecatch from "images/about.jpg";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="Contact"
        pageDesc="お問合せページです。"
        pageImg={Eyecatch.src}
        pageImgW={Eyecatch.width}
        pageImgH={Eyecatch.height}
      />
      <Main title="Contact" subtitle="コンタクトページです。" />
      <figure></figure>
      <form
        className={styles.form}
      >
        <input
          className={styles.form}
          type="text"
          name="お名前"
          required="required"
        />
        <input
          className={styles.form}
          type="email"
          name="メールアドレス"
          required="required"
        />
        <textarea
          className={styles.form}
          name="お問い合わせ内容"
          required="required"
        ></textarea>
        <button
          className={styles.form} type="submit">
          確認画面へ
        </button>
      </form>
    </Container>
  );
}
