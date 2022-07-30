import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const user = {
  name: "Luan Eli Oliveira",
  role: "Software Engineer @ Nubank",
  avatarUrl: "https://github.com/luanelioliveira.png"
}

const posts = [
  {
    id: 1,
    author: {
      name: "Luan Eli Oliveira",
      role: "Software Engineer @ Nubank",
      avatarUrl: "https://github.com/luanelioliveira.png"
    },
    content: [
      { type: 'paragraph', content: "Pariatur mollit labore nostrud officia eu excepteur in ullamco elit. Et esse eiusmod excepteur cillum ad ipsum velit cillum consequat minim eu labore do ad. Magna voluptate officia reprehenderit excepteur esse ad eiusmod. Officia cupidatat minim exercitation culpa dolore in Lorem nostrud velit qui aute sunt duis." },
      { type: 'paragraph', content: "Adipisicing non qui nulla fugiat ad eiusmod dolore proident cillum exercitation aliqua quis reprehenderit. Irure et eiusmod occaecat reprehenderit. Labore eu velit veniam cillum ut minim duis incididunt non. Esse ex exercitation dolor labore id veniam nostrud esse voluptate cillum cillum laboris ad. Do ut ut velit labore excepteur laborum ad magna laborum ad incididunt ipsum est ut." },
      { type: 'paragraph', content: "Nostrud officia in quis mollit nisi. Tempor quis voluptate sint eu ut pariatur quis magna occaecat ullamco aute culpa reprehenderit. Sunt anim duis excepteur irure id incididunt ipsum laborum nostrud culpa." },
      { type: 'link', content: "google.com" },
    ],
    tags: [
      "tech", "react", "javascript"
    ],
    comments: [
      {
        author: {
          name: "Luan Eli Oliveira",
          avatarUrl: "https://github.com/luanelioliveira.png"
        },
        content: "Muito bom Luan!!"
      },
      {
        author: {
          name: "Diego Fernandes",
          avatarUrl: "https://github.com/diego3g.png"
        },
        content: "Ta top heim!!"
      }
    ],
    publishedAt: new Date('2022-07-28 12:00:00')
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      role: "Software Engineer @ Rocketseat",
      avatarUrl: "https://github.com/maykbrito.png"
    },
    content: [
      { type: 'paragraph', content: "Pariatur mollit labore nostrud officia eu excepteur in ullamco elit. Et esse eiusmod excepteur cillum ad ipsum velit cillum consequat minim eu labore do ad. Magna voluptate officia reprehenderit excepteur esse ad eiusmod. Officia cupidatat minim exercitation culpa dolore in Lorem nostrud velit qui aute sunt duis." },
      { type: 'paragraph', content: "Adipisicing non qui nulla fugiat ad eiusmod dolore proident cillum exercitation aliqua quis reprehenderit. Irure et eiusmod occaecat reprehenderit. Labore eu velit veniam cillum ut minim duis incididunt non. Esse ex exercitation dolor labore id veniam nostrud esse voluptate cillum cillum laboris ad. Do ut ut velit labore excepteur laborum ad magna laborum ad incididunt ipsum est ut." },
      { type: 'paragraph', content: "Nostrud officia in quis mollit nisi. Tempor quis voluptate sint eu ut pariatur quis magna occaecat ullamco aute culpa reprehenderit. Sunt anim duis excepteur irure id incididunt ipsum laborum nostrud culpa." },
      { type: 'link', content: "google.com" },
    ],
    tags: [
      "tech", "react", "javascript"
    ],
    comments: [],
    publishedAt: new Date('2022-07-28 12:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar name={user.name} role={user.role} avatarUrl={user.avatarUrl} />
        <main>
          { posts.map(post => <Post 
                                key={post.id} 
                                author={post.author} 
                                content={post.content} 
                                tags={post.tags}
                                publishedAt={post.publishedAt} 
                              />) 
          }
        </main>
      </div>
    </div>
  )
}
