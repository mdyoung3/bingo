/**
 * Created by drynears on 2/11/15.
 */
$(document).ready(function () {
    var $love_words = [
        'affection',
        'appreciation',
        'devotion',
        'emotion',
        'fondness',
        'friendships',
        'infatuations',
        'passion',
        'allegiance',
        'adherence',
        'dedication',
        'deference',
        'devotion',
        'faithfulness',
        'fealty',
        'fidelity',
        'homage',
        'obedience',
        'obligation',
        'ardor',
        'neighborhood',
        'people',
        'public',
        'society',
        'love',
        'populace',
        'residents',
        'territory',
        'turf',
        'calm',
        'coolin ',
        'syncs',
        'table',
        'well-adjusted',
        'acquaintance',
        'affability',
        'alliance',
        'amity',
        'camaraderie',
        'brotherhood',
        'camaraderie',
        'chumminess',
        'closeness',
        'companionship',
        'fellowship',
        'esprit de corps',
        'comity',
        'friendliness',
        'friendship',
        'generosity',
        'goodwill',
        'kindness',
        'rapport',
        'sympathy',
        'tolerance',
        'altruism',
        'amity',
        'donation',
        'endowment',
        'fund',
        'philanthropy',
        'assistance',
        'beneficence',
        'contribution',
        'dole',
        'cooperation',
        'aid',
        'assistance',
        'collaboration',
        'participation',
        'partnership',
        'service',
        'unity',
        'alliance',
        'coalition'
    ];

    function changeWord() {
        var item = $love_words[Math.floor(Math.random()*$love_words.length)];
        var position = $love_words.indexOf(item);
        if(position > -1) {
            $love_words.splice(position, 1);
        }
        console.log(item);
        if (item) {
            return document.getElementById("word").innerHTML = item;
        } else {
            return document.getElementById("word").innerHTML = "Game Over!";
        }
    }

    jQuery('#changeForm').submit(function () {
        changeWord();
        return false;
    });
});
