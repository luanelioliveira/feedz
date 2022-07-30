import { FormEvent, useState } from 'react'; 

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import { Time } from './Time';

import styles from './Comment.module.css'

interface CommentProps {
  id: number;
  content: string;
  likes: number;
  commentedAt: Date;
  onDeleteComment: Function;
}

export function Comment({ id, content, likes, commentedAt, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(likes);

    function handleLikeComment(event: FormEvent) {
      event.preventDefault();
      setLikeCount(likeCount + 1);
    }

    function handleDeleteComment() {
      onDeleteComment(id)
    }

    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/luanelioliveira.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Luan Oliveira</strong>
                <Time date={commentedAt}/>
              </div>

              <button onClick={handleDeleteComment} title="Excluir comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Curtir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    )
  }
