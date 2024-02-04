const Body = () => {
  return (
    <div id="home-body">
      <div id="body-L1">
        <div id="filter-btns">
          <h2>Filter products : </h2>
          <button>economic</button>
          <button>premium</button>
        </div>
        <div id="search">
          <input type="search" />
          <button>search</button>
        </div>
      </div>
      <div id="catalog"></div>
    </div>
  );
};
const Card = () => {
  return <div id="card"></div>;
};
export default Body;
