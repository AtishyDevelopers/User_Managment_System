using AppStock.Services;
using APPSTOCK.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson.IO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JsonConvert = Newtonsoft.Json.JsonConvert;
using AppStock.core.Models;
using AppStock.Services.Services;

namespace App_Stock.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        CategoryService _CategoryService;

        public CategoryController(CategoryService CategoryService)
        {
            _CategoryService = CategoryService;
        }


        [HttpGet("getAllCategory")]
        public async Task<ActionResult> getAllCategory(int flag)
        {
            try
            {
                var result = await _CategoryService.getAllCategory(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }
        [HttpGet("getAllDepartment")]
        public async Task<ActionResult> getAllDepartment(int flag)
        {
            try
            {
                var result = await _CategoryService.getAllDepartment(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }
        [HttpGet("getAllRole")]
        public async Task<ActionResult> getAllRole(int flag)
        {
            try
            {
                var result = await _CategoryService.getAllRole(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }

        [HttpGet("getAllCountry")]
        public async Task<ActionResult> getAllCountry(int flag)
        {
            try
            {
                var result = await _CategoryService.getAllCountry(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }

        [HttpGet("getAllState")]
        public async Task<ActionResult> getAllState(int flag)
        {
            try
            {
                var result = await _CategoryService.getAllState(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }

        [HttpGet("getAllCity")]
        public async Task<ActionResult> getAllCity(int flag)
        {
            try
            {
                var result = await _CategoryService.getAllCity(string.Empty, flag);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return Ok(new { Message = ex });
            }
        }


        [HttpPost("saveCategory")]
        public async Task<IActionResult> SaveCategory(CategoryModel objItemModel)
        {
            int flag = 0;
            objItemModel.CreatedByID = "0";
            objItemModel.CreatedByName = "Admin";
            objItemModel.CreatedIP = "10";
            try
            {
                if (objItemModel != null)
                {
                    if (objItemModel.MstCategoryId > 0 & objItemModel.IsDeleted == true)
                        flag = 4;// Delete
                    else if (objItemModel.MstCategoryId > 0)
                        flag = 3;//Edit or Update
                    else
                        flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _CategoryService.saveCategory(node.ToString(), flag);
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
