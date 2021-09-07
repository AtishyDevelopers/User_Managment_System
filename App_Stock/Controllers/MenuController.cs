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
    public class MenuController : ControllerBase
    {
        MenuService _menuService;

        public MenuController(MenuService menuService)
        {
            _menuService = menuService;
        }


        [HttpGet("getAllMenu")]
        public async Task<ActionResult> GetAllMenu(int flag)
        {
            try
            {
                var result = await _menuService.GetAllMenu(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }



        [HttpPost("saveMenu")]
        public async Task<IActionResult> SaveMenu(MenuModel objItemModel)
         {
            int flag = 0;
            try
            {
                if (objItemModel != null)
                {
                    if (objItemModel.MenuID > 0 & objItemModel.IsDeleted == true)
                        flag = 4;// Delete
                    else if (objItemModel.MenuID > 0)
                        flag = 3;//Edit or Update
                    else
                        flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _menuService.SaveMenu(node.ToString(), flag);
                    return Ok(result);
                }
                return Ok("Something went wrong.");
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }

        }


    }
}
