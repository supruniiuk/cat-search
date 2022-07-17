import { IAppState } from '../app.state';
import { IPicture } from 'src/app/shared/interfaces/picture.interface';
import { createSelector } from '@ngrx/store';

export const selectPictures = (state: IAppState) => {
  return state.pictures.picturesList;
};

export const selectPictureById = (id: string) =>
  createSelector(
    selectPictures,
    (picturesList: ReadonlyArray<IPicture>) =>
      picturesList.filter((picture: IPicture) => picture.id === id)[0]
  );
