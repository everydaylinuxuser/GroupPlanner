using GroupPlanner.Api.Models.Entities;

namespace GroupPlanner.Api.Services;

public interface ITokenService
{
    string CreateToken(ApplicationUser user);
}