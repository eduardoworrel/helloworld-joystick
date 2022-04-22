import Move from './Move';
import { defaultSize, position } from './Move/config/positions';

const real = document.querySelector('#realcontent') as HTMLElement;
if (!real) throw new Error('O elemento "realcontent" é obrigatório');

const principal = document.createElement('div') as HTMLElement;
principal.setAttribute(
  'style',
  `
            position:absolute;
            width: ${defaultSize.width}px; 
            height: ${defaultSize.height}px;
            background-image: url('https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png');
            background-size: 100%;
            top: ${position.vertical}px;
            left: ${position.horizontal}px;        
`,
);
real.append(principal);

Move.attach(principal);
