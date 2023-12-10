import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
  
  export function Comment() {
    return (
      <div className={styles.comment}>
        <img src="https://github.com/jhotas.png" alt="" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Jean Oliveira</strong>
                <time title='24 de Setembro de 2023 às 20:57' dateTime='2023-09-24 20:57:23'>Cerca de 1h atrás</time>
              </div>

              <button title='Deletar comentário'>
                <Trash size={20} />
              </button>
            </header>

            <p>Bloons TD 6 é muito legal!!!</p>
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