using AppStock.core.Models;
using AppStock.Services;
using AppStock.Services.Services;
using APPSTOCK.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App_Stock.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NotificationRulesController : Controller
    {
        NotificationRulesService _notificationrulesService;

        public NotificationRulesController(NotificationRulesService notificationrulesService)
        {
            _notificationrulesService = notificationrulesService;
        }


        [HttpGet("getAllProjectRecords")]
        public async Task<ActionResult> GetAllProjectRecords()
        {
            try
            {
                int flag = 1;
                var result = await _notificationrulesService.GetAllProjectRecords(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Project List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Project List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Project List" });
            }
        }

        [HttpGet("getAllActionRecords")]
        public async Task<ActionResult> GetAllActionRecords()
        {
            try
            {
                int flag = 1;
                var result = await _notificationrulesService.GetAllActionRecords(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Action List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Action List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Action List" });
            }
        }

        [HttpGet("getAllSubActionRecords")]
        public async Task<ActionResult> GetAllSubActionRecords()
        {
            try
            {
                int flag = 1;
                var result = await _notificationrulesService.GetAllSubActionRecords(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All SubAction List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All SubAction List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All SubAction List" });
            }
        }

        [HttpGet("getAllEntityTypeRecords")]
        public async Task<ActionResult> GetAllEntityTypeRecords()
        {
            try
            {
                int flag = 1;
                var result = await _notificationrulesService.GetAllEntityTypeRecords(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Entity Type List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Entity Type List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Entity Type List" });
            }
        }

        [HttpGet("getAllRecipientRecords")]
        public async Task<ActionResult> GetAllgetAllRecipientRecords()
        {
            try
            {
                int flag = 1;
                var result = await _notificationrulesService.GetAllRecipientRecords(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Recipient List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Recipient List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Recipient List" });
            }
        }

        [HttpGet("getAllChannelRecords")]
        public async Task<ActionResult> GetAllgetAllChannelRecords()
        {
            try
            {
                int flag = 1;
                var result = await _notificationrulesService.GetAllChannelRecords(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Channel List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Channel List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Channel List" });
            }
        }






        [HttpPost("saveProject")]
        public async Task<IActionResult> SaveProject(ProjectsModel objItemModel)
        {
            int flag = 0;
            string msg = "";


            if (objItemModel.IsDeleted == true)
            {
                flag = 4;
                msg = "Delete existing project";
            }
            else if (objItemModel.ProjectId > 0)
            {
                flag = 3;
                msg = "Update existing project";
            }
            else
            {
                flag = 2;
                msg = "Add new project";

            }
            try
            {
                if (objItemModel != null)
                {
                    //if (objItemModel.ProjectId > 0 & objItemModel.IsDeleted == true)
                    //    flag = 4;// Delete
                    //else if (objItemModel.ProjectId > 0)
                    //    flag = 3;//Edit or Update
                    //else
                    //    flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _notificationrulesService.SaveProjectRecords(node.ToString(), flag);
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

        [HttpPost("saveAction")]
        public async Task<IActionResult> SaveAction(NotificationActionsModel objItemModel)
        {
            int flag = 0;
            string msg = "";


            if (objItemModel.IsDeleted == true)
            {
                flag = 4;
                msg = "Delete existing action";
            }
            else if (objItemModel.ActionId > 0)
            {
                flag = 3;
                msg = "Update existing action";
            }
            else
            {
                flag = 2;
                msg = "Add new action";

            }
            try
            {
                if (objItemModel != null)
                {
                    //if (objItemModel.ActionId > 0 & objItemModel.IsDeleted == true)
                    //    flag = 4;// Delete
                    //else if (objItemModel.ActionId > 0)
                    //    flag = 3;//Edit or Update
                    //else
                    //    flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _notificationrulesService.SaveActionRecords(node.ToString(), flag);
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

        [HttpPost("saveSubAction")]
        public async Task<IActionResult> SaveSubAction(NotificationSubActionsModel objItemModel)
        {
            int flag = 0;
            string msg = "";


            if (objItemModel.IsDeleted == true)
            {
                flag = 4;
                msg = "Delete existing sub action";
            }
            else if (objItemModel.SubActionId > 0)
            {
                flag = 3;
                msg = "Update existing sub action";
            }
            else
            {
                flag = 2;
                msg = "Add new sub action";

            }
            try
            {
                if (objItemModel != null)
                {
                    //if (objItemModel.SubActionId > 0 & objItemModel.IsDeleted == true)
                    //    flag = 4;// Delete
                    //else if (objItemModel.SubActionId > 0)
                    //    flag = 3;//Edit or Update
                    //else
                    //    flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _notificationrulesService.SaveSubActionRecords(node.ToString(), flag);
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

        [HttpPost("saveEntityType")]
        public async Task<IActionResult> SaveEntityType(NotificationEntityTypeModel objItemModel)
        {
            int flag = 0;
            string msg = "";


            if (objItemModel.IsDeleted == true)
            {
                flag = 4;
                msg = "Delete existing entity type";
            }
            else if (objItemModel.EntityTypeId > 0)
            {
                flag = 3;
                msg = "Update existing entity type";
            }
            else
            {
                flag = 2;
                msg = "Add new entity type";

            }
            try
            {
                if (objItemModel != null)
                {
                    //if (objItemModel.EntityTypeId > 0 & objItemModel.IsDeleted == true)
                    //    flag = 4;// Delete
                    //else if (objItemModel.EntityTypeId > 0)
                    //    flag = 3;//Edit or Update
                    //else
                    //    flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _notificationrulesService.SaveEntityTypeRecords(node.ToString(), flag);
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

        //[HttpPost("saveRecipient")]
        //public async Task<IActionResult> SaveRecipient(NotificationRecipientsModel objItemModel)
        //{
        //    int flag = 0;
        //    try
        //    {
        //        if (objItemModel != null)
        //        {
        //            if (objItemModel.RecipientId > 0 & objItemModel.IsDeleted == true)
        //                flag = 4;// Delete
        //            else if (objItemModel.RecipientId > 0)
        //                flag = 3;//Edit or Update
        //            else
        //                flag = 2;//Create or insert

        //            var model = JsonConvert.SerializeObject(objItemModel);
        //            System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
        //            var result = await _notificationrulesService.SaveRecords(node.ToString(), flag);
        //            return Ok(result);
        //        }
        //        return Ok("Something went wrong.");
        //    }
        //    catch (Exception ex)
        //    {

        //        return Ok(new { Message = ex });
        //    }

        //}

        [HttpPost("saveChannel")]
        public async Task<IActionResult> SaveChannel(NotificationChannelsModel objItemModel)
        {
            int flag = 0;
            string msg = "";


            if (objItemModel.IsDeleted == true)
            {
                flag = 4;
                msg = "Delete existing channel";
            }
            else if (objItemModel.ChannelId > 0)
            {
                flag = 3;
                msg = "Update existing channel";
            }
            else
            {
                flag = 2;
                msg = "Add new channel";

            }
            try
            {
                if (objItemModel != null)
                {
                    //if (objItemModel.ChannelId > 0 & objItemModel.IsDeleted == true)
                    //    flag = 4;// Delete
                    //else if (objItemModel.ChannelId > 0)
                    //    flag = 3;//Edit or Update
                    //else
                    //    flag = 2;//Create or insert

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _notificationrulesService.SaveChannelRecords(node.ToString(), flag);
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
