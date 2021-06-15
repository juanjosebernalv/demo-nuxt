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
          <h1>Documento de Identificación</h1>
        </div>
        <form
          class="mb-4 md:flex md:flex-wrap md:justify-between"
          action="/"
          method="post"
        >
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label" for="first_name"
              >Tipo de Documento</label
            >
            <select class="field">
              <option>Seleccione el Tipo de Documento</option>
              <option>Cedula de Ciudadania</option>
              <option>Tarjeta de Identidad</option>
              <option>Otras Opciones...</option>
            </select>
          </div>
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label md:ml-2" for="last_name"
              >Número de Documento</label
            >
            <input
              id="last_name"
              name="last_name"
              class="field md:ml-2"
              type="text"
            />
          </div>
          <div class="field-group mb-4 md:w-1/3">
            <label class="field-label md:ml-2" for="last_name"
              >Día de Expedición</label
            >
            <input
              id="last_name"
              name="last_name"
              class="field"
              type="number"
            />
          </div>
          <div class="field-group mb-4 md:w-1/3 md:px-8">
            <label class="field-label md:ml-2" for="last_name"
              >Mes de Expedición</label
            >
            <input
              id="last_name"
              name="last_name"
              class="field"
              type="number"
            />
          </div>
          <div class="field-group mb-4 md:w-1/3">
            <label class="field-label md:ml-2" for="last_name"
              >Año de Expedición</label
            >
            <input
              id="last_name"
              name="last_name"
              class="field"
              type="number"
            />
          </div>
          <div class="field-group mb-4 md:w-1/2">
            <label class="field-label" for="first_name"
              >Pais de Expedición</label
            >
            <select class="field">
              <option>Seleccione el País de Expedición</option>
              <option>Colombia</option>
              <option>Curazao</option>
              <option>Otras Opciones...</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <NuxtLink to="/">
        <button class="btn-rounded-blue">
          <font-awesome-icon
            :icon="['fa', 'chevron-left']"
            class="text-base mr-2 self-center"
          />
          Paso Anterior
        </button>
      </NuxtLink>
      <NuxtLink to="/id/user">
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
