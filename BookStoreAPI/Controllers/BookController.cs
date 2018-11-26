using BookStoreAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreAPI.Controllers
{
    [Route("api/[controller")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookContext _context; 
        
        public BookController(BookContext context){
            _context = context;
        }

        
    }
}