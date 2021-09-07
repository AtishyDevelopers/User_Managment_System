using AppStock.Persistence.Repositorys;
using APPSTOCK.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStock.Services.Services
{
    public class FileService
    {
        private FileRepository filerepository;

        public FileService(FileRepository repository)
        {
            filerepository = repository;
        }
        public async Task<List<Response>> postFile(string node, int flag)
        {
            var result = await filerepository.postFile(node, flag);
            return result;
        }
    }
}
