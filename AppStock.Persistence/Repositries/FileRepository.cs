using APPSTOCK.Core.Models;
using APPSTOCK.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Persistence.Repositorys
{
    public class FileRepository
    {


        private IRepository _repository;

        public FileRepository(IRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<Response>> postFile(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<Response>("sp_file", new object[] { node, flag });
            return result;
        }
    }
}
