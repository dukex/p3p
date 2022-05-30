<script>
  export let data;
</script>

<div class="bg-white">
  <div class="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="/partidos" class="mr-2 text-sm font-medium text-gray-900"> Partidos </a>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <a
              href="/partidos/{data.IdentificacaoParlamentar.SiglaPartidoParlamentar}"
              class="mr-2 text-sm font-medium text-gray-900"
              >{data.IdentificacaoParlamentar.SiglaPartidoParlamentar}
            </a>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a
            href="/partidos/{data.IdentificacaoParlamentar.SiglaPartidoParlamentar}/senador/{data.slug}"
            aria-current="page"
            class="font-medium text-gray-500 hover:text-gray-600">
            {data.IdentificacaoParlamentar.NomeParlamentar}
          </a>
        </li>
      </ol>
    </nav>

    <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <img
          src={data.IdentificacaoParlamentar.UrlFotoParlamentar}
          alt="Foto do {data.IdentificacaoParlamentar.FormaTratamento} {data.IdentificacaoParlamentar.NomeParlamentar}"
          class="w-full h-full object-center object-cover" />
      </div>
    </div>

    <div
      class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <hgroup class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1
          class="text-4xl font-semibold leading-normal mb-2 text-gray-800
font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {data.IdentificacaoParlamentar.NomeParlamentar}
        </h1>
        <h2 class="text-gray-400">
          ({data.IdentificacaoParlamentar.NomeCompletoParlamentar})
        </h2>
      </hgroup>

      <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">
              The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.
              Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway:
              &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.
            </p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Contato</h3>

          <div class="mt-4">
            <ul role="list" class="pl-4 list-disc text-sm space-y-2">
              <li class="text-gray-400">
                Email:
                <span class="text-gray-600">{data.IdentificacaoParlamentar.EmailParlamentar}</span>
              </li>

              {#each data.IdentificacaoParlamentar.Telefones.Telefone as telefone}
                <li class="text-gray-400">
                  Telefone:
                  <span class="text-gray-600">{telefone.NumeroTelefone}</span>
                </li>
              {/each}

              <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">
              The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription
              service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited
              release.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
