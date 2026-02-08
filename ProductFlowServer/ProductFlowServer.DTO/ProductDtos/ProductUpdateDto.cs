using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.DTO.ProductDtos
{
    public sealed class ProductUpdateDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductCode { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
