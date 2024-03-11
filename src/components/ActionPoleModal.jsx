import PropTypes from 'prop-types';
import ActionPoleBar from './ActionPoleBar';
import { useEffect, useState } from 'react';
import { Box, Modal, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentActionPole } from '../redux/slices/toolsBarSlice';
import { useNavigate, Outlet, useOutletContext } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '70vh',
  width: '50vw',
  bgcolor: 'background.paper',
  borderRadius: 8,
  border: '0.125rem solid #999',
  boxShadow: 24,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function ActionPoleModal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [socket, setSocket] = useState();
  const current = useSelector((state) => state.actionPoleModal.value);
  const { open, handleClose } = props;
  const handleCloseModal = () => {
    socket.disconnect();
    handleClose();
  };
  const handleSetCurrent = async (current) => {
    dispatch(saveCurrentActionPole(current));
  };
  const handleCloseSocket = (newSocket) => {
    setSocket(newSocket);
  };
  useEffect(() => {
    navigate(`${props.serial}/${current}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);
  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={style}>
        <ActionPoleBar handleSetCurrent={handleSetCurrent} current={current} />
        <DrawerHeader />
        <Outlet context={{ handleCloseSocket }} />
      </Box>
    </Modal>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useActionClose() {
  return useOutletContext();
}

ActionPoleModal.propTypes = {
  serial: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
