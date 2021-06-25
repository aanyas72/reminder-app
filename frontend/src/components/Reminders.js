import Item from "./Item";

const Reminders = () => {
  return (
    <div className="reminders">
      <div className="label-name">Reminders</div>
      <Item text="Read a book" />
      <Item text="Feed Dog" />
      <Item text="Clean room" />
    </div>
  );
};

export default Reminders;
