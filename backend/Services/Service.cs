using backend.Data;

namespace backend.Services
{
    public class Service
    {
        protected readonly DBLibraryContext _context;
        public Service(DBLibraryContext context)
        {
            this._context = context;
        }
    }

}