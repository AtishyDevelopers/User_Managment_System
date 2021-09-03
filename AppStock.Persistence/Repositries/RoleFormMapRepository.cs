using APPSTOCK.Core.Models;
using APPSTOCK.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace AppStock.Persistence.Repositries
{
    public class RoleFormMapRepository
    {
        private IRepository _repository;
        public RoleFormMapRepository(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<RoleFormMapModel>> GetAllRoleFormMap(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<RoleFormMapModel>("sp_role_form_map", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<ResponseModel>> SaveRoleFormMap(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_role_form_map", new object[] { node.ToString(), flag });
            return result;
        }
    }
}
