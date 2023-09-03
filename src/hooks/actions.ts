import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { togglerActions } from '../store/toggler.slice';
import { AppDispatch } from '../store/store';

const actions = { ...togglerActions };

export const useActions = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  return bindActionCreators(actions, useAppDispatch());
};
