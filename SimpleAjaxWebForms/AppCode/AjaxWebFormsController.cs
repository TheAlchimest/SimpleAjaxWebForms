using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;

namespace SimpleAjaxWebForms.AppCode
{
    public class AjaxWebFormsController
    {
        #region --------------ReturnJson--------------
        //---------------------------------------------------------------------
        //ReturnJson
        //---------------------------------------------------------------------
        public static void ReturnJson(object obg)
        {

            var json = new JavaScriptSerializer().Serialize(obg);

            HttpContext context = HttpContext.Current;
            context.Response.ContentType = "text/json";
            context.Response.Write(json);
            context.Response.End();
        }
        //---------------------------------------------------------------------
        #endregion


        #region --------------GetModel--------------
        //---------------------------------------------------------------------
        //GetModel
        //---------------------------------------------------------------------
        public static T GetModel<T>()
        {
            string json = HttpContext.Current.Request.Params["hdnFeild4Model"];
            T deserializedObject = JsonConvert.DeserializeObject<T>(json);
            return deserializedObject;
        }

        //---------------------------------------------------------------------
        #endregion


        #region --------------ReturnUserControl--------------
        //---------------------------------------------------------------------
        //ReturnUserControl
        //---------------------------------------------------------------------
        public static void ReturnUserControl(UserControl uc)
        {
            StringBuilder myStringBuilder = new StringBuilder();
            TextWriter myTextWriter = new StringWriter(myStringBuilder);
            HtmlTextWriter myWriter = new HtmlTextWriter(myTextWriter);
            uc.RenderControl(myWriter);
            string html = myTextWriter.ToString();

            HttpContext context = HttpContext.Current;
            context.Response.ContentType = "text/html";
            context.Response.Write(html);
            context.Response.End();

        }
        //---------------------------------------------------------------------
        #endregion
    }
}