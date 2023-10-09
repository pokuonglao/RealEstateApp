using RealEstateApp.Entities;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using RealEstateApp.DTO;
using GuestBook = RealEstateApp.Entities.GuestBook;
using System.Linq.Expressions;
using RealEstateApp.Data;
using Npgsql;

namespace RealEstateApp.Repositories
{
    public class SQLRepository
    {

        private readonly IConfiguration _configuration;
        public SQLRepository(IConfiguration configuration)
        {
            _configuration = configuration; // Initialize the field with the provided configuration
        }
        // create an arraylist to save 
        List<GuestBook> guestList = new List<GuestBook>();
        HashSet<string> namesOfGuest = new HashSet<string>();
        Dictionary<string, GuestBook> idsOfClients = new Dictionary<string, GuestBook>();

        public void addGuest(GuestBook guestToAdd)
        {
            try
            {
                // query that we want to execute to insert into expression table
                string query = "INSERT INTO public.\"GuestBooks\" (\"ID\", \"Time\", \"Date\", \"Location\", \"FirstName\", \"LastName\", \"Address\", \"City\", \"State\", \"Zipcode\", \"Phone\", \"Email\")";
                query += " VALUES ('" + guestToAdd.ID + "', '" + guestToAdd.Time + "', '" + guestToAdd.Date + "', '" + guestToAdd.Location + "', '" +
                    guestToAdd.FirstName + "', '" + guestToAdd.LastName + "','" + guestToAdd.Address + "','" + guestToAdd.City + "','" + guestToAdd.State + "','" +
                    guestToAdd.Zipcode + "','" + guestToAdd.Phone + "','" + guestToAdd.Email + "')";


                using (NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString()))
                using (var command = new NpgsqlCommand(query, conn))
                {
                    conn.Open();
                    command.ExecuteNonQuery(); // use ExecuteNonQuery because we don't expect to return anything

                    guestList.Add(guestToAdd);
                    namesOfGuest.Add(guestToAdd.ID);

                    Debug.WriteLine("Guest added: " + guestToAdd);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.ToString());
            }
        }


        // method to retreive all clients from the "clientsList" arraylist
        //public List<GuestBook> getAllClients()
        //{
        //    return guestbookList;
        //}
    }
}

