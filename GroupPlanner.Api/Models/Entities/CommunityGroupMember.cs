namespace GroupPlanner.Api.Models.Entities;

public class CommunityGroupMember
{
    public int Id { get; set; }
    public int CommunityGroupId { get; set; }

    public CommunityGroup CommunityGroup { get; set; } = null!;

    public CommunityGroupRole Role { get; set; }

    public string UserId { get; set; } = string.Empty;

    public ApplicationUser User { get; set; } = null!;

    public DateTime JoinedAt { get; set; }
}