
let navClose = (function() {

//Create a HTML collection of links
let navigationItem = document.body.getElementsByClassName('navigation__link');

//Convert the HTML collection to an Array
let navigationItemArr = Array.prototype.slice.call(navigationItem);

//Loop through each list item to make checked styling disappear upon click
navigationItemArr.forEach(function(current){
    current.addEventListener('click', function(){
        document.getElementById('navi-toggle').checked = false;
    })
});

})();