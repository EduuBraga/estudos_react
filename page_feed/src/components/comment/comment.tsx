import styles from './comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../avatar/avatar'
import { useState } from 'react'

interface Props {
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: Props) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment (){
    setLikeCount(prevState => prevState + 1)
  }

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

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.commentFooter}>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}