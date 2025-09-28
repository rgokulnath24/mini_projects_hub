let output=document.getElementById("output");
let jokes=[
    {id:1,text:"Vanduttan Ya Vanduttan Ya"},
    {id:2,text:"Thambi innum tea varala"},
    {id:3,text:"Nanbenda"},
    {id:4,text:"Aniki kalaila 6 mani irukkum"},
    {id:5,text:"Plan Panni Pannanum"},
    {id:6,text:"Enakune varuvingala da"},
    {id:7,text:"Ele Intha thappu perusa intha band u perusa"},
    {id:8,text:"Maapu Maapu Vechitan da Aapu"},
    {id:9,text:"Thaangal Vandha nookam"},
    {id:10,text:"Dhooma chale Edhu Dhooma chale vaa"},
];
function generate_joke()
{
    let choice=Math.floor(Math.random()*10)+1;
    let joke=jokes[choice-1];
    output.innerHTML=joke.text;

    output.style.animation="none";
    output.offsetHeight;
    output.style.animation="output 0.8s ease-in-out";
}