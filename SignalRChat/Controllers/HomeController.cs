using Microsoft.AspNetCore.Mvc;
using SignalRChat.Database;
using SignalRChat.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace  SignalRChat.Controllers
{
    [Authorize]
    public class HomeController: Controller {
        private AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index() {
            var chats = _context.Chats
                        .Include(x=>x.Users)
                        .Where(x=>!x.Users.Any(y=>y.UserId == User.FindFirst(ClaimTypes.NameIdentifier).Value))
                        .ToList();
            return View(chats);
        }

        public IActionResult Find(){
            var users = _context.Users
                                .Where(x=>x.Id != User.FindFirst(ClaimTypes.NameIdentifier).Value)
                                .ToList();
            return View(users);
        }

        public IActionResult Private(){
            var chats = _context.Chats.Include(x=>x.Users).ThenInclude(x=>x.User)
                        .Where(x=>x.Type == ChatType.Private && 
                                x.Users.Any(y=>y.UserId == User.FindFirst(ClaimTypes.NameIdentifier).Value))
                        .ToList();
            return View(chats);
        }

        public async Task<IActionResult> CreatePrivateRoom(string userId){

            var chat = new Chat {
                Type = ChatType.Private
            };

            chat.Users.Add(new ChatUser {UserId = userId});
            chat.Users.Add(new ChatUser {UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value});

            _context.Chats.Add(chat);
            await _context.SaveChangesAsync();

            return RedirectToAction("Chat", new {id=chat.Id});
        }

        [HttpGet("{id}")]
        public IActionResult Chat(int id) {
            var chat = _context.Chats.Include(x=>x.Messages).FirstOrDefault(i=> i.Id == id);
            return View(chat);
        } 

        [HttpPost]
        public async Task<IActionResult> CreateMessage(int chatId, string message) {
            var chatMessage = new Message {
                ChatId = chatId,
                Text = message,
                Name = User.Identity.Name,
                Timestamp = DateTime.Now
            };

            _context.Messages.Add(chatMessage);
            await _context.SaveChangesAsync();
            return RedirectToAction("Chat", new {Id = chatId});
        } 

        [HttpPost]
        public async Task<IActionResult> CreateRoom(string Name){

            var chat = new Chat {
                Name = Name,
                Type = ChatType.Room
            };

            chat.Users.Add(new ChatUser {
                UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value,
                Role = UserRole.Admin
            });

            _context.Chats.Add(chat);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index");
        }

        [HttpGet]
        public async Task<IActionResult> JoinRoom (int id){

            var chatUser = new ChatUser {
                ChatId = id,
                UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value,
                Role = UserRole.Member
            };

            _context.ChatUsers.Add(chatUser);
            await _context.SaveChangesAsync();

            return RedirectToAction("Chat", "Home", new {id=id});
        }
    }
}