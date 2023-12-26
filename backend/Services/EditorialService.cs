using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class EditorialService : Service
    {
        public EditorialService(DBLibraryContext context) : base(context) { }

        public async Task<List<Editorial>> GetAllEditorial()
        {
            return await _context.Editorials.ToListAsync();
        }

        public async Task<Editorial?> GetEditorialById(int id)
        {
            var editorial = await _context.Editorials.FindAsync(id);
            return editorial;
        }

        public async Task<Editorial?> UpdateEditorialById(int id, Editorial editorial)
        {
            var feditorial = await _context.Editorials.FindAsync(id);
            if (feditorial != null)
            {
                feditorial.Name = editorial.Name;
                feditorial.Location = editorial.Location;
                _context.Editorials.Update(feditorial);
                await _context.SaveChangesAsync();
            }
            return feditorial;
        }

        public async Task<Editorial?> DeleteEditorialById(int id)
        {
            var feditorial = await _context.Editorials.FindAsync(id);
            if (feditorial != null)
            {
                _context.Editorials.Remove(feditorial);
                await _context.SaveChangesAsync();
            }
            return feditorial;
        }

        public async Task<Editorial> CreateEditrorial(Editorial editorial)
        {
           await _context.Editorials.AddAsync(editorial);
           await _context.SaveChangesAsync();
           return editorial;
        }
    }

}