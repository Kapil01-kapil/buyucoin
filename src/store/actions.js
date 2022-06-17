import { createRoutine } from 'redux-saga-routines';
import {
    GET_HOME,
GET_DETAILS
} from './constants';

export const getHomes = createRoutine(GET_HOME);
export const getDetails = createRoutine(GET_DETAILS);
