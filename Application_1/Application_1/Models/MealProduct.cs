using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_1.Models
{
    public class MealProduct
    {
        public int Id { get; set; }
        public int MealId { get; set; }
        public virtual Meal Meal { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
    }
}
