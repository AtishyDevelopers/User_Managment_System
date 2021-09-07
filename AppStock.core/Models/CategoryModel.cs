using System;
using System.Collections.Generic;
using System.Text;

namespace AppStock.core.Models
{
    public class CategoryModel
    {
       
            public int MstCategoryId { get; set; }
            public string SubMstCategoryID { get; set; }
            public string[] SubDepartmentID { get; set; }
            public string Category { get; set; }
            public string Description { get; set; }
            public string SubCategoryName { get; set; }
            public string AliesName { get; set; }
            public string DisplayType { get; set; }
        public string DisplayMenuLevel { get; set; }
        public string CategoryLevel { get; set; }
        public string Status { get; set; }
            public bool IsActive { get; set; }
            public string CreatedIP { get; set; }
            public string CreatedByID { get; set; }
            public string CreatedByName { get; set; }
            public string CreatedDate { get; set; }
            public string ModifyByName { get; set; }
            public string ModifyByID { get; set; }
            public string ModifyIP { get; set; }
            public string ModifyDate { get; set; }

        public bool IsDeleted { get; set; }
    }
}
