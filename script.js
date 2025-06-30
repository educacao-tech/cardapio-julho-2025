document.addEventListener('DOMContentLoaded', function() {
    // Objeto menuLinks com os links dos cardápios por ano, mês e semana.
    // Lembre-se de preencher os links para as semanas futuras e para os próximos meses.
    const menuLinks = {
        "2025": { // <-- Ano
            "julho": { // <-- Mês (seus links da semana1 já estão aqui!)
                "semana1": { // Seus links para a Semana 1 (30 de Junho a 4 de Julho)
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
            "agosto": { // <-- Exemplo para Agosto de 2025
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
                // Adicione mais semanas para agosto e outros meses conforme necessário
            }
            // Adicione mais meses e anos conforme a necessidade
        }
    };

    // Mapeamento das datas de início de cada "semana" para o ID da coluna correspondente e o mês de busca de links.
    // É CRÍTICO MANTER ESTE OBJETO ATUALIZADO COM OS PRÓXIMOS MESES E ANOS.
    // As datas são o primeiro dia da semana de referência para a coluna.
    const weekStartDatesMapping = {
        // Para a semana que começa em 30 de Junho de 2025, os links serão buscados em "julho" e "semana1".
        "2025-06-30": { id: "semana1", month: "julho" },

        // Datas para Julho de 2025 (a partir da segunda semana real de julho)
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
    };

    const allButtons = document.querySelectorAll('.button');

    /**
     * Aplica os links corretos aos botões com base na data atual e na semana correspondente.
     */
    function applyLinksToButtons() {
        const today = new Date();
        const targetYear = today.getFullYear().toString();
        // Obtém o nome do mês atual para buscar links de semanas não-atuais
        const currentMonthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(today).toLowerCase();

        // Obtém a semana e o mês efetivos para a busca de links da semana atual
        const { currentWeekColumnId, effectiveMonthForLinks } = getCurrentWeekAndMonthForLinks();

        allButtons.forEach(button => {
            const week = button.dataset.week; // Ex: "semana1"
            const type = button.dataset.type; // Ex: "creches"

            // Armazena o texto original do botão se ainda não o fez
            if (!button.dataset.originalText) {
                button.dataset.originalText = button.textContent;
            }

            let foundLink = null;
            let monthToSearch = currentMonthName; // Mês padrão para buscar links

            // Se o botão pertence à coluna da semana atual, usa o mês mapeado
            if (week === currentWeekColumnId && effectiveMonthForLinks) {
                monthToSearch = effectiveMonthForLinks;
            }

            // Tenta encontrar o link no menuLinks
            if (menuLinks[targetYear] && menuLinks[targetYear][monthToSearch] && menuLinks[targetYear][monthToSearch][week]) {
                const weekLinks = menuLinks[targetYear][monthToSearch][week];

                // Busca o link exato pelo tipo
                if (weekLinks[type]) {
                    foundLink = weekLinks[type];
                } else if (type.startsWith('fundamental')) { // Lógica para tipos "fundamental" (ex: fundamental-grupo1)
                    // Verifica se existe um link específico para o subtipo (ex: fundamental-grupo1)
                    if (weekLinks[type]) {
                        foundLink = weekLinks[type];
                    }
                }
            }

            // Verifica se o link encontrado é válido (não vazio, começa com http, não é placeholder)
            const isValidLink = foundLink && foundLink.trim() !== '' && foundLink.startsWith('http') && !foundLink.includes('SUA_ID_DO_DOCUMENTO');

            if (isValidLink) {
                button.href = foundLink;
                button.style.pointerEvents = ''; // Permite cliques
                button.style.opacity = '1'; // Opacidade total
                button.title = button.dataset.ariaLabel || button.dataset.originalText; // Título do tooltip
                button.textContent = button.dataset.originalText; // Restaura texto original (se alterado para "Em breve!")
                button.classList.remove('no-link'); // Remove classe de "sem link"
                button.removeAttribute('tabindex'); // Torna o botão navegável por teclado
            } else {
                button.href = "#"; // Link inativo
                button.style.pointerEvents = 'none'; // Impede cliques
                button.style.opacity = '0.7'; // Opacidade reduzida
                button.title = "Cardápio não disponível ou em breve."; // Título do tooltip
                button.textContent = "Em breve!"; // Texto "Em breve!"
                button.classList.add('no-link'); // Adiciona classe de "sem link"
                button.setAttribute('tabindex', '-1'); // Remove da navegação por teclado
            }
        });
    }

    /**
     * Determina a semana atual e o mês de busca de links com base no weekStartDatesMapping.
     * @returns {object} Um objeto com currentWeekColumnId (ID da coluna da semana atual)
     * e effectiveMonthForLinks (o nome do mês para buscar os links no menuLinks).
     */
    function getCurrentWeekAndMonthForLinks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Zera horas para comparação de datas

        let currentWeekColumnId = '';
        let effectiveMonthForLinks = '';

        for (const dateString in weekStartDatesMapping) {
            const { id: columnId, month: mappedMonth } = weekStartDatesMapping[dateString];
            const startDate = new Date(dateString + "T00:00:00"); // Garante que a data seja interpretada em UTC ou de forma consistente

            // Calcular a data final da semana (5 dias úteis, Seg-Sex)
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 4); // Adiciona 4 dias para incluir Sex (Seg + 4 = Sex)

            // Se a data de hoje está dentro da faixa da semana
            if (today >= startDate && today <= endDate) {
                currentWeekColumnId = columnId;
                effectiveMonthForLinks = mappedMonth;
                break; // Encontrou a semana atual, pode sair do loop
            }
        }
        return { currentWeekColumnId, effectiveMonthForLinks };
    }

    /**
     * Destaca a coluna da semana atual na interface.
     */
    function highlightCurrentWeek() {
        const { currentWeekColumnId } = getCurrentWeekAndMonthForLinks(); // Reutiliza a nova função para obter o ID da semana

        // Remove destaques anteriores e rótulos "SEMANA ATUAL"
        document.querySelectorAll('.button-column').forEach(col => {
            col.classList.remove('current-week');
            const label = col.querySelector('.current-week-label');
            if (label) label.remove();
        });

        // Adiciona destaque e rótulo à semana atual
        if (currentWeekColumnId) {
            const currentWeekColumn = document.getElementById(currentWeekColumnId);
            if (currentWeekColumn) {
                currentWeekColumn.classList.add('current-week'); // Adiciona classe para estilização
                const label = document.createElement('span');
                label.classList.add('current-week-label');
                label.textContent = 'SEMANA ATUAL';
                currentWeekColumn.prepend(label); // Adiciona o rótulo antes do título da coluna
            }
        }
    }

    // --- Chamadas iniciais ao carregar a página ---
    applyLinksToButtons(); // Aplica os links aos botões
    highlightCurrentWeek(); // Destaca a semana atual
});
