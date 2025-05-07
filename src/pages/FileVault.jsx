// src/pages/FileVault.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const FileVault = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      const querySnapshot = await getDocs(collection(db, "your-collection-name")); // replace with real collection
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDocs(items);
    };

    fetchDocs();
  }, []);

  return (
    <div>
      <h2>Your Firestore Documents</h2>
      <ul>
        {docs.map(doc => (
          <li key={doc.id}>{JSON.stringify(doc)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileVault;
