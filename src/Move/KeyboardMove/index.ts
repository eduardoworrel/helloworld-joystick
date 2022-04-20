import { WatchMove } from '../config/WatchMove';
export default class Move {
  control: WatchMove;
  constructor(control: WatchMove) {
    this.control = control;
  }
  start() {
    this.attatchEvents();
  }

  attatchEvents() {
    window.addEventListener('keyup', (e) => this.disableMove(e.key));
    window.addEventListener('keydown', (e) => {
      if (!this.control.directions.includes(e.key)) {
        this.control.directions.push(e.key);
      }
    });
  }
  disableMove(key: string) {
    this.control.directions = this.control.directions.filter((item) => item !== key);
  }
}
