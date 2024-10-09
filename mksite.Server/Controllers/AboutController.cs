using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mksite.Server.Models;

namespace mksite.Server.Controllers
{
    [Route("[controller]")]
    public class AboutController : ControllerBase
    {
        private readonly ILogger<AboutController> _logger;

        public AboutController(ILogger<AboutController> logger)
        {
            _logger = logger;
        }

        public readonly CarouselModel[] CarouselData = [ new CarouselModel{
            Id = 1,
            Url = "",
            AltText = "An image will go here",
            Caption = "A short caption with a description"
        },
        new CarouselModel{
            Id = 2,
            Url = "",
            AltText = "Another image will go here",
            Caption = "A short caption with a description"
        },
        new CarouselModel{
            Id = 3,
            Url = "",
            AltText = "A third image will go here",
            Caption = "A short caption with a description"
        },
        ];

        [HttpGet]
        public CarouselModel[] Get() {
            return CarouselData;
        }
    }
}