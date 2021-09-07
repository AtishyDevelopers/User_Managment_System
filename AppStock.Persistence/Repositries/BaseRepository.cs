
using AppStock.core.Master;
using AppStock.core.Models;
using APPSTOCK.Core.Models;
using APPSTOCK.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Persistence.Repositries
{
    public class BaseRepository
    {
        private IRepository _repository;

        public BaseRepository(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<DepartmentMaster>> GetAllDepartment(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<DepartmentMaster>("sp_mst_department", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<ResponseModel>> SaveDepartment(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_mst_department", new object[] { node.ToString(), flag });
            return result;
        }


        public async Task<List<RoleMaster>> GetAllRole(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<RoleMaster>("sp_mst_user_role", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<ResponseModel>> SaveRole(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_mst_user_role", new object[] { node.ToString(), flag });
            return result;
        }


        public async Task<List<DesignationMaster>> GetAllDesignation(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<DesignationMaster>("sp_mst_designation", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<ResponseModel>> SaveDesignation(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_mst_designation", new object[] { node.ToString(), flag });
            return result;
        }
    }
}
