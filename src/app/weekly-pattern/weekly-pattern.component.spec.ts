import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeeklyPatternComponent} from './weekly-pattern.component';

describe('WeeklyPatternComponent', () => {
    let component: WeeklyPatternComponent;
    let fixture: ComponentFixture<WeeklyPatternComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeeklyPatternComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeeklyPatternComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
