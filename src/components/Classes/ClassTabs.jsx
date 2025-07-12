
const ClassTabs = ({ active, setActive }) => {
  const buttons = [
    { id: "yoga", label: "Yoga" },
    { id: "group", label: "Group" },
    { id: "solo", label: "Solo" },
    { id: "stretching", label: "Stretching" },
  ];

  
  return (
    <div className="d-flex justify-content-center gap-5 flex-wrap mb-5">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className={`btn class-btn mx-4 ${active === btn.id ? "active" : ""}`}
          onClick={() => setActive(btn.id)} //  burası ancak props doğru geldiyse çalışır
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};


export default ClassTabs;

