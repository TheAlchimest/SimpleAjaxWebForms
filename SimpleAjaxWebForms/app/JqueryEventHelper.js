var JqueryEventHelper = {};
////=========================================================
//JqueryEventHelper.PostAndGetPartialContent = function ($btn, $container,callBackFunction,e) {
//    WebFormsAjax.PostAndGetPartialContent($btn, $container, callBackFunction,e);
//};
////=========================================================
//RegisterEvent
JqueryEventHelper.RegisterEvent = function ($Element, eventType, eventHandlerFunction) {
    $($Element).on(eventType, function (e) {
        e.preventDefault();
        console.log("eventType", eventType);
        if (eventHandlerFunction) { eventHandlerFunction(e); }
    });
};
////=========================================================
//RegisterEventOnClick
JqueryEventHelper.RegisterEventOnClick = function ($Element, eventHandlerFunction) {
    JqueryEventHelper.RegisterEvent($Element, jqueryFormEvents.click, eventHandlerFunction);
};
//RegisterEventOnClick
JqueryEventHelper.RegisterEventOnChange = function ($Element, eventHandlerFunction) {
    JqueryEventHelper.RegisterEvent($Element, jqueryFormEvents.change, eventHandlerFunction);
};
////=========================================================

/*
$("#Button3").click(function (e) {
    e.preventDefault();
    var callBack = function (data) {
        $("#userControl_1").html(data);
    };
    WebFormsAjax.SubmitWebForm($(this), e, callBack);
    return false;
});
*/

jqueryFormEvents = {
    blur: "blur",        // Bind an event handler to the “blur” JavaScript event, or trigger that event on an element.
    change: "change",       // Bind  an event handler to the “change” JavaScript event, or trigger that event on an element.
    focus: "focus",       // Bind  an event handler to the “focus” JavaScript event, or trigger that event on an element.
    focusin: "focusin",     // Bind  an event handler to the “focusin” event.
    focusout: "focusout",    // Bind  an event handler to the “focusout” JavaScript event.
    select: "select",      // Bind  an event handler to the “select” JavaScript event, or trigger that event on an element.
    submit: "submit",      // Bind  an event handler to the “submit” JavaScript event, or trigger that event on an element.
    click:"click"
}