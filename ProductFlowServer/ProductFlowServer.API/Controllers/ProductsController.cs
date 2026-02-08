using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductFlowServer.Business.Abstract;
using ProductFlowServer.DTO.ProductDtos;

namespace ProductFlowServer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _productService.GetAllAsync();
            return Ok(products);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var product = await _productService.GetByIdAsync(id);
            if (product == null)
            {
                return NotFound($"{id} numaralı ürün bulunamadı");
            }
            return Ok(product);
        }
        [HttpPost]
        public async Task<IActionResult> Create(ProductCreateDto productCreateDto)
        {
            await _productService.AddAsync(productCreateDto);
            return StatusCode(201);
        }
        [HttpPut]
        public async Task<IActionResult> Update(ProductUpdateDto productUpdateDto)
        {
            await _productService.UpdateAsync(productUpdateDto);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _productService.DeleteAsync(id);
            return NoContent();
        }

    }
}
