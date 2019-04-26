<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebFormsTestUsingJson.WorkWithPartials.WebForm1" %>

<%@ Register Src="UserContrtols/UC1.ascx" TagName="UC1" TagPrefix="uc1" %>
<%@ Register Src="UserContrtols/UC2.ascx" TagName="UC2" TagPrefix="uc2" %>
<%@ Register Src="UserContrtols/UC3.ascx" TagName="UC3" TagPrefix="uc3" %>

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
            <uc1:UC1 ID="UC11" runat="server" />
            <uc2:UC2 ID="UC21" runat="server" />
            <uc3:UC3 ID="UC31" runat="server" />
            <br />
            <asp:Button ID="btnGetUc1" runat="server" OnClick="btnUpdateUc1_Click" Text="update uc1" />
            <asp:Button ID="btnGetUc2" runat="server" OnClick="btnUpdateUc2_Click" Text="update uc2" />
            <asp:Button ID="btnGetUc3" runat="server" OnClick="btnUpdateUc3_Click" Text="update uc3" />

            <hr />

        </div>
    </form>
    <script>
        ajaxSetup.init("form1");
        var partial = new WebFormAjaxPartial();
        ////=========================================================
        //// register all partials events
        ////------------------------------------------------------
        $(document).ready(function () {
            partial.registerEventOnClickByIds("btnGetUc1", "userControl_1");
            partial.registerEventOnClickByIds("btnGetUc2", "userControl_2");
            partial.registerEventOnClickByIds("btnGetUc3", "userControl_3");
        });
        ////=========================================================
        
    </script>
</body>
</html>
