using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class AuthorService : Service
    {
        public AuthorService(DBLibraryContext context) : base(context) { }

        public async Task<List<Author>> GetAllAuthors()
        {
            return await _context.Authors.ToListAsync();
        }

        public async Task<Author?> GetAuthorById(int id)
        {
            return await _context.Authors.FindAsync(id);
        }

        public async Task<Author?> DeleteAuthorById(int id)
        {
            var fauthor = await _context.Authors.FindAsync(id);
            if (fauthor != null)
            {
                _context.Authors.Remove(fauthor);
                await _context.SaveChangesAsync();
            }
            return fauthor;
        }

        public async Task<Author?> UpdateAuthorById(int id, Author author)
        {
            var fauthor = await _context.Authors.FindAsync(id);
            if (fauthor != null)
            {
                fauthor.AuthorId = id;
                fauthor.Name = author.Name;
                fauthor.Lastname = author.Lastname;
                _context.Authors.Update(fauthor);
                await _context.SaveChangesAsync();
            }
            return fauthor;
        }

        public async Task<Author> CreateAuthor(Author author)
        {
            await _context.Authors.AddAsync(author);
            await _context.SaveChangesAsync();            
            return author;
        }
    }
}