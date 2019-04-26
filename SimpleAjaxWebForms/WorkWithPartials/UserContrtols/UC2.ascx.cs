using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebFormsTestUsingJson.SubmitPartials.UserContrtols
{
    public partial class UC2 : System.Web.UI.UserControl
    {
        public string Title { get; set; }
        protected void Page_Load(object sender, EventArgs e)
        {
            Title = "User control 2";
            
        }
    }
}