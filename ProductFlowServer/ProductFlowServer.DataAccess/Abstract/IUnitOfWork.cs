using ProductFlowServer.DataAccess.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProductFlowServer.DataAccess.Abstract
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<T> GetRepository<T>() where T : class;
        Task<int> SaveChangesAsync();
    }
}
