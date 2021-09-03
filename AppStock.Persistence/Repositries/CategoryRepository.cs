using AppStock.core.Models;
using APPSTOCK.Core.Models;
using APPSTOCK.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Persistence.Repositries
{
  public  class CategoryRepository
    {
        private IRepository _repository;
        public CategoryRepository(IRepository repository)
        {
            _repository = repository;
        }


        public async Task<List<CategoryModel>> getAllCategory(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<CategoryModel>("sp_mst_Category", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<CountryModel>> getAllCountry(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<CountryModel>("sp_mst_Country", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<CountryModel>> getAllState(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<CountryModel>("sp_mst_State", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<CountryModel>> getAllCity(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<CountryModel>("sp_mst_City", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<CategoryModel>> getAllRole(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<CategoryModel>("sp_mst_Role", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<CategoryModel>> getAllDepartment(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<CategoryModel>("sp_mst_get_department", new object[] { node.ToString(), flag });
            return result;
        }

        public async Task<List<ResponseModel>> saveCategory(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_mst_Category", new object[] { node.ToString(), flag });
            return result;
        }
        public async Task<List<ResponseModel>> saveRole(string node, int flag)
        {
            var result = await _repository.ExecuteStoredProcedureWithList<ResponseModel>("sp_mst_Role", new object[] { node.ToString(), flag });
            return result;
        }

    }
}
