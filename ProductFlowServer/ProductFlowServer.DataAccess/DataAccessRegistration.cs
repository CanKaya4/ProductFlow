using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProductFlowServer.DataAccess.Abstract;
using ProductFlowServer.DataAccess.Concrete;
using ProductFlowServer.DataAccess.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.DataAccess
{
    public static class DataAccessRegistration
    {
        public static IServiceCollection AddDataAccessServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(opt =>
            {
                opt.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            });
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
