// ClassButtons component

const ClassButtons = ({ activeClass, setActiveClass }) => {
  const classes = ["yoga", "group", "solo", "stretching"];

  return (
    <div className="d-flex justify-content-center gap-5 flex-wrap mb-5">
      {classes.map((cls) => (
        <button
          key={cls}
          className={`btn class-btn mx-4 ${activeClass === cls ? "active" : ""}`}
          onClick={() => setActiveClass(cls)}
        >
          {cls.charAt(0).toUpperCase() + cls.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ClassButtons;

