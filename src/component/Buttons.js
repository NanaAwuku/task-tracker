const Buttons = ({ onClick, color, text }) => {
  return (
    <>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Buttons;
