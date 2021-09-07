using System;
using System.Collections.Generic;
using System.Text;

namespace AppStock.core.Models
{
   public class UserMasterModel
    {
       
            public long MstEmployeeID { get; set; }
            public int MstRoleID { get; set; }
            public int MstCityID { get; set; }
            public string RelationShipID { get; set; }
            public string CityName { get; set; }
            public string MstState { get; set; }
            public string MstCountry { get; set; }
            public int PinCode { get; set; }
            public int OrgnizationEmployeeCount { get; set; }
            public int MstVaccinatedID { get; set; }
            public int MstCategoryID { get; set; }
            public string MobileNo { get; set; }
            public string EPassType { get; set; }
            public string OrgnizationName { get; set; }
            public string ContactPersontName { get; set; }
            public string FirstName { get; set; }
            public string MiddletName { get; set; }
            public string LastName { get; set; }
            public bool Male { get; set; }
            public bool Female { get; set; }
            public bool Other { get; set; }
            public string DateOfBirth { get; set; }
            public string EmailID { get; set; }
            public string MapLatitude { get; set; }
            public string MapLongitude { get; set; }

            public string UserName { get; set; }
            public string Password { get; set; }
            public string Landmark { get; set; }
            public string BuildingArea { get; set; }
            public string Street { get; set; }
            public bool WeeklyOffMonday { get; set; }
            public bool WeeklyOffTuesday { get; set; }
            public bool WeeklyOffWednesday { get; set; }
            public bool WeeklyOffThursday { get; set; }
            public bool WeeklyOffFriday { get; set; }
            public bool WeeklyOffSaturday { get; set; }
            public bool WeeklyOffSunday { get; set; }
            public string UserImage { get; set; }
            public string UserImageH { get; set; }
            public byte[] PhotoData { get; set; }
            public int MstDocumentID { get; set; }
            public string UserDocument { get; set; }
            public string IDContentType { get; set; }
            public string Pancard { get; set; }
            public string PancardH { get; set; }
            public int PancardId { get; set; }
            public byte[] PancardData { get; set; }
            public string AadhaarCard { get; set; }
            public string AadhaarCardH { get; set; }
            public byte[] AadhaarData { get; set; }
            public int AadhaarCardId { get; set; }
            public string ElectricityBill { get; set; }
            public string ElectricityBillH { get; set; }
            public byte[] ElectricityData { get; set; }
            public int ElectricityBillId { get; set; }
            public string License { get; set; }
            public string LicenseH { get; set; }
            public byte[] LicenseData { get; set; }
            public int LicenseId { get; set; }
            public string Passport { get; set; }
            public string PassportH { get; set; }
            public byte[] PassportData { get; set; }
            public int PassportId { get; set; }
            public string OfficeId { get; set; }
            public string OfficeIdH { get; set; }
            public int OfficeIdId { get; set; }
            public byte[] OfficeIdData { get; set; }
            public string Otherprof { get; set; }
            public string OtherprofH { get; set; }
            public byte[] OtherprofData { get; set; }
            public int OtherprofId { get; set; }
            public string UserType { get; set; }
            public string RoleName { get; set; }
            public string CreatedIP { get; set; }
            public string CreatedByID { get; set; }
            public string CreatedByName { get; set; }
            public string CreatedDate { get; set; }
            public string ModifyByName { get; set; }
            public string ModifyByID { get; set; }
            public string ModifyIP { get; set; }
            public string ModifyDate { get; set; }
            public bool IsActive { get; set; }
            public string Vaccinated { get; set; }
            public string Category { get; set; }
            public string RetypePassword { get; set; }
            public string OldPassword { get; set; }

            public string OTPVerify { get; set; }
            public string OTPSend { get; set; }
            public int Status { get; set; }
            public string StatusMessage { get; set; }
            public bool VerifyEmailID { get; set; }
            public bool VerifyMobileNo { get; set; }

            public int MstOrgnizationHolidayID { get; set; }
            public string HolidayDate { get; set; }

            public string IndustryType { get; set; }
            public string AgencyType { get; set; }

            public int CategoryRoleID { get; set; }
            public int NotificationLevel { get; set; }


        }

        public class Login
        {
            public string UserId { get; set; }
            public string Email { get; set; }
            public string Name { get; set; }
            public string Password { get; set; }
            public string Role { get; set; }


        }
    }
