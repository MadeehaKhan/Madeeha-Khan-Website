using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mksite.Server.Models;
    public class CarouselModel
    {
        required public int Id { get; set; }
        required public string Url { get; set; }
        required public string AltText { get; set; } 
        required public string Caption { get; set; }
        
    }
