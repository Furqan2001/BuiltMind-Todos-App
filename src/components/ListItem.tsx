import React, { useState } from "react";
import { Item } from "../types/Item";

interface Props {
  item: Item;
  onUpdateItem: (item: Item, title: string) => void;
  onDeleteItem: (itemId: number) => void;
}

const ListItem: React.FC<Props> = ({ item, onUpdateItem, onDeleteItem }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(item.title);

  const handleUpdateItem = () => {
    onUpdateItem(item, editedTitle);
    setIsEditing(false);
  };

  const handleDeleteItem = () => {
    onDeleteItem(item.id);
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-3">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            autoFocus
            className="flex-grow mr-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          />
          <button onClick={handleUpdateItem}>Save</button>
        </>
      ) : (
        <>
          <span className="flex-grow pr-2">{item.title}</span>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none mr-3"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button
            onClick={handleDeleteItem}
            className="text-red-600 hover:text-red-800 focus:outline-none"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ListItem;
