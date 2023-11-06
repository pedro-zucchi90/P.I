document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const searchResults = document.getElementById("search-results");

  // Mapeamento de pesquisa para URLs
  const searchMapping = {
    "termo1": "pagina1.html",
    "termo2": "TesteProtótipo2.html",
    "termo3": "pagina3.html",
    // Adicione mais termos e URLs conforme necessário
  };

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    // Limpe os resultados anteriores
    searchResults.innerHTML = "";

    if (searchMapping[searchTerm]) {
      // Redirecione para a página correspondente
      window.location.href = searchMapping[searchTerm];
    } else {
      searchResults.innerHTML = "Nenhum resultado encontrado.";
    }
  }

  searchButton.addEventListener("click", performSearch);

  // Adicione um ouvinte de evento de pressionar tecla Enter na caixa de pesquisa
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });
});
