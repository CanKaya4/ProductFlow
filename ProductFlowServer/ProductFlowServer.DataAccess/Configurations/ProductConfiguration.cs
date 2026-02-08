using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProductFlowServer.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.DataAccess.Configurations
{
    internal sealed class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).IsRequired().HasMaxLength(200);
            builder.Property(p => p.ProductCode).IsRequired().HasMaxLength(50);
            builder.Property(p => p.Price).HasColumnType("decimal(18,2)");
            builder.HasData(new Product
            {
                Id = 1,
                Name = "Test Ürünü",
                Quantity = 5,
                Price = 99.99m,
                ProductCode = "TEST-001",
                IsActive = true,
            });
        }
    }
}
