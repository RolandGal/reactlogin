import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import './Comments.css';

export function Comments({ videogameId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    async function fetchComments() {
      // Crear una consulta para obtener los comentarios del videojuego
      const q = query(
        collection(db, 'comments'),
        where('videogameId', '==', videogameId)
      );
      const querySnapshot = await getDocs(q);
      // Convertimos a un array de objetos más fácil de leer
      const fetchedComments = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setComments(fetchedComments);
      console.log(fetchedComments);
    }

    fetchComments();
  }, [videogameId]);

  async function addComment() {
    if (newComment.trim() === '') {
      return;
    }

    // Crear un nuevo documento para el comentario en la base de datos
    const docRef = await addDoc(collection(db, 'comments'), {
      videogameId,
      text: newComment,
      createdAt: new Date(),
      username: user.displayName,
      profileImage: user.photoURL,
    });

    setComments([
      ...comments,
      {
        id: docRef.id,
        videogameId,
        text: newComment,
        createdAt: new Date(),
        username: user.displayName,
        profileImage: user.photoURL,
      },
    ]);
    setNewComment('');
  }

  return (
    <div className="comment-box">
      <h4>Comments:</h4>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li
            key={comment.id}
            className={`comment-container ${index % 2 === 0 ? 'blue' : 'white'} ${
              index % 2 === 1 ? 'right' : ''
            }`}
          >
            <img
              className="userprofile-img"
              src={comment.profileImage}
              alt={`${comment.username} profile image`}
            />
            <span>
              {comment.username}: {comment.text}
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="comment-input"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button className="comment-btn" onClick={addComment}>
        Send
      </button>
    </div>
  );
}
