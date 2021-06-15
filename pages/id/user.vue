<template>
  <div>
    <Title title="DATOS DE LA PERSONA" :icon="['fa', 'user']" />
    <div class="flex w-full container mb-20">
      <div class="w-full bg-white rounded shadow-lg p-8 mx-4 md:mx-auto">
        <div
          class="
            h-20
            border-b-4 border-primary
            flex flex-wrap
            content-center
            justify-start
            font-bold
            uppercase
            mb-8
            bg-pastel
            rounded
            px-6
            text-primary
          "
        >
          <font-awesome-icon
            :icon="['fa', 'id-card']"
            class="text-2xl mr-6 self-center text-primary"
          />
          <h1>Nombres</h1>
        </div>
        <form
          class="mb-4 md:flex md:flex-wrap md:justify-between"
          action="/"
          method="post"
        >
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label" for="first_name">Primer Nombre</label>
            <input
              id="first_name"
              name="first_name"
              class="field md:mr-2"
              type="text"
            />
          </div>
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label md:ml-2" for="last_name"
              >Otros Nombres</label
            >
            <input
              id="last_name"
              name="last_name"
              class="field md:ml-2"
              type="text"
            />
          </div>
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label" for="first_name">Primer Apellido</label>
            <input
              id="first_name"
              name="first_name"
              class="field md:mr-2"
              type="text"
            />
          </div>
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label md:ml-2" for="last_name"
              >Otros Apellidos</label
            >
            <input
              id="last_name"
              name="last_name"
              class="field md:ml-2"
              type="text"
            />
          </div>
          <!-- <div class="field-group mb-4 md:w-full">
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
          </div> -->
          <!-- <button class="btn btn-teal mx-auto" type="submit">
            Create Account
          </button> -->
        </form>
        <!-- <a class="link link-grey w-full text-center" href="/login"
          >Already have an account?</a
        > -->
      </div>
    </div>
    <div class="flex items-center justify-center">
      <NuxtLink to="/id/document">
        <button class="btn-rounded-blue">
          <font-awesome-icon
            :icon="['fa', 'chevron-left']"
            class="text-base mr-2 self-center"
          />
          Paso Anterior
        </button>
      </NuxtLink>
      <NuxtLink to="/">
        <button class="btn-blue">
          Siguiente Paso
          <font-awesome-icon
            :icon="['fa', 'chevron-right']"
            class="text-base ml-2 self-center"
          />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
