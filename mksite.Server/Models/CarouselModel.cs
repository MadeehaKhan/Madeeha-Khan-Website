using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mksite.Server.Models;
    public class CarouselModel
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string AltText { get; set; } 
        public string Caption { get; set; }
        
    }
