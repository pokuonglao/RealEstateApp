using Microsoft.AspNetCore.Mvc;
using RealEstateApp.Repositories;
using Microsoft.Extensions.Configuration;
using RealEstateApp.Models;

namespace RealEstateApp.Controllers
{
    public class AddClientController : Controller
    {
        // used to import the sql repository to read all the rules from
        private readonly SQLRepository sqlRepo;

        // used to read the info from appsettings.json
        private readonly IConfiguration _configuration;
        public AddClientController(IConfiguration configuration) 
        {
            this._configuration = configuration; // retrieves configuration passed in (appsettings.json)
            this.sqlRepo = new SQLRepository(_configuration, "ExpressionTable"); // pass in data retrieved from server to instance of SQLRepository
        }
    }
}
