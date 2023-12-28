using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/author")]
    public class AuthorController : ControllerBase
    {
        private readonly AuthorService _service;
        public AuthorController(AuthorService service)
        {
            this._service = service;
        }


        [HttpGet]
        public async Task<ActionResult<List<Author>>> GetAllAuthors()
        {
            return await this._service.GetAllAuthors();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Author>> GetAuthorById(int id)
        {
            var author = await this._service.GetAuthorById(id);
            if (author == null)
                return NotFound();

                return author;
        }


        [HttpPost]
        public async Task<ActionResult<Author?>> CreateAuthor(Author author)
        {
            var result = await this._service.CreateAuthor(author);
            return Ok(result);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<Author?>> UpdateAuthor(int id, Author author)
        {
            var result =  await this._service.UpdateAuthorById(id, author);
            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Author?>> DeleteAuthor(int id)
        {
            var dauthor = await this._service.DeleteAuthorById(id);
            return Ok(dauthor);
        }     
    }
}