//using RealEstateApp.Entities;
//using System.Data;
//using System.Data.SqlClient;
//using System.Diagnostics;
//using RealEstateApp.DTO;
//using GuestBook = RealEstateApp.Entities.GuestBook;

//namespace RealEstateApp.Repositories
//{
//    public class SQLRepository
//    {
//        IConfiguration _configuration;
//        // create an arraylist to save 
//        List<GuestBook> guestbookList = new List<GuestBook>();
//        HashSet<string> namesOfClients = new HashSet<string>();
//        Dictionary<string, GuestBook> idsOfClients = new Dictionary<string, GuestBook>();

//        public SQLRepository(IConfiguration _configuration, string tablename)
//        {
//            this._configuration = _configuration;
//            // create an instance of Response to return any possible errors
//            Response response = new Response();

//            SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection").ToString());

//            // create a query to retreive all the clients from the database
//            string clientQuery = "Select * FROM ClientTable";
//            SqlDataAdapter clientData = new SqlDataAdapter(clientQuery, conn);

//            // create a data table and populate it with data above
//            DataTable clientDT = new DataTable();
//            clientData.Fill(clientDT);

//            // if we have at least 1 row of rules, retreive it and print 
//            if (clientDT.Rows.Count > 0)
//            {
//                // loop through all the rows in the data table
//                for (int i = 0; i < clientDT.Rows.Count; i++)
//                {
//                    // create a new client and populate it
//                    GuestBook currentClient = new GuestBook
//                    {
//                        ID = Convert.ToString(clientDT.Rows[i]["ID"]),
//                        Time = Convert.ToString(clientDT.Rows[i]["Time"]),
//                        Date = Convert.ToString(clientDT.Rows[i]["Date"]),
//                        Location = Convert.ToString(clientDT.Rows[i]["Location"]),
//                        FirstName = Convert.ToString(clientDT.Rows[i]["FirstName"]),
//                        LastName = Convert.ToString(clientDT.Rows[i]["LastName"]),
//                        Address = Convert.ToString(clientDT.Rows[i]["Address"]),
//                        City = Convert.ToString(clientDT.Rows[i]["City"]),
//                        State = Convert.ToString(clientDT.Rows[i]["State"]),
//                        Zipcode = Convert.ToString(clientDT.Rows[i]["Zipcode"]),
//                        Phone = Convert.ToString(clientDT.Rows[i]["Phone"]),
//                        Email = Convert.ToString(clientDT.Rows[i]["Email"])
//                    };

//                    //// add the current client to the arraylist
//                    //clientsList.Add(currentClient);

//                    //// add the current id to the hashset
//                    //IDofClient.Add(currentClient.ID);

//                    //idsOfExpressions.Add(currentExpression.ExpressionID, currentExpression);
//                }
//            }
//        }

//        // method to retreive all clients from the "clientsList" arraylist
//        public List<GuestBook> getAllClients()
//        {
//            return guestbookList;
//        }
//    }
//}

