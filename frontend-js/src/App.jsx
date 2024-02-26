import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />
      <Content conteudo="Artigo" data={23} />
      <Content conteudo="Imagem" />
      <Content conteudo="Texto" />
      <Content />
    </>
  )
}

