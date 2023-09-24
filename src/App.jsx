import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Jean Oliveira" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cum porro architecto atque animi quibusdam in. Ratione minus incidunt enim tempora vero expedita laudantium facilis, labore praesentium, voluptatum ipsum odit." />
          <Post author="Jean Oliveira" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cum porro architecto atque animi quibusdam in. Ratione minus incidunt enim tempora vero expedita laudantium facilis, labore praesentium, voluptatum ipsum odit." />
        </main>
      </div>
    </>
  )
}

export default App

