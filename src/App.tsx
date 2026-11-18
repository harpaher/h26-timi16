import "./App.css";
import type { Item } from "./type";
import { useState } from "react";

const startItems: Item[] = [
  { id: 1, text: "Mjólk", done: false },
  { id: 2, text: "Brauð", done: true },
  { id: 3, text: "Epli", done: false },
];

function App() {
  const [items, setItems] = useState<Item[]>(startItems);
  const [text, setText] = useState("");

  function handleSubmit(e: ChangeEvent) {
    e.preventDefault();
    if (text.trim() === "") return;

    const newItem: Item = { id: Date.now(), text: text.trim(), done: false };
    setItems([...items, newItem]);
    setText("");
  }

  function handleDelete(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <main>
      <h1>Innkaupalisti</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Hvað vantar á innkaupalistann?" />
        <button type="submit">Bæta við</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default App;
