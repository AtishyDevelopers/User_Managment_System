using AppStock.core.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace APPSTOCK.Core.Models
{
    public class MenuModel:BaseModel
    {
        public int? MenuID { get; set; }
        public string MenuName { get; set; }
        public int? ModuleID { get; set; }
        public string MenuIcon { get; set; }
        public Int16 OrderBy { get; set; }
        

    }
}
