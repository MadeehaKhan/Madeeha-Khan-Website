using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mksite.Server.Models;

namespace mksite.Server.Data;
    public class AboutData
    {
        public readonly CarouselModel[] CarouselData = [ 
            new CarouselModel{
            Id = 1,
            Url = "https://trafalgarresidence.com/wp-content/uploads/2018/12/riccardo-chiarini-719516-unsplash.jpg",
            AltText = "An image will go here",
            Caption = "A short caption with a description"
        },
        new CarouselModel{
            Id = 2,
            Url = "https://trafalgarresidence.com/wp-content/uploads/2018/12/riccardo-chiarini-719516-unsplash.jpg",
            AltText = "Another image will go here",
            Caption = "A short caption with a description"
        },
        new CarouselModel{
            Id = 3,
            Url = "https://trafalgarresidence.com/wp-content/uploads/2018/12/riccardo-chiarini-719516-unsplash.jpg",
            AltText = "A third image will go here",
            Caption = "A short caption with a description"
        },
        ]; 
    }
