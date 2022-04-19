import JoystickMove from './JoystickMove';
import KeyboardMove from './KeyboardMove';
import { position } from './config/positions';

export default class Move {
  static attach(zone: HTMLElement, principal: HTMLElement) {
    const joystick = new JoystickMove(principal, position, zone);
    const keyboard = new KeyboardMove(principal, position);

    joystick.start();
    keyboard.start();
  }
}
