document.addEventListener('DOMContentLoaded', function() {
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
            }
        }
    };

    // Mapeamento das datas de início de cada "semana" para o ID da coluna correspondente.
    // É CRÍTICO MANTER ESTE OBJETO ATUALIZADO COM OS PRÓXIMOS MESES E ANOS.
    // As datas são o primeiro dia da semana de referência para a coluna.
    const weekStartDatesMapping = {
        // MUITO IMPORTANTE: Mapeie 30 de Junho para a semana1 de julho!
        "2025-06-30": { id: "semana1", month: "julho" }, // A semana que começa em 30 de junho APONTA PARA OS LINKS DE JULHO/SEMANA1

        // As semanas de Julho continuam a partir de 07/07
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

    // ... (o restante do seu código JavaScript permanece EXATAMENTE o mesmo) ...

    const allButtons = document.querySelectorAll('.button');
    const legendItems = document.querySelectorAll('.legend-item');
    const showAllButton = document.querySelector('.show-all-button');
    const filterMessage = document.getElementById('filter-message');

    function applyLinksToButtons() {
        const today = new Date();
        const targetYear = today.getFullYear().toString();
        // Usa Intl.DateTimeFormat para obter o nome do mês em minúsculas (ex: "julho")
        // IMPORTANTE: Esta linha agora pode ser "enganada" pelo weekStartDatesMapping
        const targetMonthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(today).toLowerCase();

        allButtons.forEach(button => {
            const week = button.dataset.week;
            const type = button.dataset.type;

            if (!button.dataset.originalText) {
                button.dataset.originalText = button.textContent;
            }

            let foundLink = null;
            // AQUI ESTÁ A MUDANÇA: Usamos a lógica de highlightCurrentWeek para determinar o mês e semana efetivos
            // que devem ser usados para buscar o link.
            const { currentWeekColumnId, effectiveMonthForLinks } = getCurrentWeekAndMonthForLinks();

            // Se o botão for da semana atual (30/06 a 04/07), ele deve buscar os links de "julho" e "semana1"
            if (week === currentWeekColumnId && effectiveMonthForLinks) {
                if (menuLinks[targetYear] && menuLinks[targetYear][effectiveMonthForLinks] && menuLinks[targetYear][effectiveMonthForLinks][week]) {
                    const weekLinks = menuLinks[targetYear][effectiveMonthForLinks][week];

                    if (weekLinks[type]) {
                        foundLink = weekLinks[type];
                    } else if (type.startsWith('fundamental')) {
                        for (const key in weekLinks) {
                            if (key.startsWith(type) && weekLinks[key]) {
                                foundLink = weekLinks[key];
                                break;
                            }
                        }
                    }
                }
            } else { // Para as outras semanas, continua buscando pelo mês da data atual
                if (menuLinks[targetYear] && menuLinks[targetYear][targetMonthName] && menuLinks[targetYear][targetMonthName][week]) {
                    const weekLinks = menuLinks[targetYear][targetMonthName][week];

                    if (weekLinks[type]) {
                        foundLink = weekLinks[type];
                    } else if (type.startsWith('fundamental')) {
                        for (const key in weekLinks) {
                            if (key.startsWith(type) && weekLinks[key]) {
                                foundLink = weekLinks[key];
                                break;
                            }
                        }
                    }
                }
            }

            const isValidLink = foundLink && foundLink.trim() !== '' && foundLink.startsWith('http') && !foundLink.includes('SUA_ID_DO_DOCUMENTO');

            if (isValidLink) {
                button.href = foundLink;
                button.style.pointerEvents = '';
                button.style.opacity = '1';
                button.title = button.dataset.ariaLabel || button.dataset.originalText;
                button.textContent = button.dataset.originalText;
                button.classList.remove('no-link');
                button.removeAttribute('tabindex');
            } else {
                button.href = "#";
                button.style.pointerEvents = 'none';
                button.style.opacity = '0.7';
                button.title = "Cardápio não disponível ou em breve.";
                button.textContent = "Em breve!";
                button.classList.add('no-link');
                button.setAttribute('tabindex', '-1');
            }
        });
    }

    /**
     * Nova função para determinar a semana e o mês de busca de links.
     * Isso desacopla a busca de links do mês estrito da data atual,
     * permitindo que 30 de junho busque em "julho".
     */
    function getCurrentWeekAndMonthForLinks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let currentWeekColumnId = '';
        let effectiveMonthForLinks = ''; // Novo: qual mês no menuLinks devemos usar

        for (const dateString in weekStartDatesMapping) {
            const { id: columnId, month: mappedMonth } = weekStartDatesMapping[dateString];
            const startDate = new Date(dateString + "T00:00:00");

            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 4); // Semana de 5 dias úteis (Seg-Sex)

            if (today >= startDate && today <= endDate) {
                currentWeekColumnId = columnId;
                effectiveMonthForLinks = mappedMonth; // Usa o mês mapeado!
                break;
            }
        }
        return { currentWeekColumnId, effectiveMonthForLinks };
    }

    function highlightCurrentWeek() {
        const { currentWeekColumnId } = getCurrentWeekAndMonthForLinks(); // Reutiliza a nova função

        // Remove destaques anteriores
        document.querySelectorAll('.button-column').forEach(col => {
            col.classList.remove('current-week');
            const label = col.querySelector('.current-week-label');
            if (label) label.remove();
        });

        if (currentWeekColumnId) {
            const currentWeekColumn = document.getElementById(currentWeekColumnId);
            if (currentWeekColumn) {
                currentWeekColumn.classList.add('current-week');
                const label = document.createElement('span');
                label.classList.add('current-week-label');
                label.textContent = 'SEMANA ATUAL';
                currentWeekColumn.prepend(label);
            }
        }
    }

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

        if (filterType === 'all') {
            filterMessage.style.opacity = '0';
            filterMessage.textContent = '';
        } else {
            filterMessage.textContent = `Filtrando por: ${filterName}`;
            filterMessage.style.opacity = '1';
        }
    }

    legendItems.forEach(item => {
        item.addEventListener('click', function() {
            legendItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
            const filterType = this.dataset.filter;
            const filterName = this.textContent;
            filterButtons(filterType, filterName);
        });
        item.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });

    showAllButton.addEventListener('click', function() {
        legendItems.forEach(li => li.classList.remove('active'));
        filterButtons('all');
    });
    showAllButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.click();
        }
    });

    // --- Chamadas iniciais ao carregar a página ---
    applyLinksToButtons();
    highlightCurrentWeek();
    filterButtons('all');
    filterMessage.style.opacity = '0';
});
