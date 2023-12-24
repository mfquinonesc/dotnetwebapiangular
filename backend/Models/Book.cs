using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Book
    {
        public Book()
        {
            Authors = new HashSet<Author>();
        }

        public int BookId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int? Pages { get; set; }
        public int EditorialId { get; set; }

        public virtual Editorial Editorial { get; set; } = null!;

        public virtual ICollection<Author> Authors { get; set; }
    }
}
