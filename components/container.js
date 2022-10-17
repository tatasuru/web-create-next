import styles from "styles/container.module.scss";

export default function Container({ children } ) {
  return (
    <div className={ styles.default }>
      { children }
    </div>
  );
}
