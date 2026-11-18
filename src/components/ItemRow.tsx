import type { Item } from "../type";

type ItemRowProps = {
  item: Item;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export function ItemRow({ item, onDelete, onToggle }: ItemRowProps) {
  return (
    <li key={item.id} className={item.done ? "item done" : "item"}>
      <label>
        <input type="checkbox" checked={item.done} onChange={() => onToggle(item.id)} />
        {item.text}
      </label>
      <button className="delete" onClick={() => onDelete(item.id)}>
        X
      </button>
    </li>
  );
}

export default ItemRow;
