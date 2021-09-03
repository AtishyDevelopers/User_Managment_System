using AppStock.Persistence;
using AppStock.Persistence.Repositries;
using APPSTOCK.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace AppStock.Services.Services
{
    public class RoleFormMapService
    {
        private RoleFormMapRepository _roleformmapRepository;

        public RoleFormMapService(RoleFormMapRepository roleformmapRepository)
        {
            _roleformmapRepository = roleformmapRepository;
        }
        public async Task<List<RoleFormMapModel>> GetAllRoleFormMap(string node, int flag)
        {
            var result = await _roleformmapRepository.GetAllRoleFormMap(node, flag);
            return result;
        }
        public async Task<List<ResponseModel>> SaveRoleFormMap(string node, int flag)
        {
            var result = await _roleformmapRepository.SaveRoleFormMap(node, flag);
            return result;
        }
    }
}
