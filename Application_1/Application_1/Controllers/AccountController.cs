using Application_1.DTO.Account;
using Application_1.IServices;
using Application_1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Application_1.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IAccountService accountService;
        public AccountController(IAccountService accountService)
        {
            this.accountService = accountService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginRequestModel model)
        {
            var response = await accountService.Login(model);
            if (response != null)
            {
                return Ok(response);
            }

            return NotFound("Neteisingas el. pašto adresas ar slaptažodis");
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]RegisterRequestModel model)
        {
            var response = await accountService.Register(model);
            if (response != null)
            {
                return Ok(response);
            }
            return NotFound("Prisiregistruoti nepavyko");
        }
        [Authorize]
        [HttpGet("getMe")]
        public async Task<IActionResult> GetMe()
        {
            var userName = User.Identity.Name;
            var response = await accountService.GetMe(userName);
            return Ok(response);
        }
    }
}
