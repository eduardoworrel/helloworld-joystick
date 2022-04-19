import { create,JoystickManager } from "nipplejs";

export class Move{
    directions : string[]= []
    constructor(principal: HTMLElement, zone: HTMLElement){
        const manager : JoystickManager = this.drawJoystick(zone);
        this.attatchEvents(manager);
        this.listenJoystick(principal);
    }
    listenJoystick(p: HTMLElement){
        setInterval(()=>{
            if(this.directions.includes("ArrowUp")){
                p.style.top = (x-= 10)  +"px"
            }
            if(this.directions.includes("ArrowDown")){
                p.style.top = (x+= 10) + "px"
            }
            if(this.directions.includes("ArrowLeft")){
                p.style.left = (y-= 10) + "px"
            }
            if(this.directions.includes("ArrowRight")){
                p.style.left = (y+= 10 )+ "px"
            }
            p.scrollIntoView({block: "center", inline:"center", behavior: "auto"});
          
        },50)
    }

    attatchEvents(manager: JoystickManager){
        manager.on("move", (e, data)=>{
            e
            if(data.angle.degree > 80 && data.angle.degree < 100){
                this.directions.push("ArrowUp")
            }
            if(data.angle.degree > 170 && data.angle.degree < 190){
               
                this.directions.push("ArrowLeft")
            }
            if(data.angle.degree > 260 && data.angle.degree < 280){
                
                this.directions.push("ArrowDown")
            }
            if(data.angle.degree > 350 || data.angle.degree < 10){
               
                this.directions.push("ArrowRight")
            }
            if(data.angle.degree > 10 && data.angle.degree < 80){
                this.directions.push("ArrowUp")
                this.directions.push("ArrowRight")
            }
            if(data.angle.degree > 100 && data.angle.degree < 170){
                this.directions.push("ArrowUp")
                this.directions.push("ArrowLeft")
            }   
            if(data.angle.degree > 190 && data.angle.degree < 260){
                this.directions.push("ArrowDown")
                this.directions.push("ArrowLeft")
            }
            if(data.angle.degree > 280 && data.angle.degree < 350){
                this.directions.push("ArrowDown")
                this.directions.push("ArrowRight")
            }
        })
        manager.on("end", ()=>{
            this.directions = []
        })
    }
    drawJoystick(zone: HTMLElement){
        return create({
            zone:zone, 
            mode:"static",
            color:"black",
            position:{left: '50%', bottom: '15%'}
        })
    }
}