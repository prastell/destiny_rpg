var guardianClass = prompt("What path do you follow, Guardian? HUNTER, WARLOCK or TITAN?").toUpperCase();
var subclass = "placeholder"
var gjallarhorn = "placeholder"
var fatebringer = "placeholder"

switch(guardianClass) {
    case 'HUNTER':
    subclass = prompt("Very well, " + guardianClass + ". How do you prefer to infuriate your opponents in PVP, GUNSLINGER or BLADEDANCER?").toUpperCase();
    break;
    case 'WARLOCK':
    subclass = prompt("Space magic, oh yeah. You praise the sun, bro? SUNSINGER or VOIDWALKER?").toUpperCase();
    break;
    case 'TITAN':
    subclass = prompt("OK OK OK. Punch bros punch things, am I right? Are you full-on punch bro or part time bubble bro? STRIKER or DEFENDER?").toUpperCase();
    break;
    default:
    window.alert("I don't know that class. Good luck in the universe.");
}

var destination = prompt("Where would you like to go today, Guardian? You can fly to EARTH, the MOON, VENUS, or MARS?").toUpperCase();

switch(destination) {
    case 'EARTH':
        window.alert("From the ashes of humanity, we rise again on Earth.");
    break;
    case 'MOON':
        gjallarhorn = prompt("Do you have Gjallarhorn, the greatest weapon in all the land? YES or NO?").toUpperCase();
        fatebringer = prompt("Do you have Fatebringer, the baddest ass hand cannon in all the land? YES or NO?").toUpperCase();
        if(gjallarhorn === 'YES' && fatebringer === 'YES') {
            window.alert("You possess both legendary weapons?? You easily melt the faces of all you encounter on the moon. Well done, Guardian.");
        } else if(gjallarhorn === 'YES' || fatebringer === 'YES') {
            window.alert("You possess at least one of these amazeballs weapons. You should retake the moon in time.");
        } else {
            window.alert("You lack the most basic of 1337 weaponry. You are overwhelmed by the horde of enemies arrayed against humanity. Despair, guardian, for you are lost.");
        }
    break;
    case 'VENUS':
        window.alert("Let us investigate the Vex and the Ishtar Sink on Venus.");
    break;
    case 'MARS':
        window.alert("To mars! To fight the mighty Cabal!");
    break;
    default:
        window.alert("Perhaps in time we can visit that location.");
    
};