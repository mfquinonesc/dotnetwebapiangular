using backend.Data;
using Microsoft.EntityFrameworkCore;

namespace testing
{
    class DBContext : DBLibraryContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=DBLibrary;Trusted_Connection=True;");
        }
    }
}