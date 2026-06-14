using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GroupPlanner.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet("public")]
    public IActionResult Public()
    {
        return Ok("This is public");
    }

    [Authorize]
    [HttpGet("private")]
    public IActionResult Private()
    {
        return Ok($"This is private. User: {User.Identity?.Name}");
    }
}