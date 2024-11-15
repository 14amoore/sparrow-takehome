import { CircularProgress, Box } from '@mui/material';

const Loading = ({ size = 40 }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100%"
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loading;
