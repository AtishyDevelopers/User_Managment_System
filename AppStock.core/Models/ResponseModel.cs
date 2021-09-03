using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace APPSTOCK.Core.Models
{
    [Keyless]
    public class ResponseModel
    {
        public int Result { get; set; }

       
    }
    [Keyless]
    public class ResponseData {
        public string ResponseCode { get; set; }
        public int statusCode { get; set; }
        public string Message { get; set; }
        public int EmployeeID { get; set; }
        public int ID { get; set; }
        public JObject Data { get; set; }
    }
    [Keyless]
    public class ResponseModelJSON
    {
        public string Result { get; set; }
    }
    [Keyless]
    public class Response
    {
        public long Result { get; set; }
    }
}
