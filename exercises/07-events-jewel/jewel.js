/**
 * Using addEventListener, attach an event to each jewel <img> so that, when clicked, it will:
 * 1.) Update the count in the counter box
 * 2.) Remove the jewel from the page
 */

 var counter = document.getElementById('counter');
 var counterTrack = counter.innerHTML;
 var jewels = document.getElementsByTagName('img');
 for (var i = 0; i < jewels.length; i++) {
    var jewel = jewels[i];
    jewel.addEventListener("click",  function(e) {
     counterTrack++;
     counter.innerHTML = counterTrack;
     e.target.parentNode.removeChild(e.target);
 });
}
