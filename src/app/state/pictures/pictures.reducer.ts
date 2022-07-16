import { createReducer, on } from '@ngrx/store';

import { IPicture } from 'src/app/shared/interfaces/picture.interface';
import { fetchPictureList } from './pictures.actions';

export interface PicturesState {
  picturesList: IPicture[];
}

export const initialState: PicturesState = {
  picturesList: [],
};

export const picturesReducer = createReducer(
  initialState,
  on(fetchPictureList, (state, { picturesList }) => ({
    ...state,
    ...picturesList,
  }))
);
