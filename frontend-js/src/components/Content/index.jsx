import styles from "./styles.module.css"

export function Content({ conteudo, data }) {
  return (
    <main className={styles.qualquerNome}>
      {conteudo}
      <p>{data}</p>
    </main>
  )
}
