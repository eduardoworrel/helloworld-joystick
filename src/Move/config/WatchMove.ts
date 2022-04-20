import { limit, speed } from './positions';

export class WatchMove {
  up: HTMLElement;
  down: HTMLElement;
  left: HTMLElement;
  right: HTMLElement;

  directions: string[] = [];
  position: any;

  constructor(position: any, principal: HTMLElement) {
    this.position = position;
    this.up = document.querySelector('.up') as HTMLElement;
    this.down = document.querySelector('.down') as HTMLElement;
    this.left = document.querySelector('.left') as HTMLElement;
    this.right = document.querySelector('.right') as HTMLElement;
    this.move(principal);
    this.togglePressedKeyboard();
  }
  move(p: HTMLElement) {
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
  togglePressedKeyboard() {
    setInterval(() => {
      if (this.directions.includes('ArrowUp')) {
        this.up.classList.add('active');
        this.up.classList.add('focus');
      } else {
        this.up.classList.remove('active');
        this.up.classList.remove('focus');
      }
      if (this.directions.includes('ArrowDown')) {
        this.down.classList.add('active');
        this.down.classList.add('focus');
      } else {
        this.down.classList.remove('active');
        this.down.classList.remove('focus');
      }
      if (this.directions.includes('ArrowLeft')) {
        this.left.classList.add('active');
        this.left.classList.add('focus');
      } else {
        this.left.classList.remove('active');
        this.left.classList.remove('focus');
      }
      if (this.directions.includes('ArrowRight')) {
        this.right.classList.add('active');
        this.right.classList.add('focus');
      } else {
        this.right.classList.remove('active');
        this.right.classList.remove('focus');
      }
    }, 100);
  }
}
