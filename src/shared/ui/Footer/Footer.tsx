import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
   return (
      <Box
         component="footer"
         sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            textAlign: 'center',
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
         }}
      >
         <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Dev Quizzer &nbsp;|&nbsp;
            <Link
               href="https://github.com/mazursmac/dev-quizzer-next-app"
               target="_blank"
               rel="noopener noreferrer"
               underline="hover"
            >
               GitHub
            </Link>
         </Typography>
      </Box>
   );
}
