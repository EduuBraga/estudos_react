import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../comment/comment'
import { Avatar } from '../avatar/avatar'

import styles from './post.module.css'

type Author = {
  avatarUrl: string,
  name: string,
  role: string
}

interface post {
  content: any,
  author: Author,
  publishedAt: Date
}

export function Post({ content, author, publishedAt }: post) {
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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}