import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Item from "./Item";

const Recipients = ({
  showRecipients,
  toggleRecipients,
  accType,
  recipients,
  changeActiveRecipient,
}) => {
  return (
    <>
      <div className="label-name">
        {accType === "teacher" ? "Students" : "Recipients"}
      </div>
      {showRecipients ? (
        <FaAngleDown className="expand-btn" onClick={toggleRecipients} />
      ) : (
        <FaAngleUp className="expand-btn" onClick={toggleRecipients} />
      )}
      {showRecipients &&
        recipients &&
        recipients.map((recipient) => (
          <Item
            key={recipient[0]}
            type="recipient"
            text={recipient[1]}
            changeActiveRecipient={() => changeActiveRecipient(recipient[0])}
          />
        ))}
    </>
  );
};

export default Recipients;
