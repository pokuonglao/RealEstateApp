using System.Diagnostics;
using Communities = RealEstateApp.Entities.Communities;
using Npgsql;
using RealEstateApp.Entities;
using Microsoft.AspNetCore.Http.HttpResults;

namespace RealEstateApp.Repositories
{
    public class SQLRepoCommunities
    {
        IConfiguration _configuration;

        // create an arraylist to save 
        List<Communities> CommunitiesList = new List<Communities>();
        //HashSet<string> nameOfGuest = new HashSet<string>();
        //Dictionary<string, GuestBook> namesWithGuest = new Dictionary<string, GuestBook>();
        //Dictionary<string, string> namesWithGuestID = new Dictionary<string, string>();

        public SQLRepoCommunities(IConfiguration configuration)
        {
            _configuration = configuration; // Initialize the field with the provided configuration
        }

        public void addCommunities(Communities communitiesToAdd)
        {
            try
            {
                // Set the CreatedAt property to the current date and time
                communitiesToAdd.CreatedAt = DateTime.Now;

                // Build the SQL query to insert into the "Communities" table
                string query = "INSERT INTO public.\"Communities\" (\"Title\", \"Text\", \"CreatedAt\")";
                query += $" VALUES ('{communitiesToAdd.Title}', '{communitiesToAdd.Text}', '{communitiesToAdd.CreatedAt:yyyy-MM-dd HH:mm:ss}')";

                using (NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString()))
                using (var command = new NpgsqlCommand(query, conn))
                {
                    conn.Open();
                    command.ExecuteNonQuery(); // Execute the query

                    CommunitiesList.Add(communitiesToAdd);

                    Debug.WriteLine("Community added: " + communitiesToAdd);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.ToString());
            }
        }

        public List<Communities> GetAllCommunities()
        {
    
            using (NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                conn.Open();

                string query = "SELECT * FROM public.\"Communities\"";
                using (NpgsqlCommand command = new NpgsqlCommand(query, conn))
                {
                    using (NpgsqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Communities community = new Communities
                            {
                                Id = int.Parse(reader["Id"].ToString()),
                                Title = reader["Title"].ToString(),
                                Text = reader["Text"].ToString(),
                                CreatedAt = DateTime.Parse(reader["CreatedAt"].ToString()),
                            };

                            CommunitiesList.Add(community);
                        }
                    }
                }
            }

            return CommunitiesList;
        }
    }
}


