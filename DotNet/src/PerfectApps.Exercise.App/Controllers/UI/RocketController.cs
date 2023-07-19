using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PerfectApps.Exercise.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace PerfectApps.Exercise.App.Controllers.UI
{
    public class RocketController : Controller
    {
        public ActionResult Index()
        {
            var model = new Rocket { Id = 0, Name = "Dummy", LaunchDate = DateTime.Now };
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(Rocket rocket)
        {
            var baseAddress = Request.Host.Value.StartsWith("http")
                              ? Request.Host.Value
                              : $"http://{Request.Host.Value}";

            var client = new HttpClient { BaseAddress = new Uri(baseAddress) };
            var content = new StringContent(JsonConvert.SerializeObject(rocket), encoding: null, "application/json");
            var response = await client.PostAsync("api/rocket", content);

            return RedirectToAction(nameof(Index));
        }
    }
}
