using SimpleAjaxWebForms.AppCode;
using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace WebFormsTestUsingJson.WorkWithPartials
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        static int index1 = 0;
        static int index2 = 0;
        static int index3 = 0;
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        protected void btnUpdateUc1_Click(object sender, EventArgs e)
        {
            UC11.Title = "User control 1 udate no " + (++index1);
            AjaxWebFormsController.ReturnUserControl(UC11);

        }

        protected void btnUpdateUc2_Click(object sender, EventArgs e)
        {
            UC21.Title = "User control 2 udate no " + (++index2);
            AjaxWebFormsController.ReturnUserControl(UC21);
        }

        protected void btnUpdateUc3_Click(object sender, EventArgs e)
        {
            Button btn = (Button)sender;
            UC31.Title = "User control 3 udate no " + (++index3);
            AjaxWebFormsController.ReturnUserControl(UC31);
        }

    }



}