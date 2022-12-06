import * as fromAlumno from './alumno.reducer';
import { selectAlumnoState } from './alumno.selectors';

describe('Alumno Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAlumnoState({
      [fromAlumno.alumnoFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
