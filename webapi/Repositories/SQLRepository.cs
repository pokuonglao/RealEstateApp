//using RealEstateApp.Entities;
//using System.Data;
//using System.Data.SqlClient;
//using System.Diagnostics;
//using RealEstateApp.DTO;
//using GuestBook = RealEstateApp.Entities.GuestBook;
//using System.Linq.Expressions;
//using RealEstateApp.Data;

//namespace RealEstateApp.Repositories
//{
//    public class SQLRepository
//    {
//        IConfiguration _configuration;
//        // create an arraylist to save 
//        List<GuestBook> guestList = new List<GuestBook>();
//        HashSet<string> namesOfGuest = new HashSet<string>();
//        Dictionary<string, GuestBook> idsOfClients = new Dictionary<string, GuestBook>();

//        //public SQLRepository(IConfiguration _configuration, string tablename)
//        //{
//        //    this._configuration = _configuration;
//        //    // create an instance of Response to return any possible errors
//        //    Response response = new Response();

//        //    SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());

//        //    // create a query to retreive all the clients from the database
//        //    string clientQuery = "Select * FROM ClientTable";
//        //    SqlDataAdapter clientData = new SqlDataAdapter(clientQuery, conn);

//        //    // create a data table and populate it with data above
//        //    DataTable clientDT = new DataTable();
//        //    clientData.Fill(clientDT);

//        //    // if we have at least 1 row of rules, retreive it and print 
//        //    if (clientDT.Rows.Count > 0)
//        //    {
//        //        // loop through all the rows in the data table
//        //        for (int i = 0; i < clientDT.Rows.Count; i++)
//        //        {
//        //            // create a new client and populate it
//        //            GuestBook currentClient = new GuestBook
//        //            {
//        //                ID = Convert.ToString(clientDT.Rows[i]["ID"]),
//        //                Time = Convert.ToString(clientDT.Rows[i]["Time"]),
//        //                Date = Convert.ToString(clientDT.Rows[i]["Date"]),
//        //                Location = Convert.ToString(clientDT.Rows[i]["Location"]),
//        //                FirstName = Convert.ToString(clientDT.Rows[i]["FirstName"]),
//        //                LastName = Convert.ToString(clientDT.Rows[i]["LastName"]),
//        //                Address = Convert.ToString(clientDT.Rows[i]["Address"]),
//        //                City = Convert.ToString(clientDT.Rows[i]["City"]),
//        //                State = Convert.ToString(clientDT.Rows[i]["State"]),
//        //                Zipcode = Convert.ToString(clientDT.Rows[i]["Zipcode"]),
//        //                Phone = Convert.ToString(clientDT.Rows[i]["Phone"]),
//        //                Email = Convert.ToString(clientDT.Rows[i]["Email"])
//        //            };

//        //            //// add the current client to the arraylist
//        //            //clientsList.Add(currentClient);

//        //            //// add the current id to the hashset
//        //            //IDofClient.Add(currentClient.ID);

//        //            //idsOfExpressions.Add(currentExpression.ExpressionID, currentExpression);
//        //        }
//        //    }
//        //}

//        public void addGuest(GuestBook guestToAdd)
//        {
//            //try
//            //{
//            //    // query that we want to execute to insert into expression table
//            //    string query = "INSERT INTO ExpressionTable (ID, Time, Date, Location, FirstName, LastName, Address, City, State, Zipcode, Phone, Email)";
//            //    query += " VALUES ('" + guestToAdd.ID + "', '" + guestToAdd.Time + "', '" + guestToAdd.Date + "', '" + guestToAdd.Location + "', '" + 
//            //        guestToAdd.FirstName + "', '" + guestToAdd.LastName + "','" + guestToAdd.Address + "','" + guestToAdd.City + "','" + guestToAdd.State + "'.'" + 
//            //        guestToAdd.Zipcode + "','" + guestToAdd.Phone + "','" + guestToAdd.Email + "')";

//            //    using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString()))
//            //    using (var command = new SqlCommand(query, conn))
//            //    {
//            //        conn.Open();
//            //        command.ExecuteNonQuery(); // use ExecuteNonQuery because we don't expect to return anything

//            //        guestList.Add(guestToAdd);
//            //        namesOfGuest.Add(guestToAdd.ID); // TODO: possibly remove this as it would be redundant to chcek if a expression exists, or maybe check existing expression another way?

//            //        Debug.WriteLine("Guest added: " + guestToAdd);
//            //    }
//            //}
//            //catch (Exception ex)
//            //{
//            //    Debug.WriteLine(ex.ToString());
//            //}

//            try
//            {

//                // query that we want to execute to insert into expression table
//                string query = "INSERT INTO ExpressionTable (ID, Time, Date, Location, FirstName, LastName, Address, City, State, Zipcode, Phone, Email)";
//                query += " VALUES ('" + guestToAdd.ID + "', '" + guestToAdd.Time + "', '" + guestToAdd.Date + "', '" + guestToAdd.Location + "', '" +
//                    guestToAdd.FirstName + "', '" + guestToAdd.LastName + "','" + guestToAdd.Address + "','" + guestToAdd.City + "','" + guestToAdd.State + "'.'" +
//                    guestToAdd.Zipcode + "','" + guestToAdd.Phone + "','" + guestToAdd.Email + "')";
//                // Assuming you have a DbContext named ApplicationDbContext
//                using (var dbContext = new ApplicationDbContext(_configuration.GetConnectionString("DefaultConnection")))
//                {
//                    // Add the guest to the DbContext and save changes to insert it into the PostgreSQL database
//                    dbContext.GuestBooks.Add(guestToAdd);
//                    dbContext.SaveChanges();
//                }

//                guestList.Add(guestToAdd);
//                namesOfGuest.Add(guestToAdd.ID);

//                Debug.WriteLine("Guest added: " + guestToAdd);
//            }
//            catch (Exception ex)
//            {
//                Debug.WriteLine(ex.ToString());
//            }
//        }

//        // method to retreive all clients from the "clientsList" arraylist
//        public List<GuestBook> getAllClients()
//        {
//            return guestbookList;
//        }
//    }
//}

