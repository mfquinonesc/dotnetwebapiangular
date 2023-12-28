using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Editorial
    {
        public int EditorialId { get; set; }
        public string Name { get; set; } = null!;
        public string Location { get; set; } = null!;
    }
}
