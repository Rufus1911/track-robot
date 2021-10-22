var trackbot = {
    xPos: 0,
    yPos: 0,
    rotationCounter: 0
}

const ary = [5, 13, -9, 4, 14, 4, 5, 8];

function movement(bot, moveAry){
    for (let i = 0; i < moveAry.length; i++){
        switch (bot.rotationCounter){
            case 0: 
                bot.yPos += moveAry[i];
                bot.rotationCounter++;
                break;
            case 1:
                bot.xPos += moveAry[i];
                bot.rotationCounter++;
                break;
            case 2: 
                bot.yPos -= moveAry[i];
                bot.rotationCounter++;
                break;
            case 3:
                bot.xPos -= moveAry[i];
                bot.rotationCounter = 0;
                break;
            default: break;
        }
    }

    console.log("(" + bot.xPos + "," + bot.yPos + ")");
}

movement(trackbot, ary);