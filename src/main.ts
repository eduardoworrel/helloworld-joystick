import Move from './Move';
const principal = document.getElementById('p') as HTMLElement;
const zone = document.getElementById('joystick') as HTMLElement;
Move.attach(zone, principal);
