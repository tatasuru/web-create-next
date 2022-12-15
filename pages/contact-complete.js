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
      <p className={ styles.p }>お問合せありがとうございました！</p>
    </Container>
  );
}
