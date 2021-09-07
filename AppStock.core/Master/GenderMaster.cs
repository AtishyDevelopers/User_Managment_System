using AppStock.core.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace AppStock.core.Master
{
    public class GenderMaster:BaseModel
    {
        public int GenderId { get; set; }
        public string GenderName { get; set; }
    }
}
