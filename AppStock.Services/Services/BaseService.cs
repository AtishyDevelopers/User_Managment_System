
using AppStock.core.Master;
using AppStock.core.Models;
using AppStock.Persistence.Repositries;
using APPSTOCK.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Services.Services
{
    public class BaseService
    {

        private BaseRepository _baseRepository;

        public BaseService(BaseRepository baseRepository)
        {
            _baseRepository = baseRepository;
        }

        public async Task<List<DepartmentMaster>> GetAllDepartment(string node, int flag)
        {
            var result = await _baseRepository.GetAllDepartment(node, flag);
            return result;
        }
        public async Task<List<ResponseModel>> SaveDepartment(string node, int flag)
        {

            var result = await _baseRepository.SaveDepartment(node, flag);
            return result;
        }

       
        public async Task<List<RoleMaster>> GetAllRole(string node, int flag)
        {
            var result = await _baseRepository.GetAllRole(node, flag);
            return result;
        }
        public async Task<List<ResponseModel>> SaveRole(string node, int flag)
        {
            var result = await _baseRepository.SaveRole(node, flag);
            return result;
        }

       
        public async Task<List<DesignationMaster>> GetAllDesignation(string node, int flag)
        {
            var result = await _baseRepository.GetAllDesignation(node, flag);
            return result;
        }
        public async Task<List<ResponseModel>> SaveDesignation(string node, int flag)
        {
            var result = await _baseRepository.SaveDesignation(node, flag);
            return result;
        }

    }
}