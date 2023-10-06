namespace RealEstateApp.Entities 
{
    public class GuestBook
    {
        public string ID { get; init; }

        public string Time { get; init; }

        public string Date { get; init; }

        public string Location { get; init; }

        public string FirstName { get; init; }

        public string LastName { get; init; }

        public string Address { get; init; }

        public string City { get; init; }

        public string State { get; init; }

        public string Zipcode { get; init; }

        public string Phone { get; init; }

        public string Email { get; init; }

        //public HomeNeed NeedHome { get; set; }

        //public HousingStatus DoYou { get; set; }

        //public AgentQuestion Agent { get; set; }

        //public string AgentName { get; set; }

        //public LoanQuestion Loan { get; set; }

        //public string Lender { get; set; }

        //public FreeEvaluationQuestion FreeEvaluation { get; set; }

        //public MarketUpdateQuestion MarketUpdate { get; set; }

        //public Client()
        //{
        //    NeedHome = new HomeNeed();

        //    DoYou = new HousingStatus();

        //    Agent = new AgentQuestion();

        //    Loan = new LoanQuestion();

        //    FreeEvaluation = new FreeEvaluationQuestion();

        //    MarketUpdate = new MarketUpdateQuestion();

    }
}

//    public enum NeedHomeOptions
//    {
//        Now,
//        OneToThreeMonths,
//        ThreeToSixMonths
//    }

//    public enum DoYouOption
//    {
//        Own,
//        Rent
//    }

//    public enum AgentOption
//    {
//        Yes,
//        No
//    }

//    public enum LoanOption
//    {
//        Yes,
//        No

//    }

//    public enum FreeEvaluationOption
//    {
//        Yes,
//        No

//    }

//    public enum MarketUpdateOption
//    {
//        Yes,
//        No

//    }

//    public class HomeNeed
//    {
//        public string Question { get; set; }
//        public NeedHomeOptions Answer { get; set; }

//        public HomeNeed()
//        {
//            Question = "When do you need a home?";
//        }

//    }

//    public class HousingStatus
//    {
//        public string Question { get; set; }
//        public DoYouOption Answer { get; set; }

//        public HousingStatus()
//        {
//            Question = "Do you...";
//        }

//    }

//    public class AgentQuestion
//    {
//        public string Question { get; set; }
//        public AgentOption Answer { get; set; }

//        public AgentQuestion()
//        {
//            Question = "Are you working with an agent?";
//        }

//    }

//    public class LoanQuestion
//    {
//        public string Question { get; set; }
//        public LoanOption Answer { get; set; }

//        public LoanQuestion()
//        {
//            Question = "Are you pre-approved for a loan?";
//        }

//    }

//    public class FreeEvaluationQuestion
//    {
//        public string Question { get; set; }
//        public MarketUpdateOption Answer { get; set; }

//        public FreeEvaluationQuestion()
//        {
//            Question = "Would you like a FREE evaluation of your house via email?";
//        }

//    }

//    public class MarketUpdateQuestion
//    {
//        public string Question { get; set; }
//        public MarketUpdateOption Answer { get; set; }

//        public MarketUpdateQuestion()
//        {
//            Question = "Would you like to get real estate market updates via text and email?";
//        }

//    }
//}