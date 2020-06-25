import {Component, Input} from '@angular/core';
import {WeeklyPattern} from '@shared/language-referential/unavailabilityPeriod';

@Component({
    selector: 'oae-weekly-pattern',
    templateUrl: './weekly-pattern.component.html',
    styleUrls: ['./weekly-pattern.component.scss']
})
export class WeeklyPatternComponent {
    @Input()
    weeklyPattern: WeeklyPattern = new WeeklyPattern();
    @Input()
    editable = false;
}
