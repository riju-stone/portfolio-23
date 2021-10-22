import { Box, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

export default function Loader({setLoading}) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
          setProgress((oldProgress) => {
            if (oldProgress === 100){
              setLoading(false)
              return 0;
            }
            const diff = Math.random() * 60;
            return Math.min(oldProgress + diff, 100);
          });
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      });
    
      return (
        <motion.div layoutId="loader" className="flex flex-col justify-center w-full h-screen text-center align-baseline px-80 tablet:px-12 loader_container">
          <span className="my-6 text-5xl text-white phone:text-4xl">Loading...</span>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress}/>
          </Box>
        </motion.div>
      );
}