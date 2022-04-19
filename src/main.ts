import JoystickMove from './JoystickMove';
import KeyboardMove from './KeyboardMove';
import { position } from './config/positions';
const zone = document.querySelector('#zone_joystick') as HTMLElement;
const principal = document.querySelector('#p') as HTMLElement;

const joystick = new JoystickMove(principal, position, zone);
const keyboard = new KeyboardMove(principal, position);
joystick.start();
keyboard.start();
