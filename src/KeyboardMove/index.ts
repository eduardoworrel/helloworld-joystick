
import {limit, speed} from "../config/positions";

export default class Move{
    position: { horizontal:number, vertical:number}
    directions : string[]= []
    constructor(principal: HTMLElement,start :any){
        // this.drawKeyboard(zone);
        this.position = start
        this.attatchEvents();
        this.listenKeyboard(principal);
    }
    // drawKeyboard(zone: HTMLElement){
       
    // }
    attatchEvents(){
        window.addEventListener("keyup", (e) => this.disableMove(e.key))
        window.addEventListener("keydown", e => {
            if(!this.directions.includes(e.key)){
                this.directions.push(e.key)
            }  
        } )
    }
    listenKeyboard(p: HTMLElement){
        setInterval(()=>{
            if(this.directions.includes("ArrowUp")){
                if(this.position.vertical > limit.minX) this.position.vertical -= speed.distance;
                p.style.top = this.position.vertical + speed.unit
            }
            if(this.directions.includes("ArrowDown")){
                if(this.position.vertical < limit.maxX) this.position.vertical += speed.distance;
                p.style.top = this.position.vertical + speed.unit
            }
            if(this.directions.includes("ArrowLeft")){
                if(this.position.horizontal > limit.minY) this.position.horizontal -= speed.distance;
                p.style.left = this.position.horizontal + speed.unit
            }
            if(this.directions.includes("ArrowRight")){
                if(this.position.horizontal < limit.maxY) this.position.horizontal += speed.distance;
                p.style.left = this.position.horizontal + speed.unit
            }
            p.scrollIntoView({block: "center", inline:"center", behavior: "auto"});
          
        },speed.ms)
    }

    disableMove(key: string){
        this.directions = this.directions.filter(item => item != key)
    }
  
}