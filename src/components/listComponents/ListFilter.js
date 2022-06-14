import "./listFilter.css";

const ListFilter = function (props) {
  const filterChangeHandler = function (e) {
    const selectedFilterValue = e.target.value;
    props.onSaveFilterData(selectedFilterValue);
  };

  return (
    <div className="list-filter__container">
      <div className="list-filter">
        <label className="list-filter__label">Filter</label>
        <select onChange={filterChangeHandler} className="list-filter__select">
          <option value="All">All Tasks</option>
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>
    </div>
  );
};

export default ListFilter;
