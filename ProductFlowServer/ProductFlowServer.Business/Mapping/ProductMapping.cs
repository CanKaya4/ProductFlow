using AutoMapper;
using ProductFlowServer.DTO.ProductDtos;
using ProductFlowServer.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.Business.Mapping
{
    public class ProductMapping : Profile
    {
        public ProductMapping()
        {
            CreateMap<Product, ProductListDto>().ReverseMap();
            CreateMap<ProductCreateDto, Product>();
            CreateMap<ProductUpdateDto, Product>();
        }
    }
}
