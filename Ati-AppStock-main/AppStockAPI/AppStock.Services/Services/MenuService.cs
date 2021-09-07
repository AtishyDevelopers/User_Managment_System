using AppStock.Persistence;
using AppStock.Persistence.Repositries;
using APPSTOCK.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Services.Services
{
    public class MenuService
    {
        private MenuRepository _menuRepository;

        public MenuService(MenuRepository menuRepository)
        {
            _menuRepository = menuRepository;
        }
        public async Task<List<MenuModel>> GetAllMenu(string node, int flag)
        {
            var result = await _menuRepository.GetAllMenu(node, flag);
            return result;
        }
        public async Task<List<ResponseModel>> SaveMenu(string node, int flag)
        {
            var result = await _menuRepository.SaveMenu(node, flag);
            return result;
        }

    }
}
