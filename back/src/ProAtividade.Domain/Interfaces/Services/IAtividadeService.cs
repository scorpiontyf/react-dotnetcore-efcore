using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Services
{
    public interface IAtividadeService
    {
        Task<Atividade> AdicionarAtividade(Atividade model);
        Task<Atividade> AtualizarAtividade(Atividade model);
        Task<bool> DeletarAtividade(int id);
        Task<bool> ConcluirAtividade(Atividade model);
        Task<Atividade> GetAtividadeById(int id);
        Task<IEnumerable<Atividade>> GetAtividadesAsync();
    }
}