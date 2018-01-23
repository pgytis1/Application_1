using Application_1.DTO.Account;
using Application_1.IServices;
using Application_1.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Application_1.Services
{
    public class AccountService: IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly MainContext db;

        public AccountService(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration, MainContext db)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            this.db = db;
        }

        public async Task<JwtResponse> Login(LoginRequestModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
            if (result.Succeeded)
            {
                var user = await _userManager.Users.SingleOrDefaultAsync(x => x.Email == model.Email);
                return new JwtResponse { Jwt = BuildToken(user) };
            }

            return null;
        }

        private string BuildToken(IdentityUser user)
        {

            var claims = new[] {
                new Claim(ClaimTypes.Name, user.UserName),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
              _configuration["Jwt:Issuer"],
              _configuration["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(240),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<JwtResponse> Register(RegisterRequestModel model)
        {
            var user = new User { UserName = model.Email, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
                return new JwtResponse { Jwt = BuildToken(user) };
            }

            return null;
        }
        public async Task<GetMeResponseModel> GetMe(string userName)
        {
            var user = await db.Users.SingleOrDefaultAsync(x => x.UserName == userName);
            return new GetMeResponseModel
            {
                Id = user.Id,
                UserName = userName
            };
        }
    }
}
