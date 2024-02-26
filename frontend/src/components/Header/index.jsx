import styles from "./styles.module.css"

export function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}
