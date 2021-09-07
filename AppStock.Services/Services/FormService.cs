using AppStock.Persistence.Repositries;
using APPSTOCK.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Services.Services
{
   public class FormService
    {

        private FormRepository _formRepository;

        public FormService(FormRepository formRepository)
        {
            _formRepository = formRepository;
        }
        public async Task<List<FormModel>> GetAllForm(string node, int flag)
        {
            var result = await _formRepository.GetAllForm(node, flag);
            return result;
        }
        public async Task<List<ResponseModel>> SaveForm(string node, int flag)
        {
            var result = await _formRepository.SaveForm(node, flag);
            return result;
        }
    }
}
