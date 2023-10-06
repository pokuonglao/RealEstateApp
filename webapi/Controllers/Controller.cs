//using Microsoft.AspNetCore.Mvc;
//using RealEstateApp.Entities;
//using RealEstateApp.DTO;
//using RealEstateApp.Repositories;

//namespace RealEstateApp.controllers
//{
//    public class AddClientController : ControllerBase 
//    {
//        // used to import the sql repository to read all the rules from
//        private readonly SQLRepository sqlRepo;

//        // used to read the info from appsettings.json
//        private readonly IConfiguration _configuration;

//        [HttpGet]
//        [Route("GetAllClients")]
//        public IEnumerable<GuestBook> Get()
//        {
//            // create an instance of Response to return any possible errors
//            Response response = new Response();

//            // get the rules from the sql repository and save as a variable
//            var clientsList = sqlRepo.getAllClients();

//            // Debug.WriteLine("size of the list: " +info.Count);
//            return clientsList;
//        }
//    }
//}

