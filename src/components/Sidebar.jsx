import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1625306796650-0545cf38f5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/mewerton.png" />
                <strong>Mewerton Melo</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}