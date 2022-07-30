
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

interface SidebarProps {
	name: string;
	role: string;
	avatarUrl: string;
}

export function Sidebar({ name, role, avatarUrl }: SidebarProps) {
    
	return (
		<aside className={styles.sidebar}>
			<img 
				className={styles.cover} 
				src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
			/>

			<div className={styles.profile}>
				<Avatar src={avatarUrl} />

				<strong>{name}</strong>
				<span>{role}</span>
			</div>
			
			<footer>
					<a href="#">
						<PencilLine size={20} /> 
						Editar seu perfil
					</a>
			</footer>
			
		</aside>
	);
}
