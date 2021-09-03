using AppStock.core.Models;
using AppStock.Persistence.Repositries;
using APPSTOCK.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Services.Services
{
   public class CategoryService
    {
        private CategoryRepository _userRepository;

        public CategoryService(CategoryRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<List<CategoryModel>> getAllCategory(string node, int flag)
        {
            var result = await _userRepository.getAllCategory(node, flag);
            return result;
        }
        public async Task<List<CountryModel>> getAllCountry(string node, int flag)
        {
            var result = await _userRepository.getAllCountry(node, flag);
            return result;
        }
        public async Task<List<CountryModel>> getAllState(string node, int flag)
        {
            var result = await _userRepository.getAllState(node, flag);
            return result;
        }
        public async Task<List<CountryModel>> getAllCity(string node, int flag)
        {
            var result = await _userRepository.getAllCity(node, flag);
            return result;
        }

        public async Task<List<CategoryModel>> getAllDepartment(string node, int flag)
        {
            var result = await _userRepository.getAllDepartment(node, flag);
            return result;
        }
        public async Task<List<CategoryModel>> getAllRole(string node, int flag)
        {
            var result = await _userRepository.getAllRole(node, flag);
            return result;
        }


        public async Task<List<ResponseModel>> saveCategory(string node, int flag)
        {
            var result = await _userRepository.saveCategory(node, flag);
            return result;
        }
    }
}
