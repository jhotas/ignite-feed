import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/jhotas.png" />
          <div className={styles.authorInfo}>
            <strong>Jean Oliveira</strong>
            <span>UI Designer</span>
          </div>
        </div>

        <time title='24 de Setembro de 2023 às 20:57' dateTime='2023-09-24 20:57:23'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

          <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
          </p>
      </div>
    </article>
  )
}