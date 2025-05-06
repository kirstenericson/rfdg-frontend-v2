import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: 'center', mt: 'auto', bgcolor: '#f5f5f5' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Event Manager · All rights reserved
      </Typography>
    </Box>
  );
}
