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
    public class NotificationFeedController : ControllerBase
    {
        NotificationFeedService _NotificationFeedService;

        public NotificationFeedController(NotificationFeedService NotificationFeedService)
        {
            _NotificationFeedService = NotificationFeedService;
        }


        [HttpGet("GetNotificationFeed")]
        public async Task<ActionResult> GetNotificationFeed(string UserId)
        {
            try
            {
                var result = await _NotificationFeedService.GetNotificationFeed(UserId);
                if (result != null && result.Count > 0)
                {
                    return Ok(new { ResponseMessage = "Success", ResponseCode = 000, Desc = "All Notification Feed List", DataList = result });
                }

                return NotFound(new { ResponseMessage = "Records not found", ResponseCode = 001, Desc = "All Notification Feed List", DataList = result });
            }
            catch (Exception ex)
            {

                return BadRequest(new { ResponseMessage = ex.Message, ResponseCode = 002, Desc = "All Notification Feed List" });
            }
        }
    }
}
