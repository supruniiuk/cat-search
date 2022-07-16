import { AppState } from '../app.state';

export const selectArticles = (state: AppState) => {
  return state.pictures.picturesList;
};
