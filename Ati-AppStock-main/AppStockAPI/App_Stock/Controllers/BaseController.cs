using AppStock.core.Master;
using AppStock.core.Models;
using AppStock.Services.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App_Stock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : Controller
    {

        BaseService _baseService;

        public BaseController(BaseService baseService)
        {
            _baseService = baseService;
        }


        [HttpGet("getDepartment")]
        public async Task<IActionResult> GetDepartment(int flag)
        {

            try
            {
                var result = await _baseService.GetAllDepartment(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        [HttpPost("savedepartment")]

        public async Task<IActionResult> SaveDepartment(DepartmentMaster model)
        {
            int flag = 0;
            if (model.DepartmentID == 0)
            {
                flag = 2;
            }
            if (model.DepartmentID > 0)
            {
                flag = 3;
            }
            if (model.IsDeleted == true)
            {
                flag = 4;
            }
            try
            {
                var json = JsonConvert.SerializeObject(model);
                System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(json.ToString(), "Root");

                var result = await _baseService.SaveDepartment(node.ToString(), flag);
                return Ok(result);
            }
            catch (ArgumentException e) when (e.ParamName == "…")
            {
                return Ok(new { message = e });
            }
            catch (InvalidCastException e)
            {
                return Ok(new { message = e });
            }
            catch (Exception ex)
            {

                return Ok(new { message = ex });
            }

        }



        [HttpGet("getAllRole")]
        public async Task<ActionResult> GetAllRole(int flag)
        {
            try
            {
                var result = await _baseService.GetAllRole(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }



        [HttpPost("saveRole")]
        public async Task<IActionResult> SaveRole(RoleMaster objItemModel)
        {
            int flag = 0;
            try
            {
                if (objItemModel != null)
                {
                    if (objItemModel.RoleID > 0 & objItemModel.IsDeleted == true)
                        flag = 4;// Delete
                    else if (objItemModel.RoleID > 0)
                        flag = 3;//Edit or Update
                    else
                        flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _baseService.SaveRole(node.ToString(), flag);
                    return Ok(result);
                }
                return Ok("Something went wrong.");
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }

        }


        [HttpGet("getAllDesignation")]
        public async Task<ActionResult> GetAllDesignation(int flag)
        {
            try
            {
                var result = await _baseService.GetAllDesignation(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }



        [HttpPost("saveDesignation")]
        public async Task<IActionResult> SaveDesignation(DesignationMaster objItemModel)
        {
            int flag = 0;
            try
            {
                if (objItemModel != null)
                {
                    if (objItemModel.DesignationId > 0 & objItemModel.IsDeleted == true)
                        flag = 4;// Delete
                    else if (objItemModel.DesignationId > 0)
                        flag = 3;//Edit or Update
                    else
                        flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _baseService.SaveDesignation(node.ToString(), flag);
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
