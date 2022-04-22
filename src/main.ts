import Move from './Move';

const real = document.querySelector('#realcontent') as HTMLElement;
if(!real) throw new Error('O elemento "realcontent" é obrigatório')

const principal = document.createElement('div') as HTMLElement;
principal.setAttribute('style', `
            position:absolute;
            width: 150px; 
            height: 150px;
            background-image: url('https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png');
            background-size: 100%;
            top: 60px;
            left: 500px;        
`);
real.append(principal);

Move.attach(principal);
