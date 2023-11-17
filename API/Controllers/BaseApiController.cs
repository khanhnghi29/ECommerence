using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // Cos the cau hinh cai Apicontroller o Service
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {


    }
}