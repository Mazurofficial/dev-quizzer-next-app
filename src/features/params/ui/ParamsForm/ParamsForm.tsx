'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   Button,
   TextField,
   Box,
   FormHelperText,
} from '@mui/material';
import { useParamsStore } from '../../store/store';
import {
   RequestParamsSchema,
   type QuestionsRequestParamsT,
} from '@/shared/schemas/params';
import { useRouter } from 'next/navigation';

const DIFFICULTY_OPTIONS = ['Easy', 'Medium', 'Hard'];
const CATEGORY_OPTIONS = [
   'Code',
   'Docker',
   'Linux',
   'DevOps',
   'VueJS',
   'NodeJs',
   'HTML',
   'bash',
   'WordPress',
];

export default function ParamsForm() {
   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<QuestionsRequestParamsT>({
      resolver: zodResolver(RequestParamsSchema),
      defaultValues: {
         limit: 10,
         difficulty: '',
         category: '',
      },
   });

   const router = useRouter();

   const setParams = useParamsStore((state) => state.setParams);

   const onSubmit = (data: QuestionsRequestParamsT) => {
      setParams(data);
      const params = new URLSearchParams();
      if (data.limit) params.append('limit', String(data.limit));
      if (data.difficulty) params.append('difficulty', data.difficulty);
      if (data.category) params.append('category', data.category);
      const queryString = params.toString() ? `?${params.toString()}` : '';
      router.push('/quiz' + queryString);
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit(onSubmit)}
         sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}
      >
         <Controller
            name="limit"
            control={control}
            render={({ field }) => (
               <TextField
                  {...field}
                  label="Limit"
                  type="number"
                  slotProps={{ htmlInput: { min: 1, max: 50 } }}
                  fullWidth
                  error={!!errors.limit}
                  helperText={errors.limit ? errors.limit.message : ''}
                  onChange={(e) =>
                     field.onChange(
                        e.target.value === '' ? '' : Number(e.target.value)
                     )
                  }
                  value={field.value === undefined ? '' : field.value}
               />
            )}
         />
         <Controller
            name="difficulty"
            control={control}
            render={({ field }) => (
               <FormControl fullWidth error={!!errors.difficulty}>
                  <InputLabel id="difficulty-label">Difficulty</InputLabel>
                  <Select
                     {...field}
                     labelId="difficulty-label"
                     label="Difficulty"
                  >
                     <MenuItem value="">
                        <em>Any</em>
                     </MenuItem>
                     {DIFFICULTY_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                           {option}
                        </MenuItem>
                     ))}
                  </Select>
                  <FormHelperText>
                     {errors.difficulty ? errors.difficulty.message : ''}
                  </FormHelperText>
               </FormControl>
            )}
         />
         <Controller
            name="category"
            control={control}
            render={({ field }) => (
               <FormControl fullWidth error={!!errors.category}>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select {...field} labelId="category-label" label="Category">
                     <MenuItem value="">
                        <em>Any</em>
                     </MenuItem>
                     {CATEGORY_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                           {option}
                        </MenuItem>
                     ))}
                  </Select>
                  <FormHelperText>
                     {errors.category ? errors.category.message : ''}
                  </FormHelperText>
               </FormControl>
            )}
         />
         <Button type="submit" variant="contained" color="primary">
            Start Quiz
         </Button>
      </Box>
   );
}
