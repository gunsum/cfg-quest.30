function ThanksgivingDinner() {
    let turkey = 0;
    let ham = 0;
    let answer = prompt("Would you like turkey or ham?");
    while(answer !== "stop") {
        if (answer === "turkey") {
            turkey++;
        } else if (answer === "ham") {
            ham++;
        }
        answer = prompt("Would you like turkey or ham?");
        }
    if (turkey > ham) {
        console.log("turkey it is!");
    } else if (ham > turkey) {
        console.log("Ham it is!");
    } else {
        console.log("We'll have both!");
    }
}

    ThanksgivingDinner();

    //What keyword would end this function?

    
