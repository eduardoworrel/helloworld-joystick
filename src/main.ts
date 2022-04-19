import {create} from 'nipplejs';
let directions : string[]= []
const m = create({
    zone:document.querySelector("#zone_joystick") as HTMLElement, 
    mode:"static",
    color:"black",
    position:{left: '50%', bottom: '15%'}
})
m.on("move", (e, data)=>{
    e
    directions = []
    if(data.angle.degree > 80 && data.angle.degree < 100){
        directions.push("ArrowUp")
    }
    if(data.angle.degree > 170 && data.angle.degree < 190){
       
        directions.push("ArrowLeft")
    }
    if(data.angle.degree > 260 && data.angle.degree < 280){
        
        directions.push("ArrowDown")
    }
    if(data.angle.degree > 350 || data.angle.degree < 10){
       
        directions.push("ArrowRight")
    }
    
    //diagonal
    if(data.angle.degree > 10 && data.angle.degree < 80){
        directions.push("ArrowUp")
        directions.push("ArrowRight")
    }
    if(data.angle.degree > 100 && data.angle.degree < 170){
        directions.push("ArrowUp")
        directions.push("ArrowLeft")
    }   
    if(data.angle.degree > 190 && data.angle.degree < 260){
        directions.push("ArrowDown")
        directions.push("ArrowLeft")
    }
    if(data.angle.degree > 280 && data.angle.degree < 350){
        directions.push("ArrowDown")
        directions.push("ArrowRight")
    }

});
m.on("end", ()=>{
    directions = []
})
const p = document.querySelector("#p") as HTMLElement;
let x = 0;
let y = 0;
setInterval(()=>{

    if(directions.includes("ArrowUp")){
        p.style.top = (x-= 10)  +"px"
    }
    if(directions.includes("ArrowDown")){
        p.style.top = (x+= 10) + "px"
    }
    if(directions.includes("ArrowLeft")){
        p.style.transform = "translateX(-10px)"
        p.style.left = (y-= 10) + "px"
    }
    if(directions.includes("ArrowRight")){
        p.style.left = (y+= 10 )+ "px"
    }
    p.scrollIntoView({block: "center", inline:"center", behavior: "auto"});
  
},50)
