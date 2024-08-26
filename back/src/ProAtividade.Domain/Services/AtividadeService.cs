using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.Domain.Services
{
    public class AtividadeService : IAtividadeService
    {
        private readonly IAtividadeRepository _atividadeRepository;
        public AtividadeService(IAtividadeRepository atividadeRepository)
        {
            _atividadeRepository = atividadeRepository;
        }
        public async Task<Atividade> AdicionarAtividade(Atividade model)
        {
            if (await _atividadeRepository.GetByTituloAsync(model.Titulo) != null)
                throw new Exception("Já existe uma atividade com esse título!");

            if (await _atividadeRepository.GetAtividadeByIdAsync(model.Id) == null)
            {
                _atividadeRepository.Adicionar(model);
                if (await _atividadeRepository.SaveChangesAsync())
                    return model;
            }

            return null;
        }

        public async Task<Atividade> AtualizarAtividade(Atividade model)
        {
            if (model.DataConclusao != null)
                throw new Exception("Não pode alterar atividade já concluída!");

            if (await _atividadeRepository.GetAtividadeByIdAsync(model.Id) != null)
            {
                _atividadeRepository.Atualizar(model);
                if (await _atividadeRepository.SaveChangesAsync())
                    return model;
            }

            return null;
        }

        public async Task<bool> ConcluirAtividade(Atividade model)
        {
            if (model != null)
            {
                model.Concluir();
                _atividadeRepository.Atualizar(model);
                return await _atividadeRepository.SaveChangesAsync();
            }

            return false;
        }

        public async Task<bool> DeletarAtividade(int id)
        {
            var atividade = await _atividadeRepository.GetAtividadeByIdAsync(id);
            if (atividade == null)
                throw new Exception("Atividade não existe!");

            _atividadeRepository.Deletar(atividade);
            return await _atividadeRepository.SaveChangesAsync();
        }

        public async Task<Atividade> GetAtividadeById(int id)
        {
            try
            {
                var atividade = await _atividadeRepository.GetAtividadeByIdAsync(id);
                if (atividade == null) return null;

                return atividade;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<IEnumerable<Atividade>> GetAtividadesAsync()
        {
            try
            {
                var atividades = await _atividadeRepository.GetAtividadeAsync();
                if (atividades == null) return null;

                return atividades;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}