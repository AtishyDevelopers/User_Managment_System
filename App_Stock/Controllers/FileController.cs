using AppStock.core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;


namespace App_Stock.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class FileController : Controller
    {

        string basePath = Environment.CurrentDirectory;
        private IConfiguration Configuration { get; }
        public FileController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("uploadimage")]
        public IActionResult uploadimage(fileonlyModel model)
        {
            try
            {
                Environment.CurrentDirectory = Configuration.GetConnectionString("PhysicalPath");
                // string folderName = Path.Combine( "\\HP12\\eSahyogUserIdentityImage");
                string folderName = Configuration.GetConnectionString("PhysicalPath") + "\\";
                byte[] bytes = Convert.FromBase64String(model.File.Replace("data:image/jpeg;base64,", "").Replace("data:image/png;base64,", ""));

                //var fileName = model.branchId.ToString() + "-" + DateTime.Now.ToString("dd-MM-yyyy-hh-mm-ss-ffff") + ".jpg";
                var fileName = "workorder" + DateTime.Now.ToString("dd-MM-yyyy-hh-mm-ss-ffff") + ".jpg";

                using (Image image = Image.FromStream(new MemoryStream(bytes)))
                {
                    image.Save(folderName + fileName, ImageFormat.Jpeg);  // Or Png
                }
                return Ok(new { fileName });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
