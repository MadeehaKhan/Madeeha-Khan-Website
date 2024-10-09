using Microsoft.AspNetCore.Mvc;
using mksite.Server.Data;
using mksite.Server.Models;

namespace mksite.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ExperienceController : ControllerBase
{
    private ExperienceData Experience = new();
     private readonly ILogger<AboutController> _logger;

     public ExperienceController(ILogger<AboutController> logger) {
        _logger = logger;
     }

    [HttpGet("{type}")]
    public ExperienceModel Get(string type)
    {
        return type == "teaching"
            ? Experience.TeachingExperience
            : Experience.ProgrammingExperience;
    }
}
