import styles from "styles/two-column.module.scss";

export function Twocolumn({ children }) {
  return (
    <div className={styles.flexContainer}>
      { children }
    </div>
  )
}

export function TwocolumnMain({ children }) {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
}

export function TwocolumnSidebar({ children }) {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  );
}