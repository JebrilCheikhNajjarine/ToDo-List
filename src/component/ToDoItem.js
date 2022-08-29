function ToDoItems(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li className="text-left relative p-1">{props.text}</li>
    </div>
  );
}
export default ToDoItems;
