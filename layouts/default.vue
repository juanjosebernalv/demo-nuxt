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
      <p class="">Centro de Contacto</p>
    </div>
    <div class="pt-20">
      <Nuxt />
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
