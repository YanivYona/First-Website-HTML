var submenu1 = 
'<ul id = tafrit1 dir = ltr>' +
    '<li style = "width:199px; display:inline-block;"> <a href = "index.html"> דף הבית </a>' + 
        '<ul class = submenu>' +
            '<li> <a href = "index.html"> דף הבית </a>' +
            '<li> <a href = "Map.html"> מפה </a>' +
        '</ul>' +
    '<li> <a href = "City.html"> העיר </a>' +
        '<ul class = submenu>' +
            '<li> <a href = "Restaurants.html"> מסעדות </a>' +
            '<li> <a href = "History.html"> היסטוריה </a>' +
            '<li> <a href = "Biluy.html"> בילוי </a>' +
        '</ul>' +
    '<li> <a href = "Gallery.html"> גלריה </a>' +
    '<li> <a href = "Contact.html"> צור קשר </a>' +
'</ul>'

function mark() 
{
    var curr_page = window.location.href;
    var object = document.getElementById("tafrit1");
    var elements = object.getElementsByTagName("a");
    for (i = elements.length-1 ; i > 0 ; i--) 
        {
            var tmp = curr_page.indexOf(elements[i].href);
            if (tmp >= 0 ) 
                break; 
        }

    elements[i].className = 'current';
    var objli = elements[i].parentNode.parentNode;
    if (objli.id == "tafrit1")
        {
            elements[i].parentNode.className = 'current';
            return;
        }

    document.getElementById("side").innerHTML = objli.innerHTML;
    objli.parentNode.className = 'current';
}