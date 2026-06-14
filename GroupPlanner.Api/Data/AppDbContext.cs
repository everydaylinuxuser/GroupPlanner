using GroupPlanner.Api.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GroupPlanner.Api.Data;

public class AppDbContext : IdentityDbContext<ApplicationUser>
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<CommunityGroup> CommunityGroups => Set<CommunityGroup>();

    public DbSet<CommunityGroupMember> CommunityGroupMembers => Set<CommunityGroupMember>();

    public DbSet<Event> Events => Set<Event>();

    public DbSet<EventAttendee> EventAttendees => Set<EventAttendee>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<CommunityGroupMember>()
            .HasIndex(x => new { x.CommunityGroupId, x.UserId })
            .IsUnique();

        builder.Entity<EventAttendee>()
            .HasIndex(x => new { x.EventId, x.UserId })
            .IsUnique();

        builder.Entity<CommunityGroup>()
            .HasOne(x => x.Owner)
            .WithMany()
            .HasForeignKey(x => x.OwnerId)
            .OnDelete(DeleteBehavior.NoAction);

        builder.Entity<CommunityGroupMember>()
            .HasOne(x => x.User)
            .WithMany()
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.NoAction);

        builder.Entity<EventAttendee>()
            .HasOne(x => x.User)
            .WithMany()
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}