using Microsoft.EntityFrameworkCore;

namespace BookStoreAPI.Models
{
    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions<BookContext> options)
            : base(options){

            }
        
        public DbSet<book>Books{get; set;}
        
    }
}