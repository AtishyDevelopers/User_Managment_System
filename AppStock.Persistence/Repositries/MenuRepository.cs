using APPSTOCK.Core.Models;
using APPSTOCK.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace AppStock.Persistence.Repositries
{
    public class MenuRepository
    {
        private IRepository _repository;
        public MenuRepository(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<MenuModel>> GetAllMenu(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<MenuModel>("sp_mst_menu", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<ResponseModel>> SaveMenu(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_mst_menu", new object[] { node.ToString(), flag });
            return result;
        }
    }
}
