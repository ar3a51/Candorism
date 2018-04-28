using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Candorism.Controllers
{
    public class MainController : Controller
    {
        public IActionResult Index()
        {
            return View("newsfeed");
        }

        public IActionResult Profile()
        {
            return View();
        }
    }
}