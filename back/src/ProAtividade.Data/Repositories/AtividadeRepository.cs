using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class AtividadeRepository : Repository<Atividade>, IAtividadeRepository
    {
        private readonly DbSet<Atividade> DbSet;
        private readonly DataContext _context;
        public AtividadeRepository(DataContext context) : base(context)
        {
            _context = context;
            DbSet = _context.Set<Atividade>();
        }

        public async Task<IEnumerable<Atividade>> GetAtividadeAsync()
        {
            return await DbSet.AsNoTracking().OrderBy(ativ => ativ.Id).ToListAsync();
        }

        public async Task<Atividade> GetAtividadeByIdAsync(int id)
        {
            return await DbSet.AsNoTracking().OrderBy(ativ => ativ.Id).FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<Atividade> GetByTituloAsync(string titulo)
        {
            return await DbSet.AsNoTracking().OrderBy(ativ => ativ.Id).Where(a => a.Titulo == titulo).FirstOrDefaultAsync();
        }
    }
}