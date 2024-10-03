namespace mksite.Server.Models;
public class ExperienceModel{
    public int Id { get; set; }
    public string Company { get; set; }
    public string Role { get; set; }
    public string TimeWork{ get; set; }
    public string GeneralDescription{get; set; }
    public string[] ItemizedDescription{get; set; }
}