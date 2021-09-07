using AppStock.core.Models;
using AppStock.Services;
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
    public class RulesNotificationController : Controller
    {
        RulesNotificationService _notificationrulesService;

        public RulesNotificationController(RulesNotificationService notificationrulesService)
        {
            _notificationrulesService = notificationrulesService;
        }

        [HttpGet("getAllNotificationRulesRecords")]
        public async Task<ActionResult> GetAllNotificationRulesRecords()
        {
            try
            {
                int flag = 1;
                var result = await _notificationrulesService.GetAllNotificationRulesRecords(string.Empty, flag);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Notification Rules List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Notification Rules List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Notification Rules List" });
            }
        }

        [HttpPost("saveNotificationRules")]
        public async Task<IActionResult> SaveNotificationRules(NotificationRulesModel objItemModel)
        {
            int flag = 2;
            int retutnresult = 0;
            string msg = "";

            ////if (objItemModel.RulesId > 0)
            ////{
            ////    flag = 3;
            ////    msg = "Update existing notification rules";
            ////}
            ////if (objItemModel.IsDeleted == true)
            ////{
            ////    flag = 4;
            ////    msg = "Delete existing notification rules";
            ////}
            ////else
            ////{
            // flag = 2;
            msg = "Add new notification rules";
            //}
            try
            {
                if (objItemModel != null)
                {
                    if (objItemModel.SubActionList.Count > 0)
                    {
                        NotificationRulesModel objNotification = new NotificationRulesModel();
                        foreach (var i in objItemModel.SubActionList)
                        {
                            objNotification.SubActionId = i.SubActionId;
                            foreach (var e in objItemModel.EntityTypeList)
                            {
                                objNotification.EntityTypeId = e.EntityTypeId;

                                foreach (var r in objItemModel.RoleList)
                                {
                                    objNotification.RoleId = (int)r.RoleId;

                                    foreach (var c in objItemModel.ChannelList)
                                    {
                                        objNotification.ChannelId = c.ChannelId;
                                        objNotification.ProjectId = objItemModel.ProjectId;
                                        objNotification.ActionId = objItemModel.ActionId;
                                        objNotification.CreatedById = objItemModel.CreatedById;
                                        objNotification.CreatedByIP = objItemModel.CreatedByIP;
                                        var model = JsonConvert.SerializeObject(objNotification);
                                        System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                                        var result = await _notificationrulesService.SaveNotificationRules(node.ToString(), flag);
                                        if (result.First().Result == 1)
                                        {
                                            retutnresult = 1;
                                        }
                                        else
                                        {
                                            retutnresult = 0;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (retutnresult == 1)
                    {
                        return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = msg });
                    }
                    else
                    {
                        return Ok(new { ResponseMessage = "Failed", ResponseCode = 001, Desc = msg });
                    }
                }

                ////if (objItemModel != null)
                ////{
                ////    if (objItemModel.RulesId > 0 & objItemModel.IsDeleted == true)
                ////        flag = 10;// Delete
                ////    else if (objItemModel.RulesId > 0)
                ////        flag = 9;//Edit or Update
                ////    else
                ////        flag = 8;//Create or insert

                ////    var model = JsonConvert.SerializeObject(objItemModel);
                ////    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                ////    var result = await _notificationrulesService.SaveRecords(node.ToString(), flag);
                ////    return Ok(result);
                ////}
                return BadRequest(new { ResponseMessage = "Something went wrong.", ResponseCode = 001, Desc = msg });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = msg });
            }

        }

        [HttpPost("updateNotificationRules")]
        public async Task<IActionResult> UpdateNotificationRules(NotificationRulesModel objItemModel)
        {
            int flag = 3;
            string msg = "Update existing notification rules";
            try
            {



                if (objItemModel != null)
                {

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _notificationrulesService.SaveNotificationRules(node.ToString(), flag);
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

        [HttpPost("deleteNotificationRules")]
        public async Task<IActionResult> DeleteNotificationRules(NotificationRulesModel objItemModel)
        {
            int flag = 4;
            string msg = "delete existing notification rules";
            try
            {



                if (objItemModel != null)
                {

                    var model = JsonConvert.SerializeObject(objItemModel);
                    System.Xml.Linq.XNode node = JsonConvert.DeserializeXNode(model.ToString(), "Root");
                    var result = await _notificationrulesService.SaveNotificationRules(node.ToString(), flag);
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
