using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;


namespace AppStock.core.Models
{
    public class LoginModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
        //public int? UserId { get; set; }
        //public int? DivisionID { get; set; }
        //public int? RoleID { get; set; }
        //public string? ContactNumber { get; set; }

    }
    public class ChangePasswordModel
    {
        public int userID { get; set; }
        public int createdByID { get; set; }
        public string emailAddress { get; set; }
        public string userPasswordNew { get; set; }
        public string userOTP { get; set; }

    }
    public class MessageResponse
    {
        public string ErrorMessage { get; set; }
    }
    public class UserDetailModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
        //public int? UserId { get; set; }
        //public int? DivisionID { get; set; }
        //public int? RoleID { get; set; }
        //public string ContactNumber { get; set; }
        //public string EmailAddress { get; set; }

    }
}
