using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_1.Models
{
    public class RecipeProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int RecipeId { get; set; }
        public virtual Recipe Recipe { get; set; }
    }
}
