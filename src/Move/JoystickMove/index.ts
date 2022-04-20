import { create, JoystickManager } from 'nipplejs';
import { limit, speed } from '../config/positions';

export default class Move {
  position: { horizontal: number; vertical: number };
  principal: HTMLElement;
  zone: HTMLElement;
  directions: string[] = [];
  constructor(principal: HTMLElement, start: any, zone: HTMLElement) {
    this.position = start;
    this.principal = principal;
    this.zone = zone;
  }
  start() {
    const manager: JoystickManager = this.drawJoystick(this.zone);
    this.attatchEvents(manager);
    this.listenJoystick(this.principal);
  }

  drawJoystick(zone: HTMLElement) {
    return create({
      zone: zone as HTMLElement,
      mode: 'static',
      color: 'white',
      position: { left: '50%', bottom: '15%' },
    });
  }
  attatchEvents(manager: JoystickManager) {
    manager.on('move', (_, data) => {
      this.directions = [];
      if (data.angle.degree > 80 && data.angle.degree < 100) {
        this.directions.push('ArrowUp');
      }
      if (data.angle.degree > 170 && data.angle.degree < 190) {
        this.directions.push('ArrowLeft');
      }
      if (data.angle.degree > 260 && data.angle.degree < 280) {
        this.directions.push('ArrowDown');
      }
      if (data.angle.degree > 350 || data.angle.degree < 10) {
        this.directions.push('ArrowRight');
      }
      if (data.angle.degree > 10 && data.angle.degree < 80) {
        this.directions.push('ArrowUp');
        this.directions.push('ArrowRight');
      }
      if (data.angle.degree > 100 && data.angle.degree < 170) {
        this.directions.push('ArrowUp');
        this.directions.push('ArrowLeft');
      }
      if (data.angle.degree > 190 && data.angle.degree < 260) {
        this.directions.push('ArrowDown');
        this.directions.push('ArrowLeft');
      }
      if (data.angle.degree > 280 && data.angle.degree < 350) {
        this.directions.push('ArrowDown');
        this.directions.push('ArrowRight');
      }
    });
    manager.on('end', () => {
      this.directions = [];
    });
  }
  listenJoystick(p: HTMLElement) {
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
}
