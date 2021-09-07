using System;
using System.Collections.Generic;
using System.Text;

namespace AppStock.core.Models
{
    public class FileModel
    {

        public long FileID { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public string FileFormat { get; set; }
        public string File { get; set; }
    }
    public class fileonlyModel
    {
        public string File { get; set; }
    }
    public class FileUploadModel
    {

        public string FilePath { get; set; }

        public string File { get; set; }
    }
}

