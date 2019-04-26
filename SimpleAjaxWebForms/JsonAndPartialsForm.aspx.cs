using SimpleAjaxWebForms.AppCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SimpleAjaxWebForms
{
    public partial class JsonAndPartialsForm : System.Web.UI.Page
    {
        static int index1 = 0;
        static int index2 = 0;
        static int index3 = 0;
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void btnReturnJson_Click(object sender, EventArgs e)
        {
            HttpContext context = HttpContext.Current;
            var obj = new Person
            {
                firstName = "Markoff",
                lastName = "Chaney",
                dateOfBirth = new MyDate
                {
                    year = 1901,
                    month = 4,
                    day = 30
                }
            };

            AjaxWebFormsController.ReturnJson(obj);
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

        protected void btnSendJson_Click(object sender, EventArgs e)
        {
            Person deserializedObject = AjaxWebFormsController.GetModel<Person>();
            deserializedObject.firstName += " updated";
            deserializedObject.lastName += " updated";
            AjaxWebFormsController.ReturnJson(deserializedObject);

        }
    }
}