import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './search.component';
import { TestBed } from '@angular/core/testing';
import { TypeService } from 'src/app/services/type.service';

describe('Search Component', () => {
  let component: SearchComponent;
  let typeService: TypeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    typeService = TestBed.inject(TypeService);
    component = new SearchComponent(typeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
