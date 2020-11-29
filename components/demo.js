import styles from './demo.module.css'

export default function Demo({ children }) {
  return <div className={styles.demo}>{children}</div>
}