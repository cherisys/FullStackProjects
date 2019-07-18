using Microsoft.AspNetCore.Mvc;
using SignalRChat.Database;
using SignalRChat.Models;
using System.Linq;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;

namespace  SignalRChat.ViewComponents
{
    public class RoomViewComponent: ViewComponent {

        private AppDbContext _ctx;

        public RoomViewComponent(AppDbContext ctx)
        {
            _ctx = ctx;
        }

        public IViewComponentResult Invoke(){
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;

            var chats = _ctx.ChatUsers
                        .Include(x=>x.Chat)
                        .Where(x=>x.UserId == userId && x.Chat.Type == ChatType.Room)
                        .Select(x=>x.Chat)
                        .ToList();

            return View(chats);
        }
    }
}