import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosI } from '../configs/axiosConfig';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import { Box, IconButton, Typography } from '@mui/material';

const columns = [
  {
    field: 'serial',
    headerName: 'Serial',
    minWidth: 130,
  },
  {
    field: 'fabricante',
    headerName: 'Fabricante',
    minWidth: 130,
  },
  {
    field: 'modelo',
    headerName: 'Modelo',
    minWidth: 130,
  },
  {
    field: 'estado',
    headerName: 'Estado',
    minWidth: 130,
  },
];

export default function ListPole() {
  const [selectedRows, setSelectedRows] = useState([]);
  const { projectId } = useParams();
  const handleDelete = () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalos!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const ids = selectedRows.map((row) => row.id);
        const response = await axiosI.delete(
          `/poles/delete?ids=${ids.join(',')}`,
        );
        if (response.status !== 200) {
          Swal.fire({
            title: 'Oops!',
            text: response.data.message || 'Algo salio mal!',
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: 'Eliminado!',
            text: 'Los postes fueron eliminados.',
            icon: 'success',
          });
          getInfo();
        }
      }
    });
  };
  const [project, setProject] = useState();
  const [poles, setPoles] = useState([]);
  const getInfo = async () => {
    try {
      const project = await axiosI.get(`/projects/${projectId}`);
      setProject(project.data);
      let poles = await axiosI.get(`/poles/project/${projectId}`);
      poles = poles.data.map((pole) => {
        return {
          id: pole._id,
          serial: pole.serial,
          fabricante: pole.fabricante,
          modelo: pole.modelo,
          estado: pole.state,
        };
      });
      setPoles(poles);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                {project && project.name}
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
                rows={poles}
                columns={columns}
                columnHeaderHeight={33}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 3 },
                  },
                }}
                sx={{
                  '& .MuiDataGrid-columnHeaders': {
                    borderRadius: 'var(--none, 0px)',
                    borderBottom:
                      '0.063rem solid var(--divider, rgba(0, 0, 0, 0.12))',
                    borderLeft:
                      'var(--none, 0rem) solid var(--divider, rgba(255, 255, 255, 1))',
                    borderRight:
                      'var(--none, 0rem) solid var(--divider, rgba(255, 255, 255, 1))',
                    borderTop:
                      'var(--none, 0rem) solid var(--divider, rgba(255, 255, 255, 1))',
                    background:
                      'var(--primary-selected, rgba(170, 93, 74, 0.9))',
                    color: 'var(--on-primary, rgba(255, 255, 255, 1))',
                    alignItems: 'space-between !important',
                  },
                  '& .MuiDataGrid-sortIcon': {
                    opacity: 'inherit !important',
                    color: 'var(--on-primary, rgba(255, 255, 255, 1))',
                  },
                }}
                loading={poles.length === 0}
                rowHeight={33}
                pageSizeOptions={[3]}
                checkboxSelection
                disableRowSelectionOnClick
                onRowSelectionModelChange={(ids) => {
                  const selectedIDs = new Set(ids);
                  const selectedRows = poles.filter((pole) =>
                    selectedIDs.has(pole.id),
                  );
                  setSelectedRows(selectedRows);
                }}
                slots={{
                  footer: ({ paginationRowCount }) => {
                    const selectedRowCount = selectedRows.length;
                    return (
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          ml: 2,
                        }}
                      >
                        {selectedRowCount === 0 ? (
                          paginationRowCount
                        ) : (
                          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="body2">
                              {`${selectedRowCount} ${
                                selectedRowCount === 1
                                  ? 'item selecionado'
                                  : 'items selecionados'
                              }`}
                            </Typography>
                            <IconButton
                              onClick={handleDelete}
                              aria-label="delete"
                            >
                              <DeleteIcon sx={{ fontSize: '1.4rem' }} />
                            </IconButton>
                          </Box>
                        )}
                        <Box sx={{ flexGrow: 1 }} />
                        <GridPagination />
                      </Box>
                    );
                  },
                }}
                {...poles}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
