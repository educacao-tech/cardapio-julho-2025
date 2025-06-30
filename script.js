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
                    "creches": "https://docs.google.com/document/d/179eHf9I2YbjIstOSnKuGOVbW8m9ew_TQ/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true",
                    "fundamental-grupo1": "https://docs.google.com/document/d/1o5ys1FU2JDljYMRvyC4XhNkx4bQ89EcQ/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true",
                    "fundamental-grupo2": "https://docs.google.com/document/d/1a8KLxp1OSgfvgM1aYmEJjXkfEtBykMnH/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true",
                    "fundamental-grupo3": "https://docs.google.com/document/d/1ddB_Wj4fvN9FkZQz3DQ37Tcr0HjWdtDU/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true",
                    "fundamental-esther": "https://docs.google.com/document/d/1AAMNwRWuL8e7dOw740XwTSJ4Luxq1isk/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true",
                    "fundamental-grupo4": "https://docs.google.com/document/d/1agip_wy6m57_94BLLvUazTX5eh9ae3b1/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true",
                    "etec": "https://docs.google.com/document/d/1a0txX4JEAHBwHUgdgQlsdJyjHEkhWHmv/edit?usp=sharing&ouid=116154735950320601146&rtpof=true&sd=true"
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
            },
            // Adicione aqui outros meses e anos conforme necessário.
            // Exemplo para Agosto de 2025:
            "agosto": {
                "semana1": {
                    "creche-m-verde": "https://docs.google.com/document/d/SEMANA1_AGOSTO_CRECHE_M_VERDE/edit",
                    "creches": "https://docs.google.com/document/d/SEMANA1_AGOSTO_CRECHES/edit",
                    "fundamental-grupo1": "https://docs.google.com/document/d/SEMANA1_AGOSTO_FUNDAMENTAL_GRUPO1/edit",
                    "fundamental-grupo2": "https://docs.google.com/document/d/SEMANA1_AGOSTO_FUNDAMENTAL_GRUPO2/edit",
                    "fundamental-grupo3": "https://docs.google.com/document/d/SEMANA1_AGOSTO_FUNDAMENTAL_GRUPO3/edit",
                    "fundamental-esther": "https://docs.google.com/document/d/SEMANA1_AGOSTO_FUNDAMENTAL_ESTHER/edit",
                    "fundamental-grupo4": "https://docs.google.com/document/d/SEMANA1_AGOSTO_FUNDAMENTAL_GRUPO4/edit",
                    "etec": "https://docs.google.com/document/d/SEMANA1_AGOSTO_ETEC/edit"
                },
                // ... adicione as outras semanas de agosto (semana2, semana3, etc.)
            }
        }
    };

    // Mapeamento das datas de início de cada "semana" para o ID da coluna correspondente.
    // É CRÍTICO MANTER ESTE OBJETO ATUALIZADO COM OS PRÓXIMOS MESES E ANOS.
    // As datas são o primeiro dia da semana de referência para a coluna.
    const weekStartDatesMapping = {
        // Datas para Julho de 2025
        "2025-07-01": { id: "semana1", month: "julho" },
        "2025-07-07": { id: "semana2", month: "julho" },
        "2025-07-14": { id: "semana3", month: "julho" },
        "2025-07-21": { id: "semana4", month: "julho" },
        "2025-07-28": { id: "semana5", month: "julho" },
        // Datas para Agosto de 2025 (Exemplo, adapte conforme seu calendário real)
        "2025-08-04": { id: "semana1", month: "agosto" },
        "2025-08-11": { id: "semana2", month: "agosto" },
        "2025-08-18": { id: "semana3", month: "agosto" },
        "2025-08-25": { id: "semana4", month: "agosto" },
        // Adicione mais entradas aqui para os próximos meses/anos!
        // "AAAA-MM-DD": { id: "semanaX", month: "nomeDoMes" },
    };

    const allButtons = document.querySelectorAll('.button');
    const legendItems = document.querySelectorAll('.legend-item');
    const showAllButton = document.querySelector('.show-all-button');
    const filterMessage = document.getElementById('filter-message');

    /**
     * Aplica os links do menu aos botões correspondentes e gerencia o estado "Em breve!".
     * Esta função agora pega o ano e mês da data atual para buscar os links corretos.
     */
    function applyLinksToButtons() {
        const today = new Date();
        const targetYear = today.getFullYear().toString();
        // Usa Intl.DateTimeFormat para obter o nome do mês em minúsculas (ex: "julho")
        const targetMonthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(today).toLowerCase();

        allButtons.forEach(button => {
            const week = button.dataset.week;
            const type = button.dataset.type;

            if (!button.dataset.originalText) {
                button.dataset.originalText = button.textContent;
            }

            let foundLink = null;
            // Busca o link no objeto menuLinks usando o ano e mês atuais
            if (menuLinks[targetYear] && menuLinks[targetYear][targetMonthName] && menuLinks[targetYear][targetMonthName][week]) {
                const weekLinks = menuLinks[targetYear][targetMonthName][week];

                // Prioriza o tipo exato (ex: "fundamental-grupo1")
                if (weekLinks[type]) {
                    foundLink = weekLinks[type];
                } else if (type.startsWith('fundamental')) {
                    // Lógica de fallback para tipos "fundamental" mais genéricos
                    for (const key in weekLinks) {
                        if (key.startsWith(type) && weekLinks[key]) {
                            foundLink = weekLinks[key];
                            break;
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
                button.style.opacity = '0.7'; // Ajusta a opacidade para "Em breve!"
                button.title = "Cardápio não disponível ou em breve."; // Altera o título (tooltip)
                button.textContent = "Em breve!"; // Define o texto como "Em breve!"
                button.classList.add('no-link');
                button.setAttribute('tabindex', '-1'); // Remove da navegação por teclado para acessibilidade
            }
        });
    }

    /**
     * Destaca a semana atual no cardápio, adicionando uma classe e um selo.
     * Agora usa o weekStartDatesMapping para uma lógica mais dinâmica.
     */
    function highlightCurrentWeek() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Zera a hora para comparação precisa de datas

        // Remove destaques anteriores
        document.querySelectorAll('.button-column').forEach(col => {
            col.classList.remove('current-week');
            const label = col.querySelector('.current-week-label');
            if (label) label.remove(); // Remove o selo se existir
        });

        let currentWeekColumnId = '';

        // Itera sobre as datas mapeadas para encontrar a semana atual
        for (const dateString in weekStartDatesMapping) {
            const { id: columnId, month: mappedMonth } = weekStartDatesMapping[dateString];
            const startDate = new Date(dateString + "T00:00:00"); // Adiciona T00:00:00 para evitar problemas de fuso horário

            // Calcula o final da semana (assumindo 5 dias úteis: Seg, Ter, Qua, Qui, Sex).
            // Ajuste o "+4" se suas "semanas" tiverem uma duração diferente.
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 4);

            // Verifica se a data de hoje está dentro do intervalo desta semana
            if (today >= startDate && today <= endDate) {
                // Obtém o nome do mês atual para comparar com o mês mapeado
                const currentMonthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(today).toLowerCase();

                // Garante que a semana mapeada corresponde ao mês atual
                if (currentMonthName === mappedMonth) {
                    currentWeekColumnId = columnId;
                    break; // Encontrou a semana atual, pode sair do loop
                }
            }
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
        // Adiciona suporte a teclado para os itens da legenda
        item.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') { // Ativa com Enter ou Barra de Espaço
                event.preventDefault(); // Evita rolagem da página com barra de espaço
                this.click(); // Simula o clique
            }
        });
    });

    // Adiciona event listener ao botão "Mostrar Todos"
    showAllButton.addEventListener('click', function() {
        legendItems.forEach(li => li.classList.remove('active')); // Remove a seleção da legenda
        filterButtons('all'); // Mostra todos os botões
    });
    // Adiciona suporte a teclado para o botão "Mostrar Todos"
    showAllButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.click();
        }
    });

    // --- Chamadas iniciais ao carregar a página ---
    applyLinksToButtons(); // Atribui os links e define "Em breve!"
    highlightCurrentWeek(); // Destaca a semana atual
    filterButtons('all'); // Garante que todos os botões estejam visíveis inicialmente
    filterMessage.style.opacity = '0'; // Inicia a mensagem de filtro invisível
});
