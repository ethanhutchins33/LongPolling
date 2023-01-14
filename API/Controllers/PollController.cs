using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api")]
public class PollController : ControllerBase
{
    private Random rand = new Random();

    [HttpGet]
    [Route("poll")]
    public ActionResult<int> Poll()
    {
        var next = rand.Next(1, 1000);
        Console.WriteLine($"POLLED! {next}");
        return Ok(new { number = next });
    }
}