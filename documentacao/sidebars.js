// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    // páginas de topo
    { type: 'doc', id: 'intro', label: 'Início' },
    { type: 'doc', id: 'index', label: 'Apresentação' },
    { type: 'doc', id: 'resumo', label: 'Resumo' },

    // categorias
    {
      type: 'category',
      label: 'Fundamentação Teórica',
      collapsible: true,
      collapsed: false,
      items: [
        'fundamentacao/objetoestudo',
        'fundamentacao/deteccaoanomalias',
      ],
    },
    {
      type: 'category',
      label: 'Metodologia',
      collapsible: true,
      collapsed: false,
      items: [
        'metodologia/populacaoamostra',
        'metodologia/modelos',
      ],
    },
    {
      type: 'category',
      label: 'Resultados e Discussão',
      collapsible: true,
      collapsed: false,
      items: [
        'resultados/analisepublicas',
        'resultados/comparativomodelos',
      ],
    },

    // conclusão
    { type: 'doc', id: 'conclusao', label: 'Conclusão' },

    // link para o PDF
    {
      type: 'link',
      label: '📄 Baixar Relatório (PDF)',
      href: 'https://github.com/ciia-educacao/documentacao/raw/main/documentacao/docs/RelatorioPDAF.pdf',
    },
  ],
};

export default sidebars;
