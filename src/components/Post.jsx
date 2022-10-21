import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
           <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/mewerton.png" alt="" />
                <div className={styles.authorInfo}>
                    <strong>Mewerton Melo</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title='13 de Maio às 08:00h' dateTime='2022-05-13 08:00:00'>Publicado há 1 hora</time>
           </header>

           <div className={styles.content}>
                <p>Fala pessoal 👋</p>
                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>
                <p>Acesse e deixe seu feedback </p>
                <p>👉{" "}<a href="">devonlane.design</a></p>
                <p>
                    <a href="">#uiux</a>{" "}
                    <a href="">#userexperience</a>{" "}
                    <a href="">#userexperience2</a>
                </p>
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
                <Comment/>
                <Comment/>
                <Comment/>
           </div>
        </article>
    
    )
}