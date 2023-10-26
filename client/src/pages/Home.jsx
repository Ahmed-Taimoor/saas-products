import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';
import state from '../store';
import React from 'react';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <AnimatePresence></AnimatePresence>
    </>
  );
};

export default Home;
