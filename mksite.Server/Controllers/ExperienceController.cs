using Microsoft.AspNetCore.Mvc;
using mksite.Server.Models;

namespace mksite.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ExperienceController : ControllerBase
{
    private static readonly IEnumerable<ExperienceModel> RelevantExperience = new[]{
        new ExperienceModel{Id=1,Company="Company 1",Role="Role 1",TimeWork="date1-date1",GeneralDescription="General rol description", 
        ItemizedDescription=new string[]{
            "Experience 1 description",
            "Experience 2 description",
            "Experience 3 description"
        }},
        new ExperienceModel{Id=2,Role="Role 2",TimeWork="date2-date3",Company="Company 2",GeneralDescription="General rol description", 
        ItemizedDescription=new string[]{
            "Experience 1 description",
            "Experience 2 description",
            "Experience 3 description"
        }},
        new ExperienceModel{Id=3,Role="Role3", TimeWork="Nov 2019-Dec 2020", Company="Company 3",GeneralDescription="General rol description 3", 
        ItemizedDescription=new string[]{
            "Experience 1 description",
            "Experience 2 description",
            "Experience 3 description"
        }},
        new ExperienceModel{Id=4,Role="Role4", TimeWork="April 2017-Nov 19",Company="Company 4",GeneralDescription="General rol description 4", 
        ItemizedDescription=new string[]{
            "Experience 1 description",
            "Experience 2 description",
            "Experience 2 description"
        }},
        new ExperienceModel{Id=5,Role="Role5", TimeWork="May 2016-April 2017",Company="Company 5",GeneralDescription="General rol description 5", 
        ItemizedDescription=new string[]{
            "Experience 1 description",
            "Experience 2 description",
            "Experience 3 description"
        }},
    };

    [HttpGet("{id:int}")]
    public ExperienceModel? Get(int id){
        return RelevantExperience.Where(e => e.Id == id).FirstOrDefault();
    }

    [HttpGet(Name = "GetExperience")]
    public ExperienceModel[] Get(){
        return RelevantExperience.ToArray();
    }   
}