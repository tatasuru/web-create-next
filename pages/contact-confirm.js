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
      <form action="https://ssgform.com/s/7HMCnlLoW7WT" method="post">
        <input type="text" name="お名前" required="required" />
        <input type="email" name="メールアドレス" required="required" />
        <textarea name="お問い合わせ内容" required="required"></textarea>
        <button type="submit">送信する</button>
      </form>
    </Container>
  );
}
