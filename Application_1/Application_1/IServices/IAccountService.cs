using Application_1.DTO.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_1.IServices
{
    public interface IAccountService
    {
        Task<JwtResponse> Login(LoginRequestModel model);
        Task<JwtResponse> Register(RegisterRequestModel model);
        Task<GetMeResponseModel> GetMe(string userName);
    }
}
