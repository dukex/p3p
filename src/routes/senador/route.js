const URL = 'https://legis.senado.leg.br/dadosabertos/senador/lista/atual.json';

module.exports = {
  all: async () => {
    const fetch = await import('node-fetch');
    const { default: slugify } = await import('slugify');

    return fetch
      .default(URL)
      .then((res) => res.json())
      .then((data) => {
        const parlamentares = data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
        return parlamentares.map((parlamentar) => {
          const uid = slugify(parlamentar.IdentificacaoParlamentar.NomeParlamentar);
          console.log(`${parlamentar.IdentificacaoParlamentar.CodigoParlamentar}-${uid}`.toLowerCase())

          return Object.assign({}, parlamentar, {
            slug: `${parlamentar.IdentificacaoParlamentar.CodigoParlamentar}-${uid}`.toLowerCase(),
          });
        });
      });
  },
  permalink: '/senador/:slug',
  data: async ({ request }) => {
    console.log(request);

    return Object.assign(
      {},
      {
        title: 'ola mndo',
      },
      request,
    );
  },
};
