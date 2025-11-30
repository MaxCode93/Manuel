const SearchEngine = (() => {
  let index = [];
  let onSelect = () => {};
  let debounceTimeout;

  const buildIndex = (pages) => {
    index = pages.map((page) => ({
      route: page.route,
      title: page.title,
      description: page.description,
      tags: page.tags || []
    }));
  };

  const filter = (query) => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return index.filter((item) => {
      return (
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    });
  };

  const attach = ({ input, results, onItemSelected }) => {
    onSelect = onItemSelected;
    $(input).on('input', (e) => {
      const value = e.target.value;
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => renderResults(value, results), 150);
    });
  };

  const renderResults = (value, resultsContainer) => {
    const matches = filter(value);
    const $container = $(resultsContainer);
    $container.empty();

    if (!value.trim()) {
      $container.removeClass('is-visible');
      return;
    }

    if (!matches.length) {
      $container.append(`<div class="search__item">No se encontraron resultados</div>`);
      $container.addClass('is-visible');
      return;
    }

    matches.slice(0, 10).forEach((item) => {
      const el = $(`<div class="search__item" role="option" tabindex="0">${item.title}</div>`);
      el.on('click keypress', (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
          onSelect(item.route);
          $container.removeClass('is-visible');
          $('#search-input').val('');
        }
      });
      $container.append(el);
    });

    $container.addClass('is-visible');
  };

  return { buildIndex, attach };
})();
