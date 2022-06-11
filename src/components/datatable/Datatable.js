import './Datatable.scss';
import { Link } from 'react-router-dom';

// import material ui data-grid component
import { DataGrid } from '@mui/x-data-grid';

// import data
import { userColumns, userRows } from '../../datatablesource';

const Datatable = () => {
  // column to detele and view data
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {/* title */}
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" clasName="link">
          Add New
        </Link>
      </div>

      {/* data table */}
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
