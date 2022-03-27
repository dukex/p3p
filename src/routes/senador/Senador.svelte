<script>
  export let data;
</script>

<section class="relative py-16 bg-gray-300">
  <div class="container mx-auto px-4">
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div class="relative">
              <img
                alt="Foto do {data.IdentificacaoParlamentar.NomeCompletoParlamentar}"
                src={data.IdentificacaoParlamentar.UrlFotoParlamentar}
                class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                style="max-width: 150px;" />
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            {data.IdentificacaoParlamentar.NomeCompletoParlamentar}
          </h3>
          <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
            <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500" />
            Los Angeles, California
          </div>
          <div class="mb-2 text-gray-700 mt-10">
            <i class="fas fa-briefcase mr-2 text-lg text-gray-500" />Solution Manager - Creative Tim Officer
          </div>
          <div class="mb-2 text-gray-700">
            <i class="fas fa-university mr-2 text-lg text-gray-500" />University of Computer Science
          </div>
        </div>
        <div class="mt-10 py-10 border-t border-gray-300 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-9/12 px-4">
              <p class="mb-4 text-lg leading-relaxed text-gray-800">
                An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove
                structure. An artist of considerable range.
              </p>
              <a href="#pablo" class="font-normal text-pink-500">Show more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
