import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../comment/comment'
import { Avatar } from '../avatar/avatar'

import styles from './post.module.css'
import { useState } from 'react'

type Author = {
  avatarUrl: string,
  name: string,
  role: string
}

interface Props {
  content: any,
  author: Author,
  publishedAt: Date
}

export function Post({ content, author, publishedAt }: Props) {
  const [comments, setComments] = useState<string[]>(['Post muito massa hein?!'])
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: any) {
    event!.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: any) {
    setNewCommentText(event.target.value)
  }

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  )

  const pubishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {pubishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line: { type: string, content: string }, index: number) => {
          switch (line.type) {
            case 'paragraph':
              return <p key={index}>{line.content}</p>
            case 'link':
              return <p key={index}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment content={comment} />)
        })}
      </div>
    </article>
  )
}