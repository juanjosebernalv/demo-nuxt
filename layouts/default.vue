<template>
  <div>
    <div
      class="
        bg-primary
        h-20
        fixed
        w-screen
        z-50
        shadow-md
        flex flex-row
        justify-between
        font-bold
        text-white text-sm
        md:text-lg
        items-center
        px-4
      "
    >
      <div class="w-36 rounded">
        <img
          class="object-scale-down w-full rounded"
          src="~/assets/images/logoFiscalia.jpg"
          alt="Logo Fiscalia"
        />
      </div>
      <!-- <img src="~/assets/images/logoFiscalia.jpg" alt="Logo Fiscalia" /> -->
      <p class="pr-0 md:pr-10">Centro de Contacto</p>
    </div>
    <div class="pt-20">
      <Nuxt />
    </div>
    <div class="bg-primary mt-16 w-full h-20 flex items-center justify-center">
      <p class="text-white text-lg font-semibold">Fiscalía 2021</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Lato', sans-serif;
}

html {
  font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

@tailwind base;

/* Here we can add any custom overrides */

.field {
  @apply border w-full md:w-11/12 py-2 px-3 text-primary border-primary rounded focus:outline-none focus:ring focus:border-blue-300;
}

.field-label {
  @apply uppercase font-bold text-xs text-primary mb-2 overflow-ellipsis overflow-hidden;
}

.field-group {
  @apply flex flex-col;
}

/* .btn {
  @apply block text-white uppercase text-lg p-4 rounded;
}

.btn-teal {
  @apply bg-gray-800;
}

.btn-teal:hover {
  @apply bg-yellow-800;
} */

.link {
  @apply block no-underline text-sm;
}

.link-grey {
  @apply text-red-800;
}

.link-grey:hover {
  @apply text-red-500;
}

.btn {
  @apply flex align-middle;
}
.btn-blue {
  @apply font-bold rounded-md text-sm text-primary;
  @apply bg-primary text-white h-12 px-4;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-rounded-blue {
  @apply font-bold rounded-md text-sm text-primary;
  @apply bg-white text-primary border border-primary h-12 px-4;
}
.btn-rounded-blue:hover {
  @apply bg-blue-700 text-white;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>
