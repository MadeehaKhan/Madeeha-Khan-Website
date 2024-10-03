using Microsoft.AspNetCore.Mvc;
using mksite.Server.Data;
using mksite.Server.Models;

namespace mksite.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ExperienceController : ControllerBase
{
    private ExperienceData Experience = new();

    [HttpGet("{type}")]
    public ExperienceModel Get(string type)
    {
        return type == "teaching"
            ? Experience.TeachingExperience
            : Experience.ProgrammingExperience;
    }
}
