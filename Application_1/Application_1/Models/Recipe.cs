using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_1.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Preparation { get; set; }
        public virtual ICollection<RecipeProduct> RecipeProducts { get; set; }
        public virtual ICollection<MealRecipe> MealRecipes { get; set; }
    }
}
