using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using GroupPlanner.Api.Data;
using GroupPlanner.Api.Models.Entities;
using System.Security.Claims;

namespace GroupPlanner.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class CommunityGroupsController : ControllerBase
{
    private readonly AppDbContext _context;

    public CommunityGroupsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetGroups()
    {
        return Ok(_context.CommunityGroups.ToList());
    }

    [HttpPost]
    public IActionResult CreateGroup(CreateGroupRequest request)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (userId == null)
            return Unauthorized();

        var group = new CommunityGroup
        {
            Name = request.Name,
            Description = request.Description,
            OwnerId = userId
        };

        _context.CommunityGroups.Add(group);
        _context.SaveChanges();

        return Ok(group);
    }
}