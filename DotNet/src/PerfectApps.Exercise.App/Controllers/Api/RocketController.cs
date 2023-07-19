using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using PerfectApps.Exercise.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PerfectApps.Exercise.App.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class RocketController : ControllerBase
    {
        private readonly ILogger<RocketController> _logger;
        private static readonly List<Rocket> _rocketList = new List<Rocket> 
        {
            new Rocket { Id = 1, LaunchDate = DateTime.Now, Name = "Rocket-1" },
            new Rocket { Id = 2, LaunchDate = DateTime.Now, Name = "Rocket-2" },
            new Rocket { Id = 3, LaunchDate = DateTime.Now, Name = "Rocket-3" }
        };

        public RocketController(ILogger<RocketController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult SaveRocket([FromBody] Rocket rocket)
        {
            var payload = JsonConvert.SerializeObject(rocket);
            _logger.LogInformation($"{Request.Path} [{Request.Method}] Payload: \"{payload}\"");

            if (rocket is null)
            {
                return BadRequest("Rocket cannot be null");
            }

            _rocketList.Add(rocket);

            return NoContent();
        }

        [HttpGet("{id}")]
        public IActionResult GetRocketById(int id)
        {
            var rocket = _rocketList.FirstOrDefault(x => x.Id == id);

            if (rocket is null)
            {
                return NotFound("Rocket id not found");
            }

            return Ok();
        }
    }
}
