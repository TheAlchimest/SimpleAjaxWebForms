class WebFormAjaxPartial {
 
    // url  : initial url 
    // ajaxMethod :
    // onErrorBehavior : a function that we need to call if any error happend 
    constructor() {

    }

    ////=========================================================
    ////AjaxCall
    ////------------------------------------------------------
    // make an ajax call 
    // url: url to server action
    // $Element : that make the action it is requirder only for webforms solution 
    // successEventHandler: optional parameter it is a function that we need to call after success
    // successEventHandler: it is a function that we need to call after error 
    AjaxCall( $Element, successEventHandler) {
        WebFormsAjax.SubmitWebForm($Element, successEventHandler);
    }
    ////=========================================================
    ////registerEvent
    ////------------------------------------------------------
    registerEvent($Element, $container, eventType) {
        var vm = this;
        // create ajax success call back function
        var ajaxSuccessResultCallBack = vm.loadPartialCallBack($container);
        // create the event handler of on click event 
        var eventHandlerFunction = function (e) {
            vm.AjaxCall( $Element, ajaxSuccessResultCallBack );
        };
        //register event
        JqueryEventHelper.RegisterEvent($Element, eventType, eventHandlerFunction);

    }
    ////=========================================================
    ////registerByIds
    ////------------------------------------------------------
    registerEventByIds(elementId, containerId, eventType) {
        var vm = this;
        var $Element = jqueryHelper.GetElement(elementId);
        var $container = jqueryHelper.GetElement(containerId);
        vm.registerEvent($Element, $container, eventType);
    }
    ////=========================================================
    ////registerOnClick
    ////------------------------------------------------------
    registerEventOnClick($Element, $container) {
        var vm = this;
        vm.registerEvent($Element, $container, jqueryFormEvents.click);
    }
    ////=========================================================
    ////registerOnClickByIds
    ////------------------------------------------------------
    registerEventOnClickByIds(elementId, containerId) {
        var vm = this;
        vm.registerEventByIds(elementId, containerId, jqueryFormEvents.click);
    }
    ////=========================================================
    ////registerOnChange
    ////------------------------------------------------------
    registerEventOnChange($Element, $container) {
        var vm = this;
        vm.registerEvent($Element, $container, jqueryFormEvents.change);

    };
    ////=========================================================
    ////registerOnChangeByIds
    ////------------------------------------------------------
    registerEventOnChangeByIds(elementId, containerId) {
        var vm = this;
        vm.registerEventByIds(elementId, containerId, jqueryFormEvents.change);
    }
    ////=========================================================
    loadPartialCallBack($container) {
        var vm = this;
        var callBack = function (data) {
            $container.html(data);
        };
        return callBack;
    }
////=========================================================
}


