using AppStock.Services.Services;
using APPSTOCK.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JsonConvert = Newtonsoft.Json.JsonConvert;

namespace App_Stock.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FormPathDrpController : ControllerBase
    {
        FormPathDrpService _FormPathDrpService;

        public FormPathDrpController(FormPathDrpService FormPathDrpService)
        {
            _FormPathDrpService = FormPathDrpService;
        }

        [HttpGet("getAllFormpath")]
        public async Task<ActionResult> GetAllFormpath(int flag)
        {

            try
            {
                var result = await _FormPathDrpService.GetAllFormpath(string.Empty, flag);
                //return Ok(result);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All From Path List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All From Path List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All From Path List" });
            }
        }
    }
}
