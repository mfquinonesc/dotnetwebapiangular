using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/editorial")]
    public class EditorialController : ControllerBase
    {
        private readonly EditorialService _service;
        public EditorialController(EditorialService service)
        {
            this._service = service;
        }


        [HttpGet]
        public async Task<ActionResult<List<Editorial>>> GetAllEditorials()
        {
            return await _service.GetAllEditorial();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Editorial?>> GetEditorialById(int id)
        {
            var result = await _service.GetEditorialById(id);
            return Ok(result);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<Editorial?>> UpdateEditorialById(int id, Editorial editorial)
        {
            var result = await _service.UpdateEditorialById(id, editorial);
            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Editorial?>> DeleteEditorialById(int id)
        {
            var result = await _service.DeleteEditorialById(id);
            return Ok(result);
        }
        

        [HttpPost]
        public async Task<ActionResult<Editorial?>> CreateEditorial(Editorial editorial)
        {
            var result = await _service.CreateEditrorial(editorial);
            return Ok(result);
        }
    }

}