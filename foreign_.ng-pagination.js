/*
* foreign_
* Generates Frameworks tags through native javascript, helping the designer to develop a more accurate code.
* @autor: Miller Augusto Silva Martins
* @email: miller.augusto@gmail.com
**/
window.addEventListener('load', function(){
    setInterval(function(){
        [].map.call(document.querySelectorAll('[ng-pagination]'), function(obj){
            if(obj.dataset.loaded != 'true'){
              obj.dataset.loaded = 'true';
              obj.innerHTML = '<div class="row"><div class="tables_paginate_tool"><div class="tables_paginate"><div class="pagination-panel">Página <a href="#" class="btn btn-sm default prev disabled" title="Prev"><i class="fa fa-angle-left"></i></a> <input type="text" class="pagination-panel-input form-control input-mini input-inline input-sm" maxlenght="5" value="1"> <a href="#" class="btn btn-sm default next" title="Next"><i class="fa fa-angle-right"></i></a> de <strong>18</strong></div></div><div class="tables_length"><label> <span class="seperator">|</span>Ver <select name="tables_reg_length" class="form-control input-xsmall input-sm input-inline"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option></select> registros</label></div><div class="tables_paginate_info" id="" role="status" aria-live="polite"><span class="seperator">|</span>Encontrado um total de <strong>178</strong> registros</div></div></div>';
            }
        });
    }, 500);
});
