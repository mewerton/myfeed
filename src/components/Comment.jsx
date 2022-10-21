import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/mewerton.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mewerton Melo</strong>
                            <time title='13 de Maio às 08:00h' dateTime='2022-05-13 08:00:00'>Cerca de 1 hora atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>Muito bom Mew, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>    

            </div>

        </div>
    )
}