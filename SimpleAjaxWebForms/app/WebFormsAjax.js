var ajaxSetup = {

    aspnetFormClientId: "form1",
    aspnetFormJquerySelector: null,
    $aspnetForm: null,

    onErrorBehaviour: function () {

    },
    init: function (aspnetFormClientId,onErrorGlobalHandler) {
        ajaxSetup.aspnetFormClientId = "#" + aspnetFormClientId;
        ajaxSetup.aspnetFormJquerySelector = "#" + aspnetFormClientId;
        ajaxSetup.$aspnetForm = $(ajaxSetup.aspnetFormJquerySelector);
        if (onErrorGlobalHandler) {
            ajaxSetup.onErrorBehaviour = onErrorGlobalHandler;
        }
        WebFormsAjax.Init();
    }

};
////=========================================================
var WebFormsAjax = {};
////=========================================================
//init
WebFormsAjax.Init = function () {
    WebFormsAjax.PreventDefaultFormBehaviour();
    WebFormsAjax.CreateHiddenFeildForModel();
};

////=========================================================
//// submit web form 
//declare ajax elements 
WebFormsAjax.SubmitWebForm = function ($btn,  callBackFunction) {
    debugger;
    var url = $(ajaxSetup.aspnetFormJquerySelector).attr('action');
    var vm = this;

    var data = $(ajaxSetup.aspnetFormJquerySelector).serialize();
    if ($btn) {
        data += "&" + $($btn).attr('name') + "=" + $($btn).val();
        $("#__EVENTTARGET").val($($btn).attr('name'));
    }

    //ExternalPageManager.showInternalLoaderBeforeAjaxCall();
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function (result) {
            if (callBackFunction) { callBackFunction(result); }
        },
        error: function (xhr, status, error) {
            alert(error);
        }
    });
    return false;
};
////=========================================================
WebFormsAjax.Get = function (url, callBackFunction) {
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        success: function (result) {
            if (callBackFunction) { callBackFunction(result); }
        },
        error: function (xhr, status, error) {
            alert(error);
        }
    });
    return false;
};
////=========================================================
//CreateHiddenFeildForModel
WebFormsAjax.SubmitModel = function ($btn, model, callBackFunction) {
    debugger;
    $("#hdnFeild4Model").val(model);
    WebFormsAjax.SubmitWebForm($btn, callBackFunction);
};
////=========================================================
//CreateHiddenFeildForModel
WebFormsAjax.CreateHiddenFeildForModel = function () {
    $('<input>').attr({
        type: 'hidden',
        id: 'hdnFeild4Model',
        name: 'hdnFeild4Model'
    }).appendTo('form');
};
////=========================================================
//PreventDefaultFormBehaviour
WebFormsAjax.PreventDefaultFormBehaviour = function () {

    $(ajaxSetup.aspnetFormJquerySelector).on("submit", function (event) {
        alert("the form will submitted");
        //return false;
    });
   // document.forms[ajaxSetup.aspnetFormClientId].submit = function () { };
};

////=========================================================
WebFormsAjax.PostAndGetPartialContent = function ($btn, $container, callBackfunction) {
    if (!(callBackfunction)) {
        callBackfunction = function (data) {
            $container.html(data);
        };
    }
        WebFormsAjax.SubmitWebForm($btn, callBackfunction);
};
////=========================================================
WebFormsAjax.PostAndGetPartialContent = function ($btn, $container, callBackfunction) {
    if (!(callBackfunction)) {
        callBackfunction = function (data) {
            $container.html(data);
        };
    }
    WebFormsAjax.SubmitWebForm($btn, callBackfunction);
};
