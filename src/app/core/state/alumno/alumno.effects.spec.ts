import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AlumnoEffects } from './alumno.effects';

describe('AlumnoEffects', () => {
  let actions$: Observable<any>;
  let effects: AlumnoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlumnoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AlumnoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
