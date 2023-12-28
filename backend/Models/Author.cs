using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Author
    {
        public int AuthorId { get; set; }
        public string Name { get; set; } = null!;
        public string Lastname { get; set; } = null!;
    }
}
