<template>
  <div>
    <div class="flex items-center h-screen w-full bg-teal-lighter">
      <div
        class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto"
      >
        <h1 class="block w-full text-center text-grey-darkest mb-6">Sign Up</h1>
        <form
          class="mb-4 md:flex md:flex-wrap md:justify-between"
          action="/"
          method="post"
        >
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label" for="first_name">First Name</label>
            <input
              id="first_name"
              name="first_name"
              class="field md:mr-2"
              type="text"
            />
          </div>
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label md:ml-2" for="last_name">Last Name</label>
            <input
              id="last_name"
              name="last_name"
              class="field md:ml-2"
              type="text"
            />
          </div>
          <div class="field-group mb-4 md:w-full">
            <label class="field-label" for="email">Email</label>
            <input id="email" name="email" class="field" type="email" />
          </div>
          <div class="field-group mb-6 md:w-full">
            <label class="field-label" for="password">Password</label>
            <input
              id="password"
              name="password"
              class="field"
              type="password"
            />
          </div>
          <button class="btn btn-teal mx-auto" type="submit">
            Create Account
          </button>
        </form>
        <a class="link link-grey w-full text-center" href="/login"
          >Already have an account?</a
        >
      </div>
      <NuxtLink to="/">Regresar</NuxtLink>
    </div>
  </div>
</template>
<style>
@tailwind base;

/* Here we can add any custom overrides */

.field {
  @apply border py-2 px-3 text-primary;
}

.field-label {
  @apply uppercase font-bold text-lg text-primary mb-2;
}

.field-group {
  @apply flex flex-col;
}

.btn {
  @apply block text-white uppercase text-lg p-4 rounded;
}

.btn-teal {
  @apply bg-gray-800;
}

.btn-teal:hover {
  @apply bg-yellow-800;
}

.link {
  @apply block no-underline text-sm;
}

.link-grey {
  @apply text-red-800;
}

.link-grey:hover {
  @apply text-red-500;
}

@tailwind utilities;
</style>
