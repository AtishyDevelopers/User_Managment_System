using APPSTOCK.Core.Models;
using APPSTOCK.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Persistence.Repositries
{
    public class FormRepository
    {
        private IRepository _repository;
        public FormRepository(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<FormModel>> GetAllForm(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<FormModel>("sp_mst_form", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<ResponseModel>> SaveForm(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_mst_form", new object[] { node.ToString(), flag });
            return result;
        }
    }
}
