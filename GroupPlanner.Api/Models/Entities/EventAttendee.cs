namespace GroupPlanner.Api.Models.Entities;
public class EventAttendee
{
    public int Id { get; set; }
    public int EventId { get; set; }

    public Event Event { get; set; } = null!;

    public string UserId { get; set; } = string.Empty;

    public ApplicationUser User { get; set; } = null!;

    public DateTime JoinedAt { get; set; }
}