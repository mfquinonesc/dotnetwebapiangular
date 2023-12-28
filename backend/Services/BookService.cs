using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class BookService : Service
    {
        public BookService(DBLibraryContext context) : base(context) { }

        public async Task<List<Book>> GetAllBooks()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<Book?> GetBookById(int id)
        {
            return await _context.Books.FindAsync(id);
        }

        public async Task<Book?> DeleteBookById(int id)
        {
            var fbook = await _context.Books.FindAsync(id);
            if (fbook != null)
            {
                await _context.Database.ExecuteSqlRawAsync($"deleteAuthorBook {id}");
                _context.Books.Remove(fbook);
                await _context.SaveChangesAsync();
            }
            return fbook;
        }

        public async Task<Book?> UpdateBookById(int id, Book book)
        {
            var fbook = await _context.Books.FindAsync(id);
            if (fbook != null)
            {
                fbook.BookId = id;
                fbook.Description = book.Description;
                fbook.Title = book.Title;
                fbook.Pages = book.Pages;
                fbook.EditorialId = book.EditorialId;
                _context.Books.Update(fbook);
                await _context.SaveChangesAsync();
            }
            return fbook;
        }

        public async Task<Book> CreateBook(Book book)
        {
            var editorial = await _context.Editorials.FindAsync(book.EditorialId);
            if (editorial != null)
            {
                await _context.Books.AddAsync(book);
                await _context.SaveChangesAsync();
            }
            return book;
        }

        public async Task<Book> CreateBook(Book book, int authorId)
        {
            var author = await _context.Authors.FindAsync(authorId);
            var editorial = await _context.Editorials.FindAsync(book.EditorialId);
            if (author != null && editorial != null)
            {
                await _context.Books.AddAsync(book);
                await _context.SaveChangesAsync();
                int lastId = book.BookId;
                await _context.Database.ExecuteSqlRawAsync($"saveAuthorBook {authorId} , {lastId}");
            }
            return book;
        }

        public async Task<List<General>> GetGeneralTable()
        {
            return await _context.Generals.ToListAsync();
        }

        public async Task<General> GetGeneralByBookId(int bookId)
        {
            var list = await _context.Generals.ToListAsync();
            var elements = from el in list where el.BookId == bookId select el;
            General element = new General();
            if (elements.ToList().Count > 0)
            {
                element = elements.ToList()[0];
            }
            return element;
        }
    }
}