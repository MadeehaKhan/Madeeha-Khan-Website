using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mksite.Server.Models;
using mksite.Server.Data;

namespace mksite.Server.Controllers
{
    [Route("[controller]")]
    public class AboutController : ControllerBase
    {
        private readonly ILogger<AboutController> _logger;
        private AboutData AboutData = new();

        public AboutController(ILogger<AboutController> logger)
        {
            _logger = logger;
        }

        

        [HttpGet]
        public CarouselModel[] Get() {
            return AboutData.CarouselData;
        }
    }
}