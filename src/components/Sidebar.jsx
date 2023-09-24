import { PencilSimpleLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1673214880362-213edf6a4530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/jhotas.png" />

        <strong>Jean Oliveira</strong>
        <span>UI Designer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight='bold' />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}