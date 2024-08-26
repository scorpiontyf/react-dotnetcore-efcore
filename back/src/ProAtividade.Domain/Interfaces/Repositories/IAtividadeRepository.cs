using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepository : IRepository<Atividade>
    {
        Task<IEnumerable<Atividade>> GetAtividadeAsync();
        Task<Atividade> GetAtividadeByIdAsync(int id);
        Task<Atividade> GetByTituloAsync(string titulo);
    }
}