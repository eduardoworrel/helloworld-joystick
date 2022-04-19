import JoystickMove from "./JoystickMove";
import KeyboardMove from "./KeyboardMove";
import {position} from "./config/positions";
const zone = document.querySelector("#zone_joystick") as HTMLElement 

const principal = document.querySelector("#p") as HTMLElement 

new JoystickMove(principal,position, zone)
new KeyboardMove(principal,position)
