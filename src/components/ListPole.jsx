import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 130,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minWidth: 130,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    minWidth: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ListPole() {
  return (
    <Box component={'div'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '0.625rem',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            flex: '1 1 0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              padding: '0.625rem 0.938rem',
              flexDirection: 'column',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
              gap: '0.313rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                fontWeight="bold"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Lista de Postes
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                gap: '0.625rem',
              }}
            >
              <Typography
                fontWeight="bold"
                id="modal-modal-title"
                variant="body2"
                component="p"
              >
                Lista de Postes
              </Typography>
            </Box>
            <Typography
              sx={{ textAlign: 'justify' }}
              id="modal-modal-description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '0.625rem',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'stretch',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignSelf: 'stretch',
                height: '100%',
                width: '90%',
                '& .super-app-theme--header': {
                  backgroundColor: 'rgba(255, 7, 0, 0.55)',
                },
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 3 },
                  },
                }}
                loading={rows.length === 0}
                rowHeight={35}
                pageSizeOptions={[3, 6]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
