using System;
using System.ComponentModel.DataAnnotations;

namespace PerfectApps.Exercise.App.Models
{
    public class Rocket
    {
        [Range(0, int.MaxValue)]
        public int Id { get; set; }

        [MaxLength(50)]
        [MinLength(3)]
        public string Name { get; set; }

        public DateTime LaunchDate { get; set; }
    }
}
