import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { signInActions } from '../store/detectors.slice';
import { AppDispatch } from '../store/store';

const actions = { ...signInActions };

export const useActions = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  return bindActionCreators(actions, useAppDispatch());
};
