namespace mksite.Server.Models;

public class ExperienceListModel
{
    required public int Id { get; set; }
    required public string Organization { get; set; }
    required public string Role { get; set; }
    required public string Duration { get; set; }
    required public string GeneralDescription { get; set; }
    required public string[] ItemizedDescription { get; set; }
    public string? Link { get; set; }
}

public class ExperienceModel { 
    required public ExperienceListModel[] ExperienceList { get; set; }
    required public string Title { get; set; }
    required public string Introduction { get; set; }
    public CompetencyModel[]? CoreCompetencies { get; set; }

 }

 public class CompetencyModel {
    required public int Id { get; set; }
    required  public string Title { get; set; }
    required public string Url { get; set; } 
    public string? Details { get; set; } 
    required public string Category { get; set; }
 }
