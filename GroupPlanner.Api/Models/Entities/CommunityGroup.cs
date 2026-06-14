namespace GroupPlanner.Api.Models.Entities;
public class CommunityGroup
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string OwnerId { get; set; } = string.Empty;

    public ApplicationUser Owner { get; set; } = null!;

    public ICollection<CommunityGroupMember> Members { get; set; }
        = new List<CommunityGroupMember>();

    public ICollection<Event> Events { get; set; }
        = new List<Event>();

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;        
}