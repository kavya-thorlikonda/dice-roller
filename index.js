function rollDice(){
    const Dice=(document.getElementById("Dice").value);
    const resultValue=document.getElementById("resultValue");
    const resultImage=document.getElementById("resultImage");
    
    const values=[];
    const images=[];
    
    for(let i=0;i<Dice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/dice${value}.png" alt="dice ${value}">`);
    }
    resultValue.textContent=`dice: ${values.join(' ,')}`;
    resultImage.innerHTML=images.join('');
}