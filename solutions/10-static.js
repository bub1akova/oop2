export default class Time {
  // BEGIN
  static fromString(timeString) {
    const [hours, minutes] = timeString.split(":").map(item => parseInt(item));
    return new Time(hours, minutes);
}
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
