using Microsoft.EntityFrameworkCore;
using RealEstateApp.Entities; // If GuestBook is defined in this namespace


namespace RealEstateApp.Data;

public class ApplicationDbContext : DbContext 
{
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
       
    }

    public DbSet<Communities> Communities { get; set; }
}