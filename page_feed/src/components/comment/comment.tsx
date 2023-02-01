import styles from './comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../avatar/avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/EduuBraga.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Braga</strong>
              <time title='01 de Fevereivo ás 13:36h' dateTime='2023-02-01 13:36:04'>
                Cerca de 2hr atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer className={styles.commentFooter}>
          <button>
            <ThumbsUp/>
            Aplaudir <span>3</span>
          </button>
        </footer>
      </div>
    </div>
  )
}