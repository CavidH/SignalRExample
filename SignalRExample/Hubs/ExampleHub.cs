using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SignalRExample.Hubs;

public class ExampleHub : Hub
{
    public async Task SendMessageAsync(string message)
    {
        await Clients.All.SendAsync("receiveMessage", message);
    }
}