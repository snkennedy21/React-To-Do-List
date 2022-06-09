import "./listFilter.css";

const ListFilter = function () {
  return (
    <div className="list-filter__container">
      <div className="list-filter">
        <label className="list-filter__label">Filter</label>
        <select className="list-filter__select">
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">Low Priority</option>
        </select>
      </div>
    </div>
  );
};

export default ListFilter;
