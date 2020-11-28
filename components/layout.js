import styles from './layout.module.css'

export default function Demo({ children }) {
  return <div className={styles.container}>{children}</div>
}