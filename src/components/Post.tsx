import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { Time } from './Time';

import styles from './Post.module.css';

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface PostContentLine {
  type: string;
  content: string;
}


interface PostProps {
  author: Author;
  content: PostContentLine[];
  tags: string[];
  publishedAt: Date;
}

export function Post({ author, content, tags, publishedAt }: PostProps) {
    const [comments, setComments] = useState([{
      id: 1,
      content: 'Post bacana heim!!',
      likes: 2,
      commentedAt: new Date('2022-07-28 12:00:00')
    }]);

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event: FormEvent) {
      event.preventDefault();

      setComments([...comments, { 
        id: comments.length + 1, 
        content: newCommentText, 
        likes: 0,
        commentedAt: new Date()
      }]);
      setNewCommentText('');
    }
    
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentId: number) {
      const commentsWithoutDeletedOne = comments.filter(comment => comment.id !== commentId);
      setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={ author.avatarUrl } />
            <div className={styles.authorInfo}>
              <strong>{ author.name }</strong>
              <span>{ author.role }</span>
            </div>
          </div>

          <Time date={publishedAt}/>
        </header>

        <div className={styles.content}>
          { 
            content.map(line => {
              if (line.type === 'paragraph') return <p key={line.content}>{line.content}</p>
              if (line.type === 'link') return <p key={line.content}><a href="#">{line.content}</a></p>
            }) 
          }

          <p>{ tags.map(tag => <a key={tag} href="#">#{tag} </a>)}</p>
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            placeholder='Deixe um comentário'
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
          />

          <footer>
            <button type='submit' disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          { comments.map(comment => 
              <Comment 
                key={comment.id}
                id={comment.id}
                content={comment.content} 
                likes={comment.likes}
                commentedAt={comment.commentedAt}
                onDeleteComment={deleteComment}
              />
            )
          }
        </div>
      </article>
    )
  }
