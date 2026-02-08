using AutoMapper;
using ProductFlowServer.Business.Abstract;
using ProductFlowServer.DataAccess.Abstract;
using ProductFlowServer.DTO.ProductDtos;
using ProductFlowServer.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.Business.Concrete
{
    public class ProductManager : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProductManager(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task AddAsync(ProductCreateDto productCreateDto)
        {
            var productEntity = _mapper.Map<Product>(productCreateDto);
            await _unitOfWork.GetRepository<Product>().AddAsync(productEntity);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            await _unitOfWork.GetRepository<Product>().DeleteAsync(id);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task<List<ProductListDto>> GetAllAsync()
        {
            var products = await _unitOfWork.GetRepository<Product>().GetAllAsync();
            var productsDto = _mapper.Map<List<ProductListDto>>(products);
            return productsDto;
        }

        public async Task<ProductListDto> GetByIdAsync(int id)
        {
            var product = await _unitOfWork.GetRepository<Product>().GetByIdAsync(id);
            return _mapper.Map<ProductListDto>(product);
        }

        public async Task UpdateAsync(ProductUpdateDto productUpdateDto)
        {
            var productEntity = _mapper.Map<Product>(productUpdateDto);
            await _unitOfWork.GetRepository<Product>().UpdateAsync(productEntity);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
