using ProAtividade.Data.Context;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly DataContext _context;
        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Adicionar<T>(T entity) where T : class
        {
            _context.AddAsync(entity);
        }
        public void Atualizar<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Deletar<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public void DeletarRange<T>(IEnumerable<T> entity) where T : class
        {
            _context.RemoveRange(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }
    }
}