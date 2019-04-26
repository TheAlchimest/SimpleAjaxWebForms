////=========================================================
//// register all elements has ids in jqueryElsments object 
////------------------------------------------------------
var jqueryElsments = {};
var jqueryHelper = {};
jqueryHelper.CollectAllPageElements = function () {
    //reset jqueryElsments
    jqueryElsments = {};
    //collect all elements
    $('[id]').each(function (ind, obj) {
        var id = $(this).prop('id');
        jqueryElsments[id] = $(this);
        //console.log(id);
    });
    //console.log("jqueryElsments",jqueryElsments);
};
jqueryHelper.GetElement = function (id) {
    return jqueryElsments[id];
};


(function () {
    $(document).ready(function () {
        debugger;
        jqueryHelper.CollectAllPageElements();
    });
})();
