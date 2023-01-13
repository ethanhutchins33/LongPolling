using Microsoft.AspNetCore.Mvc;

public class PollController : ControllerBase
{
    public PollController()
    {

    }

    public ActionResult<int> Poll()
    {
        var rand = new Random();
        return Ok(rand.Next());
    }

}