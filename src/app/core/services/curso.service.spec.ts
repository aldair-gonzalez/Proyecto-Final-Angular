import { TestBed } from '@angular/core/testing';

import { CursoService } from './curso.service';

describe('CursoServiceService', () => {
  let service: CursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
