namespace mksite.Server.Models;

public class ExperienceListModel
{
    public int Id { get; set; }
    public string Organization { get; set; }
    public string Role { get; set; }
    public string Duration { get; set; }
    public string GeneralDescription { get; set; }
    public string[] ItemizedDescription { get; set; }
    public string? Link { get; set; }
}

public class ExperienceModel { 
    public ExperienceListModel[] ExperienceList { get; set; }
    public string Title { get; set; }
    public string Introduction { get; set; }
    public string[]? CoreCompetencies { get; set; }

 }
