using System;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/author")]
    public class AuthorController : ControllerBase
    {
        private readonly DBLibraryContext _context;
        public AuthorController(DBLibraryContext context)
        {
            this._context = context;
        }

        //This method is the one that brings all the Authors from the the Authors table
        [HttpGet]
        public List<Author> GetAuthorAlls()
        {
            return this._context.Authors.ToList();
        }

        //This method is the one that brings the Authors by Id from the the Authors table
        [HttpGet("{id}")]
        public ActionResult<Author> GetAuthorById(int id)
        {
            var author = this._context.Authors.Find(id);
            return author == null ? NotFound() : author;
        }


        //This method creates a new author 
        [HttpPost]
        public ActionResult CreateAuthor(Author author)
        {
            this._context.Authors.Add(author);
            this._context.SaveChanges();
            return Ok("Success");
        }

        //This methos updates the selected author by Id 
        [HttpPut("{id}")]
        public ActionResult UpdateAuthor(Author author, int id)
        {
            var fauthor = this._context.Authors.Find(id);
            if (fauthor == null)
                return NotFound();

            fauthor.Name = author.Name;
            fauthor.Lastname = author.Lastname;

            this._context.Authors.Update(fauthor);
            this._context.SaveChanges();
            return Ok("Updated");
        }

        //This method delete the selected author by id 
        [HttpDelete("{id}")]
        public ActionResult DeleteAuthor(int id)
        {
            var fauthor = this._context.Authors.Find(id);
            if (fauthor == null)
                return NotFound();

            this._context.Authors.Remove(fauthor);
            this._context.SaveChanges();
            return Ok("Deleted");
        }

    }

}