import { createAction, props } from '@ngrx/store';

import { IPicture } from 'src/app/shared/interfaces/picture.interface';

export const fetchPictureList = createAction(
  '[Pictures List/API] Fetch Pictures Success',
  props<{ picturesList: IPicture[] }>()
);