import styles from "styles/main.module.scss";

export default function Main({ title, subtitle, imageOn = false }) {
  return (
    <>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {imageOn && <figure>[画像]</figure>}
      </div>
    </>
  );
}
