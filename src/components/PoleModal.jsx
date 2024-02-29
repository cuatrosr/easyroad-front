import PoleBar from './PoleBar';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Modal, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { saveCurrentPole } from '../redux/slices/toolsBarSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '76vh',
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

export default function ProjectModal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const current = useSelector((state) => state.poleModal.value);
  const { open, handleClose, parentFunction } = props;
  const handleCloseModal = () => {
    handleClose();
    parentFunction();
  };
  const handleSetCurrent = async (current) => {
    dispatch(saveCurrentPole(current));
  };
  useEffect(() => {
    navigate(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);
  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={style}>
        <PoleBar handleSetCurrent={handleSetCurrent} current={current} />
        <DrawerHeader />
        <Outlet />
      </Box>
    </Modal>
  );
}

ProjectModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  parentFunction: PropTypes.func,
};
