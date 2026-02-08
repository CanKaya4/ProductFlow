using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProductFlowServer.Business.Abstract;
using ProductFlowServer.Business.Concrete;
using ProductFlowServer.Business.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.Business
{
    public static class BusinessRegistration
    {
        public static IServiceCollection AddBusinessServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper(cfg =>
            {
                cfg.AddProfile<ProductMapping>();
            });
            services.AddScoped<IProductService, ProductManager>();
            return services;
        }
    }
}
