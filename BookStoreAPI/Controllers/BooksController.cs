using System.Linq;
using System.Threading.Tasks;
using BookStoreAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookContext _context;

        public BooksController(BookContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> GetBooks()
        {
             var books = await _context.Books.ToListAsync();
            return Ok(books); 
            
        }

        [HttpGet("{id}", Name="GetBook")]
        public async Task<IActionResult> GetBook(int id)
        {
            var book = await _context.Books.FirstOrDefaultAsync(x=> x.Id == id);
            return Ok(book);
        }
        
        [HttpPost]

        public IActionResult Create(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return CreatedAtRoute("GetBook", new {id = book.Id}, book);
        }

        [HttpPut("{id}")]

        public IActionResult Update(long id, Book bookItem)
        {
            var book = _context.Books.Find(id);
            if (book == null)
            {
                return NotFound();
            }

            book.Title = bookItem.Title;
            book.Author = bookItem.Author;

            _context.Books.Update(book);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var book = _context.Books.Find(id);
            if(book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            _context.SaveChanges();
            return NoContent();
        }
    }
} 