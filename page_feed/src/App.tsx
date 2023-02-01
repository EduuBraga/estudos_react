import { Header } from "./components/header/header"
import { Sidebar } from "./components/sidebar/sidebar"
import { Post } from "./components/post/post"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Eduardo Braga',
      avatarUrl: 'https://github.com/EduuBraga.png',
      role: 'Dev Front-End'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-31 08:30:00')
  },
  {
    author: {
      id: 2,
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-01 10:40:00')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />

        <main>
          {posts.map((post, index: number) => {

            return (
              <Post 
                key={index}
                content={post.content}
                author={post.author}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}