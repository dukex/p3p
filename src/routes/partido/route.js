const URL = 'https://legis.senado.leg.br/dadosabertos/dados/ListaPartidos.xml';

module.exports = {
  all: async () => {
    const fetch = await import('node-fetch');
    const { XMLParser } = await import('fast-xml-parser');

    const options = {
      ignoreAttributes: false,
    };

    const parser = new XMLParser(options);

    return fetch
      .default(URL)
      .then((res) => res.text())
      .then((xml) => parser.parse(xml))
      .then((data) => {
        const partidos = data.ListaPartidos.Partidos.Partido;

        return partidos.map((p) => Object.assign({}, p, { slug: `${p.Sigla}-${p.Codigo}` }));
      });
  },
  permalink: ({ request }) => {
    return `/partido/${request.slug}`;
  },
  data: async ({ request }) => {
    console.log('Request', request);

    return {
      title: `${request.Sigla} - ${request.Nome} - Página do Partido - Senado`,
      description: `Pagina do partido ${request.Nome} no Senado Federal`,
      sigla: request.Sigla,
    };
  },
};
