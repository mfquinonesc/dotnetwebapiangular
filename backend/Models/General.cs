using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class General
    {
        public int BookId { get; set; }
        public int AuthorId { get; set; }
        public int EditorialId { get; set; }
        public string? Title { get; set; }
        public int? Pages { get; set; }
        public string? Description { get; set; }
        public string Name { get; set; } = null!;
        public string Lastname { get; set; } = null!;
        public string Editorialname { get; set; } = null!;
        public string Location { get; set; } = null!;
    }
}
