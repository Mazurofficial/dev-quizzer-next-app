import styles from './Footer.module.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
   return (
      <Box component="footer" className={styles.footer}>
         <Typography variant="body2">
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
