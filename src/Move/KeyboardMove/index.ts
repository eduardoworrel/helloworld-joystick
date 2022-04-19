import { limit, speed } from '../config/positions';

export default class Move {
  position: { horizontal: number; vertical: number };
  principal: HTMLElement;
  directions: string[] = [];
  constructor(principal: HTMLElement, start: any) {
    this.position = start;
    this.principal = principal;
  }
  start() {
    this.attatchEvents();
    this.listenKeyboard(this.principal);
    this.watchKeyboard();
  }
  watchKeyboard() {
    const up = document.querySelector('.up') as HTMLElement;
    const down = document.querySelector('.down') as HTMLElement;
    const left = document.querySelector('.left') as HTMLElement;
    const right = document.querySelector('.right') as HTMLElement;

    setInterval(() => {
      if (this.directions.includes('ArrowUp')) {
        up.classList.add('active');
        up.classList.add('focus');
      } else {
        up.classList.remove('active');
        up.classList.remove('focus');
      }
      if (this.directions.includes('ArrowDown')) {
        down.classList.add('active');
        down.classList.add('focus');
      } else {
        down.classList.remove('active');
        down.classList.remove('focus');
      }
      if (this.directions.includes('ArrowLeft')) {
        left.classList.add('active');
        left.classList.add('focus');
      } else {
        left.classList.remove('active');
        left.classList.remove('focus');
      }
      if (this.directions.includes('ArrowRight')) {
        right.classList.add('active');
        right.classList.add('focus');
      } else {
        right.classList.remove('active');
        right.classList.remove('focus');
      }
    }, speed.ms);
  }
  attatchEvents() {
    window.addEventListener('keyup', (e) => this.disableMove(e.key));
    window.addEventListener('keydown', (e) => {
      if (!this.directions.includes(e.key)) {
        this.directions.push(e.key);
      }
    });
  }
  listenKeyboard(p: HTMLElement) {
    setInterval(() => {
      if (this.directions.includes('ArrowUp')) {
        if (this.position.vertical > limit.minX) this.position.vertical -= speed.distance;
        p.style.top = this.position.vertical + speed.unit;
      }
      if (this.directions.includes('ArrowDown')) {
        if (this.position.vertical < limit.maxX) this.position.vertical += speed.distance;
        p.style.top = this.position.vertical + speed.unit;
      }
      if (this.directions.includes('ArrowLeft')) {
        if (this.position.horizontal > limit.minY) this.position.horizontal -= speed.distance;
        p.style.left = this.position.horizontal + speed.unit;
      }
      if (this.directions.includes('ArrowRight')) {
        if (this.position.horizontal < limit.maxY) this.position.horizontal += speed.distance;
        p.style.left = this.position.horizontal + speed.unit;
      }
      p.scrollIntoView({ block: 'center', inline: 'center', behavior: 'auto' });
    }, speed.ms);
  }

  disableMove(key: string) {
    this.directions = this.directions.filter((item) => item !== key);
  }
}
