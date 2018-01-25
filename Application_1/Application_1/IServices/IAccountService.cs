using Application_1.DTO.Account;
using Application_1.DTO.Account.GetMe;
using Application_1.DTO.Account.Login;
using Application_1.DTO.Account.Register;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_1.IServices
{
    public interface IAccountService
    {
        Task<LoginResponseModel> Login(LoginRequestModel model);
        Task<RegisterResponseModel> Register(RegisterRequestModel model);
        Task<GetMeResponseModel> GetMe(string userName);
    }
}
