using App_Stock.Controllers;
using AppStock.Persistence;
using AppStock.Persistence.Repositries;
using AppStock.Services;
using AppStock.Services.Services;
using APPSTOCK.Persistence.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace App_Stock
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });
            services.AddControllers();
            services.AddSignalR();
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<IRepository, Repository>();
            services.AddScoped<ModuleController, ModuleController>();
            services.AddScoped<ModuleRepository, ModuleRepository>();
            services.AddScoped<ModuleService, ModuleService>();

            services.AddScoped<FormController, FormController>();
            services.AddScoped<FormRepository, FormRepository>();
            services.AddScoped<FormService, FormService>();

            services.AddScoped<MenuController, MenuController>();
            services.AddScoped<MenuRepository, MenuRepository>();
            services.AddScoped<MenuService, MenuService>();



            services.AddScoped<GroupController, GroupController>();
            services.AddScoped<GroupRepository, GroupRepository>();
            services.AddScoped<GroupService, GroupService>();

            services.AddScoped<RoleFormMapController, RoleFormMapController>();
            services.AddScoped<RoleFormMapRepository, RoleFormMapRepository>();
            services.AddScoped<RoleFormMapService, RoleFormMapService>();

            services.AddScoped<UserMasterController, UserMasterController>();
            services.AddScoped<UserMasterRepository, UserMasterRepository>();
            services.AddScoped<UserMasterService, UserMasterService>();

            services.AddScoped<BaseController, BaseController>();
            services.AddScoped<BaseRepository, BaseRepository>();
            services.AddScoped<BaseService, BaseService>();

            services.AddScoped<MenuFormMapController, MenuFormMapController>();
            services.AddScoped<MenuFormMapRepository, MenuFormMapRepository>();
            services.AddScoped<MenuFormMapService, MenuFormMapService>();

            services.AddScoped<AddColumnController, AddColumnController>();
            services.AddScoped<AddColumnRepository, AddColumnRepository>();
            services.AddScoped<AddColumnService, AddColumnService>();

            services.AddScoped<CategoryService, CategoryService>();
            services.AddScoped<CategoryRepository, CategoryRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("CorsPolicy");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
