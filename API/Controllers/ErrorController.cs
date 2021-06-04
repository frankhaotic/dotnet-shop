using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("errors/{code}")]
    public class ErrorController : BaseApiController
    {
        public IActionResult error (int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}