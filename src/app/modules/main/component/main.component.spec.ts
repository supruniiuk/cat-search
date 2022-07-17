import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IAppState } from 'src/app/state/app.state';
import { MainComponent } from './main.component';
import { PictureService } from 'src/app/services/picture.service';
import { Store } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('Main Component', () => {
  let component: MainComponent;
  let pictureService: PictureService;
  let store: Store<IAppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    pictureService = TestBed.inject(PictureService);
    store = TestBed.inject(Store);

    component = new MainComponent(pictureService, store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
