import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'
  
  export function Comment() {
    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/jhotas.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Jean Oliveira</strong>
                <time title='24 de Setembro de 2023 às 20:57' dateTime='2023-09-24 20:57:23'>Cerca de 1h atrás</time>
              </div>

              <button title='Deletar comentário'>
                <Trash size={24} />
              </button>
            </header>

            <p>Sou um comentário!</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    )
  }