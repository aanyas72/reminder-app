import { FaRegTrashAlt } from "react-icons/fa";

const Item = ({ text, deleteItem, type, changeActiveRecipient, id }) => {
  return (
    <div className="item">
      <div
        className="item-text"
        onClick={type === "recipient" ? changeActiveRecipient : undefined}
      >
        {text}
      </div>
      {type !== "recipient" && (
        <FaRegTrashAlt className="trash" onClick={() => deleteItem(id)} />
      )}
    </div>
  );
};

export default Item;
