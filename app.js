// Substitua pela sua chave REAL da OMDB API
const OMDB_API_KEY = '72dcf75a';
const listaFilmesContainer = document.querySelector('.lista-filmes');
const searchInput = document.querySelector('.search-input');

// --- A. Função para Criar o HTML do Card ---
/**
 * Cria o elemento HTML de um Card de Filme com os dados do OMDB.
 * @param {Object} filme - Objeto de filme retornado pela API.
 */
function criarCardFilme(filme) {
    const card = document.createElement('div');
    card.classList.add('card-filme');
    // Adiciona o IMDB ID como um data-attribute para buscar detalhes/trailer depois
    card.dataset.imdbID = filme.imdbID;

    // Garante que o rating seja um valor presente
    const rating = filme.imdbRating ? '⭐️${filme.imdbRating}' : 'N/A';

    // Conteúdo HTML do card, usando as novas classes CSS
card.innerHTML = `
    <img src="${filme.Poster !== 'N/A' ? filme.Poster : 'placeholder.jpg'}"
        alt="${filme.Title}"
        class="poster-filme">
    <span class="avaliacao">${rating}</span>
    <div class="card-detalhes">
        <h3 class="titulo-filme">${filme.Title} (${filme.Year})</h3>
        <button class="botao-adicionar" data-title="${filme.Title}">
            + Minha Lista
        </button>
    </div>
`;