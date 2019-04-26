class WebFormAjaxHelper {

    constructor() {

    }

    ////=========================================================
    ////AjaxCall
    ////------------------------------------------------------
    // make an ajax call 
    // $Element : that make the action it is requirder only for webforms solution 
    // successEventHandler: optional parameter it is a function that we need to call after success
    // successEventHandler: it is a function that we need to call after error 
    AjaxCall($Element, successEventHandler) {

        WebFormsAjax.SubmitWebForm($Element, successEventHandler);
    }
    ////=========================================================
    ////registerEvent
    ////------------------------------------------------------
    registerEvent($Element, eventType, successEventHandler) {
        var vm = this;
        // create the event handler of on click event 
        var eventHandlerFunction = function (e) {
            vm.AjaxCall($Element, successEventHandler);
        };
        //register event
        JqueryEventHelper.RegisterEvent($Element, eventType, eventHandlerFunction);

    }
    ////=========================================================
    ////registerByIds
    ////------------------------------------------------------
    registerEventByIds(elementId,  eventType, successEventHandler) {
        var vm = this;
        var $Element = jqueryHelper.GetElement(elementId);
        vm.registerEvent($Element, eventType, successEventHandler);
    }
    ////=========================================================
    ////registerOnClick
    ////------------------------------------------------------
    registerEventOnClick($Element, successEventHandler) {
        var vm = this;
        vm.registerEvent($Element, jqueryFormEvents.click, successEventHandler);
    }
    ////=========================================================
    ////registerOnClickByIds
    ////------------------------------------------------------
    registerEventOnClickByIds(elementId, successEventHandler) {
        var vm = this;
        vm.registerEventByIds(elementId, jqueryFormEvents.click, successEventHandler);
    }
    ////=========================================================
    ////registerOnChange
    ////------------------------------------------------------
    registerEventOnChange($Element, successEventHandler) {
        var vm = this;
        vm.registerEvent($Element, jqueryFormEvents.change, successEventHandler);

    };
    ////=========================================================
    ////registerOnChangeByIds
    ////------------------------------------------------------
    registerEventOnChangeByIds(elementId, successEventHandler) {
        var vm = this;
        vm.registerEventByIds(elementId, jqueryFormEvents.change, successEventHandler);
    }
    ////=========================================================
    ////=========================================================
    ////registerOnChangeByIds
    ////------------------------------------------------------
    registerSenModel_OnClick(elementId, collectModelFunction, successEventHandler) {
        debugger;
        var vm = this;
        if (!jqueryElsments[elementId]) {
            jqueryElsments[elementId] = $("#" + elementId);
        }
        jqueryElsments[elementId].removeAttr("onclick");
        jqueryElsments[elementId].removeAttr("href");

        //jqueryElsments["btn_GrievanceRequestSend"]
        jqueryElsments[elementId].click(function (e) {

            var isValid = ajaxSetup.$aspnetForm.isValid();
            if (isValid) {
                var model = collectModelFunction();
                WebFormsAjax.SubmitModel($(this), model, function (data) {
                    successEventHandler(data);
                });
            }
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }
    ////=========================================================
}