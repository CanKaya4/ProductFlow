using ProductFlowServer.DataAccess.Abstract;
using ProductFlowServer.DataAccess.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.DataAccess.Concrete
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        public UnitOfWork(AppDbContext context)
        {
            _context = context;
        }
        public void Dispose()
        {
            _context.Dispose();
        }
        public  IGenericRepository<T> GetRepository<T>() where T : class
        {
            return new GenericRepository<T>(_context);
        }
        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
