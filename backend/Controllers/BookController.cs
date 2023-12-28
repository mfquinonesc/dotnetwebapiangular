using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/book")]
    public class BookController : ControllerBase
    {
        private readonly BookService _service;
        public BookController(BookService service)
        {
            this._service = service;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetAllBooks()
        {
            return await _service.GetAllBooks();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book?>> GetBookById(int id)
        {
            return await _service.GetBookById(id);
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<General>>> GGetGeneralTable()
        {
            return await _service.GetGeneralTable();
        }

        [HttpGet("all/{id}")]
        public async Task<ActionResult<General>> GetGeneralByBookId(int id)
        {
            var result = await _service.GetGeneralByBookId(id);
            return (result.BookId == 0) ? Ok(null) : Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Book?>> CreateBook(Book book)
        {
            var result = await _service.CreateBook(book);
            return Ok(result);
        }

        [HttpPost("{id}")]
        public async Task<ActionResult<Book?>> CreateBook(Book book, int id)
        {
            var result = await _service.CreateBook(book, id);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Book?>> UpdateBookById(int id, Book book)
        {
            var result = await _service.UpdateBookById(id, book);
            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Book?>> DeleteBookById(int id)
        {
            var result = await _service.DeleteBookById(id);
            return Ok(result);
        }
    }
}