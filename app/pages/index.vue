<template>
  <section class="h-full">
    <div class="container mx-auto h-full">
      <div class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8 h-full pt-4 pb-12">
        <div class="flex flex-col gap-8 order-2 xl:order-1 xl:max-w-[55%]">
          <Content />
          <Social />
          <Stats />
        </div>

        <div class="order-1 xl:order-2">
          <Photo />
        </div>
      </div>
    </div>
  </section>
</template>