<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebFormsTestUsingJson.WorkWithJson.WebForm1" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="/Content/bootstrap.css" rel="stylesheet" />
    <script src="/Scripts/jquery-3.3.1.js"></script>
    <script src="/app/jqueryHelper.js"></script>
    <script src="/app/WebFormsAjax.js"></script>
    <script src="/app/JqueryEventHelper.js"></script>
    <script src="/app/AjaxPartialLoader.js"></script>
    <script src="/app/AjaxHelper.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <hr />
            <div id="divResult"></div>
            <hr />
            <br />
            <asp:Button ID="btnReturnJson" runat="server" OnClick="btnReturnJson_Click" Text="return json" />

            <asp:Button ID="btnSendJson" runat="server" OnClick="btnSendJson_Click" Text="Send json" />

            <hr />

        </div>
    </form>
    <script>
        ajaxSetup.init("form1");
        var partial = new WebFormAjaxPartial();
        var ajaxCtrl = new WebFormAjaxHelper();

        ////=========================================================
        //// btnSendJson clicked
        //// test return a json object from server side 
        ////------------------------------------------------------
        $(document).ready(function () {
            ////=========================================================
            //// btnReturnJson clicked
            //// test return a json object from server side 
            ////------------------------------------------------------
            ajaxCtrl.registerEventOnClickByIds("btnReturnJson", function (data) {
                console.log(data);
                $("#divResult").html(JSON.stringify(data, undefined, 2));
            });
            ////=========================================================
            //// btnSendJson clicked
            //// test return a json object from server side 
            ////------------------------------------------------------
            $("#btnSendJson").click(function (e) {
                e.preventDefault();
                var model = '{ "firstName": "Markoff", "lastName": "Chaney", "dateOfBirth": { "year": 1901, "month": 4, "day": 30 } }';
                WebFormsAjax.SubmitModel($(this), model, function (data) {
                    $("#divResult").html(JSON.stringify(data, undefined, 2));
                    alert("firstName:" + data.firstName);
                });

            });
            ////=========================================================

        });
        
    </script>
</body>
</html>
