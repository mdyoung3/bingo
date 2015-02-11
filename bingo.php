<?php
$love_words = array(
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
'affabilitysta',
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
'coalition',
);





?>


<!DOCTYPE html>
	<html> 
	  <head> 
	    <meta  http-equiv="Content-Type" content="text/html;  charset=iso-8859-1"> 
	    <title>Bingo | Random Word Generator</title> 
	  </head> 
	   <body> 
	    <h3>Click button for a new Bingo word</h3> 
	    <p>This is a bingo game for OKED Love of your community party.</p> 
	    <button type=submit>Submit</button> 
           <p><?php echo mt_rand(0, 10); ?></p>
	  </body> 
	</html> 