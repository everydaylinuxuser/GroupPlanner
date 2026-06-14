namespace GroupPlanner.Api.Models.Entities;

public class Event
{
    public int Id { get; set; }

    public int CommunityGroupId { get; set; }

    public CommunityGroup CommunityGroup { get; set; } = null!;

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public DateTime EventDate { get; set; }

    public int MaxAttendees { get; set; }

    public ICollection<EventAttendee> Attendees { get; set; }
        = new List<EventAttendee>();

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;        
}