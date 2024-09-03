import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs, setDoc, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

function ToDoFormAndList() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  createUserWithEmailAndPassword(auth, email, password);
  signInWithEmailAndPassword(auth, email, password);
  setDoc(doc(db, 'collection', 'document'), { data: 'example' });

  useEffect(() => {
    const fetchData = async () => {
      const todosCol = collection(db, 'todos');
      const todoSnapshot = await getDocs(todosCol);
      const todos = todoSnapshot.docs.map(doc => ({ text: doc.data().text, id: doc.id }));
      setItems(todos);
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      fetchData();
    });

    return () => unsubscribe();
  }, [db]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      console.error('User not authenticated.');
      return;
    }

    const newItem = { text: itemText };
    const docRef = await addDoc(collection(db, "todos"), newItem);
    newItem.id = docRef.id;
    setItems([...items, newItem]);
    setItemText("");
  };

  const removeItem = async (item) => {
    await deleteDoc(doc(db, "todos", item.id));
    const filteredArray = items.filter(collectionItem => collectionItem.id !== item.id);
    setItems(filteredArray);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <p>
          Welcome, {user.email}! <button onClick={handleSignOut}>Sign out</button>
        </p>
      ) : (
        <p>Please sign in to manage your todos.</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={itemText}
          onChange={(event) => setItemText(event.target.value)}
          placeholder="Write a new todo here"
        />
        <input type='submit' value='Add' />
      </form>

      <ul>
        {loading && <p>Loading...</p>}
        {items.map(item => (
          <li key={item.id}>
            {item.text} <span onClick={() => removeItem(item)}> x </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoFormAndList;
