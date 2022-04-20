import JoystickMove from './JoystickMove';
import KeyboardMove from './KeyboardMove';
import { position } from './config/positions';

import { WatchMove } from './config/WatchMove';
export default class Move {
  static attach(zone: HTMLElement, principal: HTMLElement) {
    const control = new WatchMove(position, principal);
    const joystick = new JoystickMove(control, zone);
    const keyboard = new KeyboardMove(control);

    joystick.start();
    keyboard.start();
  }
}
