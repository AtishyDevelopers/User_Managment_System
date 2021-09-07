
using APPSTOCK.Core.Models;
using AppStock.core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using AppStock.core.Master;

namespace APPSTOCK.Persistence.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.SetCommandTimeout(TimeSpan.FromMinutes(4).Seconds);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Employees>().HasNoKey();
            builder.Entity<ModulesModel>().HasNoKey();
            builder.Entity<MenuModel>().HasNoKey();
            builder.Entity<DepartmentMaster>().HasNoKey();
            builder.Entity<ResponseModel>().HasNoKey();
            builder.Entity<ResponseModelJSON>().HasNoKey();
            builder.Entity<FormModel>().HasNoKey();
            builder.Entity<UsersMaster>().HasNoKey();
            builder.Entity<LoginModel>().HasNoKey(); 
            builder.Entity<RoleFormMapModel>().HasNoKey();
            builder.Entity<GroupModel>().HasNoKey();
            builder.Entity<DesignationMaster>().HasNoKey();
            builder.Entity<MenuFormMapModel>().HasNoKey();
            builder.Entity<CategoryModel>().HasNoKey();
            builder.Entity<AddColumnModel>().HasNoKey();
            builder.Entity<CountryModel>().HasNoKey();
            

            base.OnModelCreating(builder);

        }

         
        //public DbSet<UserModel> UsersModel { get; set; }
        //public DbSet<Employees> Employees { get; set; }
        public DbSet<ResponseModel> ResponseModel { get; set; }
        public DbSet<ResponseModelJSON> ResponseModelJSON { get; set; }
        public DbSet<FormModel> FormModel { get; set; }
        public DbSet<ModulesModel> ModulesModel { get; set; }
        public DbSet<MenuModel> MenuModel { get; set; }
        public DbSet<DepartmentMaster> DepartmentMaster { get; set; }
        public DbSet<DesignationMaster> DesignationMaster { get; set; }
        public DbSet<UsersMaster> UsersMaster { get; set; }
        public DbSet<LoginModel> LoginModel { get; set; }
        public DbSet<RoleFormMapModel> RoleFormMapModel { get; set; }
        public DbSet<MenuFormMapModel> MenuFormMapModel { get; set; }
        public DbSet<GroupModel> GroupModel { get; set; }
        public DbSet<CategoryModel> CategoryModel { get; set; }
        public DbSet<AddColumnModel> AddColumnModel { get; set; }
        public DbSet<CountryModel> CountryModel { get; set; }
    }
}
