import './List.scss';

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const List = () => {
  return (
    <div className="list">
      {/* sidebar */}
      <Sidebar />

      <div className="listContainer">
        {/* navbar */}
        <Navbar />

        {/* data table */}
        data table
      </div>
    </div>
  );
};

export default List;
