import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
describe('ApiService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=api.service.spec.js.map