using System.Diagnostics;
using Community = RealEstateApp.Entities.Community;
using Npgsql;
using RealEstateApp.Entities;

namespace RealEstateApp.Repositories
{
    public class SQLRepoCommunities
    {
        IConfiguration _configuration;

        // create an arraylist to save 
        List<Community> communityList = new List<Community>();
        //HashSet<string> nameOfGuest = new HashSet<string>();
        //Dictionary<string, GuestBook> namesWithGuest = new Dictionary<string, GuestBook>();
        //Dictionary<string, string> namesWithGuestID = new Dictionary<string, string>();

        public SQLRepoCommunities(IConfiguration configuration)
        {
            _configuration = configuration; // Initialize the field with the provided configuration
        }

        public void addCommunity(Community communityToAdd)
        {
            try
            {
                // Set the CreatedAt property to the current date and time
                communityToAdd.CreatedAt = DateTime.Now;

                // Build the SQL query to insert into the "Communities" table
                string query = "INSERT INTO public.\"Communities\" (\"Title\", \"Text\", \"CreatedAt\")";
                query += $" VALUES ('{communityToAdd.Title}', '{communityToAdd.Text}', '{communityToAdd.CreatedAt:yyyy-MM-dd HH:mm:ss}')";

                using (NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString()))
                using (var command = new NpgsqlCommand(query, conn))
                {
                    conn.Open();
                    command.ExecuteNonQuery(); // Execute the query

                    communityList.Add(communityToAdd);

                    Debug.WriteLine("Community added: " + communityToAdd);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.ToString());
            }
        }



        //method to retreive all clients from the "clientsList" arraylist
        //public List<GuestBook> GetAllGuests()
        //{
        //    List<GuestBook> guestList = new List<GuestBook>();

        //    using (NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("DefaultConnection")))
        //    {
        //        conn.Open();

        //        string query = "SELECT * FROM public.\"GuestBooks\"";
        //        using (NpgsqlCommand command = new NpgsqlCommand(query, conn))
        //        {
        //            using (NpgsqlDataReader reader = command.ExecuteReader())
        //            {
        //                while (reader.Read())
        //                {
        //                    GuestBook guest = new GuestBook
        //                    {
        //                        ID = reader["ID"].ToString(),
        //                        Time = reader["Time"].ToString(),
        //                        Date = reader["Date"].ToString(),
        //                        Location = reader["Location"].ToString(),
        //                        FirstName = reader["FirstName"].ToString(),
        //                        LastName = reader["LastName"].ToString(),
        //                        Address = reader["Address"].ToString(),
        //                        City = reader["City"].ToString(),
        //                        State = reader["State"].ToString(),
        //                        Zipcode = reader["Zipcode"].ToString(),
        //                        Phone = reader["Phone"].ToString(),
        //                        Email = reader["Email"].ToString()
        //                    };

        //                    guestList.Add(guest);
        //                }
        //            }
        //        }
        //    }

        //    return guestList;
        //}
    }
}


