using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        
        public string UserName { get; set; }
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="Password must be 4 to 8 characters long.")]
        public string Password { get; set; }
    }
}