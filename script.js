document.addEventListener('DOMContentLoaded', function() {
    // Objeto com os links dos cardápios.
    // **Importante:**
    // - Para "Em breve!", deixe a string vazia ou use o placeholder 'SUA_ID_DO_DOCUMENTO'.
    // - Certifique-se de que o nome do mês esteja em minúsculas (ex: "julho").
    const menuLinks = {
        "2025": {
            "julho": { 
                "semana1": {
                    "creche-m-verde": "https://docs.google.com/document/d/17bVULRuOV4NrNoVQ0u0saLrXF7bVAteJ/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true",
                    "creches": "", // Exemplo de link vazio para "Em breve!"
                    "fundamental-grupo1": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO1_JULHO_SEM1/edit", // Placeholder
                    "fundamental-grupo2": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO2_JULHO_SEM1/edit",
                    "fundamental-grupo3": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO3_JULHO_SEM1/edit",
                    "fundamental-esther": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_ESTHER_JULHO_SEM1/edit",
                    "fundamental-grupo4": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO4_JULHO_SEM1/edit",
                    "etec": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_ETEC_JULHO_SEM1/edit"
                },
                "semana2": {
                    "creche-m-verde": "", // Exemplo de link vazio para testar "Em breve!"
                    "creches": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_CRECHES_JULHO_SEM2/edit",
                    "fundamental-grupo1": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO1_JULHO_SEM2/edit",
                    "fundamental-grupo2": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO2_JULHO_SEM2/edit",
                    "fundamental-grupo3": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO3_JULHO_SEM2/edit",
                    "fundamental-esther": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_ESTHER_JULHO_SEM2/edit",
                    "fundamental-grupo4": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO4_JULHO_SEM2/edit",
                    "etec": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_ETEC_JULHO_SEM2/edit"
                },
                "semana3": {
                    "creche-m-verde": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_CRECHE_M_VERDE_JULHO_SEM3/edit",
                    "creches": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_CRECHES_JULHO_SEM3/edit",
                    "fundamental-grupo1": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO1_JULHO_SEM3/edit",
                    "fundamental-grupo2": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRU2_JULHO_SEM3/edit",
                    "fundamental-grupo3": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO3_JULHO_SEM3/edit",
                    "fundamental-esther": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_ESTHER_JULHO_SEM3/edit",
                    "fundamental-grupo4": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO4_JULHO_SEM3/edit",
                    "etec": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_ETEC_JULHO_SEM3/edit"
                },
                "semana4": {
                    "creche-m-verde": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_CRECHE_M_VERDE_JULHO_SEM4/edit",
                    "creches": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_CRECHES_JULHO_SEM4/edit",
                    "fundamental-grupo1": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO1_JULHO_SEM4/edit",
                    "fundamental-grupo2": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO2_JULHO_SEM4/edit",
                    "fundamental-grupo3": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO3_JULHO_SEM4/edit",
                    "fundamental-esther": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_ESTHER_JULHO_SEM4/edit",
                    "fundamental-grupo4": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO4_JULHO_SEM4/edit",
                    "etec": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_ETEC_JULHO_SEM4/edit"
                },
                "semana5": {
                    "creche-m-verde": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_CRECHE_M_VERDE_JULHO_SEM5/edit",
                    "creches": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_CRECHES_JULHO_SEM5/edit",
                    "fundamental-grupo1": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO1_JULHO_SEM5/edit",
                    "fundamental-grupo2": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO2_JULHO_SEM5/edit",
                    "fundamental-grupo3": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO3_JULHO_SEM5/edit",
                    "fundamental-esther": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_ESTHER_JULHO_SEM5/edit",
                    "fundamental-grupo4": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_FUNDAMENTAL_GRUPO4_JULHO_SEM5/edit",
                    "etec": "https://docs.google.com/document/d/SUA_ID_DO_DOCUMENTO_ETEC_JULHO_SEM5/edit"
                }
            }
        }
    };

    const allButtons = document.querySelectorAll('.button');
    const legendItems = document.querySelectorAll('.legend-item');
    const showAllButton = document.querySelector('.show-all-button');
    const filterMessage = document.getElementById('filter-message');

    /**
     * Aplica os links do menu aos botões correspondentes e gerencia o estado "Em breve!".
     */
    function applyLinksToButtons() {
        // Define o ano e mês alvo para os cardápios
        const targetYear = "2025";
        const targetMonthName = "julho"; // Certifique-se que o nome do mês no menuLinks está em minúsculas

        allButtons.forEach(button => {
            const week = button.dataset.week;
            const type = button.dataset.type;

            // Salva o texto original do botão uma única vez
            if (!button.dataset.originalText) {
                button.dataset.originalText = button.textContent;
            }

            let foundLink = null;
            if (menuLinks[targetYear] && menuLinks[targetYear][targetMonthName] && menuLinks[targetYear][targetMonthName][week]) {
                const weekLinks = menuLinks[targetYear][targetMonthName][week];

                // Prioriza o tipo exato (ex: "fundamental-grupo1")
                if (weekLinks[type]) {
                    foundLink = weekLinks[type];
                } else if (type.startsWith('fundamental')) {
                    // Se o tipo exato não for encontrado (ex: 'fundamental' geral),
                    // tenta buscar o primeiro link disponível que comece com 'fundamental-grupoX'
                    // Isso é uma lógica de fallback, pode ser ajustada se precisar de mais especificidade.
                    for (const key in weekLinks) {
                        if (key.startsWith(type) && weekLinks[key]) {
                            foundLink = weekLinks[key];
                            break; // Pega o primeiro link fundamental que encontrar
                        }
                    }
                }
            }

            // Verifica se o link é válido (não é nulo, vazio, um placeholder ou um link com "SUA_ID_DO_DOCUMENTO")
            const isValidLink = foundLink && foundLink.trim() !== '' && foundLink.startsWith('http') && !foundLink.includes('SUA_ID_DO_DOCUMENTO');

            if (isValidLink) {
                button.href = foundLink;
                button.style.pointerEvents = ''; // Habilita o clique
                button.style.opacity = '1';
                button.title = button.dataset.ariaLabel || button.dataset.originalText; // Restaura o título (tooltip)
                button.textContent = button.dataset.originalText; // Restaura o texto original
                button.classList.remove('no-link');
                button.removeAttribute('tabindex'); // Torna o botão navegável por teclado
            } else {
                button.href = "#"; // Impede navegação
                button.style.pointerEvents = 'none'; // Desabilita o clique visualmente
                button.style.opacity = '0.7'; // Ajusta a opacidade para "Em breve!" (consistente com CSS)
                button.title = "Cardápio não disponível ou em breve."; // Altera o título (tooltip)
                button.textContent = "Em breve!"; // Define o texto como "Em breve!"
                button.classList.add('no-link');
                button.setAttribute('tabindex', '-1'); // Remove da navegação por teclado para acessibilidade
            }
        });
    }

    /**
     * Destaca a semana atual no cardápio, adicionando uma classe e um selo.
     * A lógica da semana é um exemplo e pode precisar de ajuste conforme o calendário real.
     */
    function highlightCurrentWeek() {
        const today = new Date();
        const dayOfMonth = today.getDate();
        const month = today.getMonth() + 1; // getMonth() retorna 0-11
        const year = today.getFullYear();

        // Remove destaques anteriores
        document.querySelectorAll('.button-column').forEach(col => {
            col.classList.remove('current-week');
            const label = col.querySelector('.current-week-label');
            if (label) label.remove(); // Remove o selo se existir
        });

        // Lógica para determinar a semana atual (ajuste conforme seu calendário de 2025)
        // Este é um exemplo para julho de 2025.
        if (month === 7 && year === 2025) { // Julho de 2025
            let currentWeekColumnId = '';

            if (dayOfMonth >= 1 && dayOfMonth <= 4) { // 01/07 a 04/07
                currentWeekColumnId = 'semana1';
            } else if (dayOfMonth >= 7 && dayOfMonth <= 11) { // 07/07 a 11/07
                currentWeekColumnId = 'semana2';
            } else if (dayOfMonth >= 14 && dayOfMonth <= 18) { // 14/07 a 18/07
                currentWeekColumnId = 'semana3';
            } else if (dayOfMonth >= 21 && dayOfMonth <= 25) { // 21/07 a 25/07
                currentWeekColumnId = 'semana4';
            } else if (dayOfMonth >= 28 && dayOfMonth <= 31) { // 28/07 a 31/07
                currentWeekColumnId = 'semana5';
            }

            if (currentWeekColumnId) {
                const currentWeekColumn = document.getElementById(currentWeekColumnId);
                if (currentWeekColumn) {
                    currentWeekColumn.classList.add('current-week');

                    // Cria e adiciona o selo "SEMANA ATUAL"
                    const label = document.createElement('span');
                    label.classList.add('current-week-label');
                    label.textContent = 'SEMANA ATUAL';
                    currentWeekColumn.prepend(label); // Adiciona no início da coluna

                    // Opcional: Reordena as colunas para que a semana atual apareça primeiro
                    // (Descomente se desejar essa funcionalidade)
                    // const columnsContainer = document.querySelector('.columns-container');
                    // if (columnsContainer) {
                    //     columnsContainer.prepend(currentWeekColumn);
                    // }
                }
            }
        }
    }

    /**
     * Filtra os botões visíveis com base no tipo de instituição selecionado na legenda.
     * @param {string} filterType - O tipo de filtro (ex: 'creches', 'fundamental', 'all').
     * @param {string} filterName - O nome amigável do filtro para exibir na mensagem.
     */
    function filterButtons(filterType, filterName = '') {
        allButtons.forEach(button => {
            // Verifica se o botão tem um link válido (não está no estado "Em breve!")
            // Isso evita que botões "Em breve!" sejam ativados visualmente pelo filtro.
            const hasValidLink = !(button.classList.contains('no-link'));

            if (filterType === 'all') {
                button.classList.remove('inactive-filtered');
            } else if (button.dataset.type.startsWith(filterType)) {
                button.classList.remove('inactive-filtered');
            } else {
                button.classList.add('inactive-filtered');
            }
        });

        // Atualiza a mensagem de filtro ativo
        if (filterType === 'all') {
            filterMessage.style.opacity = '0'; // Esconde a mensagem
            filterMessage.textContent = '';
        } else {
            filterMessage.textContent = `Filtrando por: ${filterName}`;
            filterMessage.style.opacity = '1'; // Mostra a mensagem
        }
    }

    // Adiciona event listeners aos itens da legenda (filtros)
    legendItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens da legenda
            legendItems.forEach(li => li.classList.remove('active'));
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');

            const filterType = this.dataset.filter;
            const filterName = this.textContent;
            filterButtons(filterType, filterName);
        });
    });

    // Adiciona event listener ao botão "Mostrar Todos"
    showAllButton.addEventListener('click', function() {
        legendItems.forEach(li => li.classList.remove('active')); // Remove a seleção da legenda
        filterButtons('all'); // Mostra todos os botões
    });

    // --- Chamadas iniciais ao carregar a página ---
    applyLinksToButtons(); // Atribui os links e define "Em breve!"
    highlightCurrentWeek(); // Destaca a semana atual
    filterButtons('all'); // Garante que todos os botões estejam visíveis inicialmente
    filterMessage.style.opacity = '0'; // Inicia a mensagem de filtro invisível
});