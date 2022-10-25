import styles from "styles/contact.module.scss";
import Social from "@/components/social";

export default function Contact() {
  return (
    <>
      <div className={styles.stack}>
        <h3 className={styles.heading}>Contact</h3>
        <Social iconSize="30px" />
        <a style={{ display: "block" }} href="mailto:test@test.jp">
          test@test.jp
        </a>
      </div>
      <form action="https://ssgform.com/s/7HMCnlLoW7WT" method="post">
        <input type="text" name="お名前" required="required" />
        <input type="email" name="メールアドレス" required="required" />
        <textarea name="お問い合わせ内容" required="required"></textarea>
        <button type="submit">送信する</button>
      </form>
    </>
  );
}