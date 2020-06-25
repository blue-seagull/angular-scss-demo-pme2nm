export class DailyPattern {
    morning = true;
    afternoon = true;

    toggleMorning() {
        this.morning = !this.morning;
    }

    toggleAfternoon() {
        this.afternoon = !this.afternoon;
    }

    toggleWholeDay() {
        this.morning = !this.morning; //morning is the reference for the whole day
        this.afternoon = this.morning;
    }

    isWholeDayInactive(): boolean {
        return !this.morning && !this.afternoon;
    }

    switch(activeWholeDay: string, activeMorning: string, activeAfternoon: string, inactiveWholeDay: string): string {
        return this.morning ?
            this.afternoon ? activeWholeDay : activeMorning :
            this.afternoon ? activeAfternoon : inactiveWholeDay;
    }
}

export class WeeklyPattern {
    dailyPatterns: [DailyPattern, DailyPattern, DailyPattern, DailyPattern, DailyPattern]
        = [new DailyPattern(), new DailyPattern(), new DailyPattern(), new DailyPattern(), new DailyPattern()];

    isWholeWeekInactive(): boolean {
        return this.dailyPatterns.every(d => d.isWholeDayInactive());
    }

}

export class UnavailabilityPeriod {
    readonly startDate: string;
    readonly endDate: string;
    readonly weeklyPattern: WeeklyPattern;
}
