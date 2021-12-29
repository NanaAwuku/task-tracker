import Buttons from "./Buttons";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Buttons
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
