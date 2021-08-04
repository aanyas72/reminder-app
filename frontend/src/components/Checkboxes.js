const Checkboxes = ({ value, checked, handleChange }) => {
  return (
    <div className="checkboxes">
      <input type="checkbox" checked={checked} onChange={handleChange}></input>
      <div className="checkbox-value">{value}</div>
    </div>
  );
};
export default Checkboxes;
