using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_1.Models
{
    public class Meal
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public virtual ICollection<MealRecipe> MealRecipes { get; set; }
        public virtual ICollection<MealProduct> MealProducts { get; set; }
    }
}
