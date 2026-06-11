function analyzeDog(){

let file=document.getElementById("imageUpload").files[0];

if(!file){

alert("Please upload a dog image");
return;

}

let img=document.createElement("img");
img.src=URL.createObjectURL(file);

let preview=document.getElementById("image-preview");
preview.innerHTML="";
preview.appendChild(img);

/* simulate AI */

let random=Math.random();

let injuryText="";
let careText="";

if(random>0.5){

injuryText=`

<h3>⚠ Detailed Injury Analysis</h3>

<p>
The uploaded image indicates that the street dog may have a visible injury.
Street dogs commonly suffer injuries due to road accidents, fights with
other animals, infections from untreated wounds, or sharp objects on the street.
</p>

<p>
Some possible signs of injury include:
</p>

<ul>
<li><b>Open wounds or bleeding:</b> Cuts or deep wounds may become infected if not treated quickly.</li>
<li><b>Limping or difficulty walking:</b> This may indicate a leg injury or fracture.</li>
<li><b>Swelling around a body part:</b> Swelling could indicate internal injury or infection.</li>
<li><b>Weakness or lying down frequently:</b> This may show pain, dehydration, or exhaustion.</li>
</ul>

<p>
If the injury is not treated early, it can lead to infection,
severe pain, or long-term disability for the dog. Immediate care
and contacting a veterinarian or rescue organization is strongly recommended.
</p>

`;

careText=`

<h3>🩹 Detailed First Aid Steps</h3>

<ol>
<li>
<b>Approach the dog calmly:</b> Injured dogs may be frightened or in pain.
Move slowly and speak softly to avoid scaring the dog.
</li>

<li>
<b>Check the injury visually:</b> Observe the wound without touching deeply.
Look for bleeding, swelling, or difficulty moving.
</li>

<li>
<b>Provide clean drinking water:</b> Injured dogs may be dehydrated.
Place a bowl of clean water near the dog.
</li>

<li>
<b>Control minor bleeding:</b> If there is bleeding,
gently place a clean cloth or gauze on the wound and apply light pressure.
</li>

<li>
<b>Do not apply chemicals or human medicines:</b>
Certain chemicals or medicines may harm animals.
Only a veterinarian should apply medication.
</li>

<li>
<b>Keep the dog in a safe place:</b>
If possible, guide the dog to a quiet area away from traffic and noise.
</li>

<li>
<b>Contact a veterinarian or rescue group:</b>
Professional medical treatment is the safest option for serious injuries.
</li>

</ol>


<h3>🍲 Detailed Food Suggestions (with Preparation)</h3>

<ul>

<li>
<b>Plain Cooked Rice</b><br>
Method: Cook rice using water without adding salt, oil, or spices.
Allow it to cool before offering it to the dog. Rice is easy to digest
and provides quick energy.
</li>

<br>

<li>
<b>Rice with Curd (Yogurt)</b><br>
Method: Mix plain cooked rice with a small amount of fresh curd.
This combination helps improve digestion and provides nutrients
for weak or recovering dogs.
</li>

<br>

<li>
<b>Boiled Eggs</b><br>
Method: Boil the egg fully in water for about 8–10 minutes.
Remove the shell and cut the egg into small pieces before feeding.
Eggs provide protein that helps injured dogs recover faster.
</li>

<br>

<li>
<b>Boiled Chicken (Plain)</b><br>
Method: Boil chicken pieces in water without salt or spices.
Shred the chicken into small soft pieces before feeding.
Chicken provides strong protein and energy.
</li>

<br>

<li>
<b>Bread with Milk</b><br>
Method: Soak plain bread in a small amount of milk to soften it.
This helps weak dogs eat more easily.
</li>

</ul>

<p>
Avoid feeding spicy food, chocolate, onions, fried food,
or salty snacks because they can be harmful to dogs.
</p>

`;

}else{

injuryText=`

<h3>🐶 Health Observation</h3>

<p>
The dog in the image does not show obvious signs of serious injury.
However, street dogs may still suffer from hidden problems such as
fatigue, hunger, parasites, or minor wounds that are not easily visible.
</p>

<p>
Even if the dog appears healthy, providing food, water,
and monitoring the dog can greatly improve its wellbeing.
</p>

`;

careText=`

<h3>💚 General Care for Street Dogs</h3>

<ul>

<li>Provide clean drinking water.</li>

<li>Offer simple nutritious food such as rice, eggs, or dog food.</li>

<li>Observe the dog for signs of illness or injury.</li>

<li>Ensure the dog is safe from traffic or extreme weather.</li>

<li>If the dog becomes weak or injured, contact a rescue organization.</li>

</ul>

`;

}

document.getElementById("injuryBox").innerHTML=injuryText;
document.getElementById("careBox").innerHTML=careText;

document.getElementById("helpBox").innerHTML=`

<h3>🚑 Free Help Available Nearby</h3>

<p>If the dog needs medical help, you can search for nearby free veterinary care and rescue organizations.</p>

<br>

<button onclick="findVet()">Find Free Animal Hospital</button>

<button onclick="findRescue()">Find Animal Rescue NGOs</button>

`;

}

function findVet(){
window.open("https://www.google.com/maps/search/free+animal+hospital+near+me");
}

function findRescue(){
window.open("https://www.google.com/maps/search/animal+rescue+ngo+near+me");
}