using AppStock.core.Models;
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
    public class RoleMenuMapController : ControllerBase
    {

        RoleMenuMapService _RoleMenuMapService;

        public RoleMenuMapController(RoleMenuMapService RoleMenuMapService)
        {
            _RoleMenuMapService = RoleMenuMapService;
        }


        [HttpGet("getAllRoleMenuMap")]
        public async Task<ActionResult> GetAllRoleMenuMap(int flag)
        {
            try
            {
                var result = await _RoleMenuMapService.GetAllRoleMenuMap(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Role Menu Map List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Role Menu Map List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Role Menu Map List" });
            }
        }



        [HttpPost("saveRoleMenuMap")]
        public async Task<IActionResult> SaveRoleMenuMap(RoleMenuMapModel objItemModel)
        {
            int flag = 0;
            string msg = "";


            if (objItemModel.IsDeleted == true)
            {
                flag = 4;
                msg = "Delete existing role menu map";
            }
            else if (objItemModel.RoleMenuMapId > 0)
            {
                flag = 3;
                msg = "Update existing role menu map";
            }
            else
            {
                flag = 2;
                msg = "Add new role menu map";
            }
            try
            {
                if (objItemModel != null)
                {
                    //if (objItemModel.RoleMenuMapId > 0 & objItemModel.IsDeleted == true)
                    //    flag = 4;// Delete
                    //else if (objItemModel.RoleMenuMapId > 0)
                    //    flag = 3;//Edit or Update
                    //else
                    //    flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _RoleMenuMapService.SaveRoleMenuMap(node.ToString(), flag);
                    if (result.First().Result == 1)
                    {
                        return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = msg });
                    }
                    else
                    {
                        return Ok(new { ResponseMessage = "Failed", ResponseCode = 001, Desc = msg });
                    }
                }
                return BadRequest(new { ResponseMessage = "Something went wrong.", ResponseCode = 001, Desc = msg });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = msg });
            }

        }
    }
}
