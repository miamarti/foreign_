/*
* foreign_
* Generates Frameworks tags through native javascript, helping the designer to develop a more accurate code.
* @autor: Miller Augusto Silva Martins
* @email: miller.augusto@gmail.com
**/
window.addEventListener('load', function(){
    [].map.call(document.querySelectorAll('[data-ng-include]'), function(obj){
        var ajax =new XMLHttpRequest();
        ajax.onreadystatechange=function() {
            if (ajax.readyState==4 && ajax.status==200) {
                obj.innerHTML=ajax.responseText;
            }
        }
        ajax.open("GET", (obj.dataset.ngInclude).replace(/'/g, ""), true);
        ajax.send();
    }); 
});
