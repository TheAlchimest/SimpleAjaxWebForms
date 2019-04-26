using SimpleAjaxWebForms.AppCode;
using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace WebFormsTestUsingJson.WorkWithJson
{
    public partial class WebForm1 : System.Web.UI.Page
    {
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


        protected void btnSendJson_Click(object sender, EventArgs e)
        {
            Person deserializedObject = AjaxWebFormsController.GetModel<Person>();
            deserializedObject.firstName += " updated";
            deserializedObject.lastName += " updated";
            AjaxWebFormsController.ReturnJson(deserializedObject);
        }
    }



}