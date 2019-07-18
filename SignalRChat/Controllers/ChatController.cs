using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Authorization;
using SignalRChat.Hubs;
using SignalRChat.Models;
using SignalRChat.Database;
using System.Threading.Tasks;
using System;

namespace SignalRChat.Controllers {

    [Authorize]
    [Route("[controller]")]
    public class ChatController: Controller {

        private IHubContext<ChatHub> _chat;

        public ChatController(IHubContext<ChatHub> chat)
        {
            _chat = chat;
        }

        [HttpPost("[action]/{connectionId}/{roomId}")]
        public async Task<IActionResult> JoinRoom(string connectionId, string roomId){
            await _chat.Groups.AddToGroupAsync(connectionId,roomId);
            return Ok();
        }

        [HttpPost("[action]/{connectionId}/{roomId}")]
        public async Task<IActionResult> LeaveRoom(string connectionId, string roomId){
            await _chat.Groups.RemoveFromGroupAsync(connectionId,roomId);
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> SendMessage(int roomId, string message, [FromServices] AppDbContext ctx){
            var msg = new Message {
                ChatId = roomId,
                Text = message,
                Name = User.Identity.Name,
                Timestamp = DateTime.Now
            };

            ctx.Messages.Add(msg);
            await ctx.SaveChangesAsync();

            await _chat.Clients.Group(roomId.ToString()).SendAsync("ReceiveMessage", new {
                Text = msg.Text,
                Name = msg.Name,
                Timestamp = msg.Timestamp.ToString("MM/dd/yyyy hh:mm:ss")
            });
            return Ok();
        }    
    }
}