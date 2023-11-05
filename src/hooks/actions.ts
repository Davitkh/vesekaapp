import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { signInActions } from '../store/slices/detectors.slice';
import { AppDispatch } from '../store/store';
import { toggleActions } from './../store/slices/toggler.slice';

const actions = { ...signInActions, ...toggleActions };

export const useActions = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  return bindActionCreators(actions, useAppDispatch());
};
