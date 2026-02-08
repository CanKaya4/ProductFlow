using Microsoft.EntityFrameworkCore;
using ProductFlowServer.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace ProductFlowServer.DataAccess.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
