using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Editorial
    {
        public Editorial()
        {
            Books = new HashSet<Book>();
        }

        public int EditorialId { get; set; }
        public string Name { get; set; } = null!;
        public string Location { get; set; } = null!;

        public virtual ICollection<Book> Books { get; set; }
    }
}
