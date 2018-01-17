using Application_1.DTO.Request;
using Application_1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application_1.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {

        [HttpGet, Authorize]
        public IEnumerable<Book> Get()
        {
            var currentUser = HttpContext.User;
            var resultBookList = new Book[] {
                new Book { Author = "Ray Bradbury", Title = "Fahrenheit 451" },
                new Book { Author = "Gabriel García Márquez", Title = "One Hundred years of Solitude" },
                new Book { Author = "George Orwell", Title = "1984" },
                new Book { Author = "Anais Nin", Title = "Delta of Venus" }
              };

            return resultBookList;
        }

        [HttpPost]
        public IActionResult Login([FromBody]LoginRequestModel model)
        {
            //var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
            //if (result.Succeeded)
            //{
            //    var user = await _userManager.Users.SingleOrDefaultAsync(x => x.Email == model.Email);
            //    return Ok(BuildToken(user));
            //}

            return Ok("Invalid login attempt.");
        }

        public class Book
        {
            public string Author { get; set; }
            public string Title { get; set; }
            public bool AgeRestriction { get; set; }
        }
    }
}
