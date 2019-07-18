using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class ChatHub: Hub {

        public string GetConnectionId() => Context.ConnectionId;
    }
}