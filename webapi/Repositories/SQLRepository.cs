using RealEstateApp.Models;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;

namespace RealEstateApp.SQLRepositories
{
    namespace class SQLRepository
    {
        IConfiguration _configuration;
        List<Client> ClientList = new List<Client>();
        HashSet<string> namesOfRules = new HashSet<string>();

        public SQLRepository(IConfiguration _configuration, string tableName) 
        {
            this._configuration = _configuration;

            // create an instance of Response to return any possible errors
            Response response = new Response();

            // TODO: surround the connection in the constructor with a try catch
            // establish connection to sql database
            SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("QTC-Server").ToString());

        }
    }
    
}