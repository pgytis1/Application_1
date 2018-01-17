using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_1.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Calories { get; set; }
        public string Protein { get; set; }
        public string Fat { get; set; }
        public string Carb { get; set; }
    }
}
