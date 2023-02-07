import { useTheme } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'

const Separator = () => {
  const theme = useTheme();

  return (
    <Box sx={{width:"100%" , bgcolor:theme.palette.grey[50] , height:2 ,}}></Box>
  )
}

export default Separator