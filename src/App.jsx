import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role:'CTO @Rocketseat'
    },
    content:[
      {type: 'paragraph', content:'Fala pessoal 👋'},
      {type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'paragraph', content:'Acesse e deixe seu feedback'},
      {type: 'link', content:'devonlane.design'},
    ],
    publishedAt: new Date('2022-10-20 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/mewerton.png',
      name: 'Mewerton Melo',
      role:'Web Developer'
    },
    content:[
      {type: 'paragraph', content:'Fala pessoal 👋'},
      {type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'paragraph', content:'Acesse e deixe seu feedback'},
      {type: 'link', content:'devonlane.design'},
    ],
    publishedAt: new Date('2022-10-24 21:30:00')
  },
]



export function App() {
    return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

          </main>
        </div>

      </div>
  )
}




