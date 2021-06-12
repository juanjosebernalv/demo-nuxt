<template>
  <div class="w-screen text-justify container">
    <div
      class="
        max-h-full
        overflow-x-hidden
        top-0
        scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100
      "
    >
      <div
        class="
          sticky
          top-0
          h-20
          bg-primary
          flex-wrap
          content-center
          justify-center
          font-bold
          text-white text-sm
          md:text-lg
          flex flex-col
          md:flex-row
          shadow-md
          px-8
          border-primary border
        "
      >
        <font-awesome-icon
          :icon="['fas', 'file-contract']"
          class="text-2xl mr-2 self-center"
        />
        <p>TÉRMINOS Y CONDICIONES</p>
      </div>
      <ul class="text-justify py-12 px-10 list-inside">
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary animate-bounce"
          />
          A LA INFORMACIÓN REGISTRADA POR USTED EN EL SISTEMA, LA FISCALÍA
          GENERAL DE LA NACIÓN LE DARÁ TRATAMIENTO SEGÚN LO ESTABLECIDO EN LA
          LEY DE PROTECCIÓN DE DATOS PERSONALES (LEY 1581 DE 2012).
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          LOS SERVICIOS QUE BRINDA LA FISCALÍA GENERAL DE LA NACIÓN SON
          GRATUITOS. PARA PRESENTAR UNA DENUNCIA NO SE REQUIERE LA ASISTENCIA DE
          ABOGADO.
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          EXONERACIÓN DEL DEBER DE DENUNCIAR: NADIE ESTÁ OBLIGADO A FORMULAR
          DENUNCIA CONTRA SÍ MISMO, CONTRA SU CÓNYUGE, COMPAÑERO O COMPAÑERA
          PERMANENTE O CONTRA SUS PARIENTES DENTRO DEL CUARTO GRADO DE
          CONSANGUINIDAD O CIVIL, O SEGUNDO DE AFINIDAD, NI A DENUNCIAR CUANDO
          MEDIE EL SECRETO PROFESIONAL. (ART. 68, LEY 906 DE 2004).
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          RECUERDE QUE AL PRESENTAR UNA DENUNCIA, USTED SE ENCUENTRA BAJO LA
          GRAVEDAD DE JURAMENTO. EN CASO DE FALTAR A LA VERDAD, PODRÍA INCURRIR
          EN LA COMISIÓN DE LA CONDUCTA TIPIFICADA EN EL ART. 69, LEY 906 DE
          2004.
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          AL DAR CLICK EN EL BOTÓN SIGUIENTE PASO, USTED DECLARA QUE ACEPTA Y
          ENTIENDE LA INFORMACIÓN AQUÍ EXPUESTA.
        </li>
      </ul>

      <div
        class="
          sticky
          top-0
          h-20
          bg-primary
          flex-wrap
          content-center
          justify-center
          font-bold
          text-white text-sm
          md:text-lg
          flex flex-col
          md:flex-row
          px-8
        "
      >
        <font-awesome-icon
          :icon="['fas', 'laptop']"
          class="text-2xl mr-2 self-center"
        />
        <p>¿QUÉ DEBE TENER EN CUENTA PARA USAR EL SISTEMA?</p>
      </div>
      <ul class="list-inside text-justify py-12 px-10">
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          REGISTRE TODA LA INFORMACIÓN REQUERIDA. LOS CAMPOS RESALTADOS EN COLOR
          ROJO Y/O CON ASTERISCO (*) SON OBLIGATORIOS.
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          PARA DESPLAZARSE ENTRE LAS PANTALLAS UTILICE LOS BOTONES SIGUIENTE
          PASO Y PASO ANTERIOR.
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          EN CASO QUE LO REQUIERA, SELECCIONE EL BOTÓN AYUDA (?) UBICADO EN LA
          PARTE SUPERIOR DERECHA DE LA PANTALLA.
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          EN LOS CAMPOS CON LISTAS DESPLEGABLES, USTED PODRÁ ESCRIBIR LAS
          PRIMERAS LETRAS DE LA PALABRA QUE ESTÁ BUSCANDO, PARA QUE EL SISTEMA
          MUESTRE LAS OPCIONES QUE COINCIDEN CON SU BÚSQUEDA.
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          ANTES DE DAR CLIC EN EL BOTÓN FINALIZAR REVISE EL RESUMEN, EL CUAL
          CONTIENE TODA LA INFORMACIÓN REGISTRADA POR USTED. PARA REALIZAR
          ALGUNA MODIFICACIÓN, REGRESE HASTA LA SECCIÓN CORRESPONDIENTE
          UTILIZANDO EL BOTÓN PASO ANTERIOR.
        </li>
      </ul>
      <div
        class="
          sticky
          top-0
          h-20
          bg-primary
          flex-wrap
          content-center
          justify-center
          font-bold
          text-white text-sm
          md:text-lg
          flex flex-col
          md:flex-row
          px-8
        "
      >
        <font-awesome-icon
          :icon="['fas', 'clock']"
          class="text-2xl mr-2 self-center"
        />
        <p>¿QUÉ PASA DESPUÉS DE FINALIZAR EL REGISTRO DE LA INFORMACIÓN?</p>
      </div>
      <ul class="list-inside text-justify py-12 px-10">
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          UNA VEZ SE DA CLIC EN EL BOTÓN FINALIZAR, EL SISTEMA CREARÁ LA NOTICIA
          CRIMINAL Y LE ASIGNARÁ UN NÚMERO ÚNICO DE 21 DÍGITOS, EL CUAL SERÁ
          NOTIFICADO AL CORREO ELECTRÓNICO QUE USTED SUMINISTRÓ. ASÍ MISMO,
          USTED PODRÁ DESCARGAR COPIA DE SU DENUNCIA EN FORMATO PDF.
        </li>
        <li class="pt-8">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-base mr-2 self-center text-primary"
          />
          CON EL NÚMERO ÚNICO DE NOTICIA CRIMINAL, USTED PODRÁ CONSULTAR EL
          ESTADO DE SU DENUNCIA (ACTIVO O INACTIVO) Y LOS DATOS DE CONTACTO DEL
          FISCAL ASIGNADO A SU CASO, LLAMANDO A LA LÍNEA 122 O INGRESANDO A LA
          PÁGINA WWW.FISCALIA.GOV.CO, OPCIÓN CONSULTE SU DENUNCIA.
        </li>
      </ul>
    </div>
    <NuxtLink to="/user">Empezar</NuxtLink>
    <div>
      <!-- <Logo /> -->
      <!-- <h1 class="title">responsive-contact-center</h1> -->
      <!-- <p class="text-red-900">prueba</p> -->
      <!-- <div class="text-red-900">prueba</div> -->
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
