import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, updateItem, deleteItem } from "../../features/itemsSlice";
import { RootState } from "../../store/store";
import { Item } from "../../types/Item";
import { fetchItems } from "../../services/api";
import ListItem from "../../components/ListItem";

const ItemList: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      dispatch(addItems(data));
    };
    fetchData();

    // eslint-disable-next-line
  }, []);

  const handleUpdateItem = (item: Item, title: string) => {
    dispatch(updateItem({ ...item, title }));
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-semibold mb-4">Todo List</h1>
      <div>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
