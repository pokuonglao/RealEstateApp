using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using RealEstateApp.Entities;
using RealEstateApp.Repositories;



namespace RealEstateApp.Controllers // Make sure the namespace matches the folder structure
{
    [Route("[controller]")]
    [ApiController]
    public class GuestBookController : ControllerBase
    {
        // used to import the sql repository to read all the rules from
        private readonly SQLRepository sqlRepo;

        public GuestBookController(SQLRepository sqlRepo)
        {
            this.sqlRepo = sqlRepo;

        }

        [HttpPost]
        [Route("addguest")] // Define an appropriate route for adding a guest
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

        [HttpGet]
        [Route("getAllGuests")]
        public IActionResult GetAllGuests()
        {
            try
            {
                List<GuestBook> guestList = sqlRepo.GetAllGuests();  // Retrieve guest data from your repository

                if (guestList.Count > 0)
                {
                    return Ok(guestList); // Return the list of guests as a JSON response
                }
                else
                {
                    return NoContent(); // Return 204 No Content if the list is empty
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}"); // Handle any exceptions
            }
        }


    }
}
