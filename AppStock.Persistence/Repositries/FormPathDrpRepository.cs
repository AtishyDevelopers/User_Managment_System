using AppStock.core.Models;
using APPSTOCK.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Persistence.Repositorys
{
    public class FormPathDrpRepository
    {
        private IRepository _repository;
        public FormPathDrpRepository(IRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<FormPathDrpModel>> GetAllFormpath(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<FormPathDrpModel>("sp_mst_drp_formpath", new object[] { node.ToString(), flag });
            return result;
        }
    }
}