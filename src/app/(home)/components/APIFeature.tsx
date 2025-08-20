import { Card, CardContent, Typography } from '@mui/material';

type APIFeatureP = {
   title: string;
   description: string;
   icon: string;
};

export default function APIFeature({ title, description, icon }: APIFeatureP) {
   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardContent>
            <Typography gutterBottom variant="h3" component="div">
               {icon}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
               {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               {description}
            </Typography>
         </CardContent>
      </Card>
   );
}
