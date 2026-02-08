using ProductFlowServer.DTO.ProductDtos;
using ProductFlowServer.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.Business.Abstract
{
    public interface IProductService
    {
        Task<List<ProductListDto>> GetAllAsync();
        Task<ProductListDto> GetByIdAsync(int id);
        Task AddAsync(ProductCreateDto product);
        Task UpdateAsync(ProductUpdateDto product);
        Task DeleteAsync(int id);
    }
}
