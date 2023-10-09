using Microsoft.AspNetCore.Mvc;
using RealEstateApp.Entities;
using RealEstateApp.Repositories;

namespace RealEstateApp.Controllers // Make sure the namespace matches the folder structure
{
    [ApiController]
    public class AddClientController : ControllerBase
    {
        private readonly SQLRepository sqlRepo;

        public AddClientController(SQLRepository sqlRepo)
        {
            this.sqlRepo = sqlRepo;
        }

        [HttpPost]
        [Route("api/addguest")] // Define an appropriate route for adding a guest
        public IActionResult AddGuest(GuestBook guestToAdd)
        {
            try
            {
                sqlRepo.addGuest(guestToAdd); // Use the SQLRepository to add a guest
                return Ok("Guest added successfully.");
            }
            catch (Exception ex)
            {
                // Handle any exceptions or errors here
                return StatusCode(500,$"An error occurred: {ex.Message}");
            }
        }
    }
}
