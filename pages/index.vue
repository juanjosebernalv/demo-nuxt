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
      <Title title="TÉRMINOS Y CONDICIONES" :icon="['fas', 'file-contract']" />
      <ul class="text-justify pb-12 px-10 list-inside">
        <ListItem
          :content="'A LA INFORMACIÓN REGISTRADA POR USTED EN EL SISTEMA, LA FISCALÍA GENERAL DE LA NACIÓN LE DARÁ TRATAMIENTO SEGÚN LO ESTABLECIDO EN LA LEY DE PROTECCIÓN DE DATOS PERSONALES (LEY 1581 DE 2012).'"
        />
        <ListItem
          :content="'LOS SERVICIOS QUE BRINDA LA FISCALÍA GENERAL DE LA NACIÓN SON GRATUITOS. PARA PRESENTAR UNA DENUNCIA NO SE REQUIERE LA ASISTENCIA DE ABOGADO.'"
        />
        <ListItem
          :content="'EXONERACIÓN DEL DEBER DE DENUNCIAR: NADIE ESTÁ OBLIGADO A FORMULAR DENUNCIA CONTRA SÍ MISMO, CONTRA SU CÓNYUGE, COMPAÑERO O COMPAÑERA PERMANENTE O CONTRA SUS PARIENTES DENTRO DEL CUARTO GRADO DE CONSANGUINIDAD O CIVIL, O SEGUNDO DE AFINIDAD, NI A DENUNCIAR CUANDO MEDIE EL SECRETO PROFESIONAL. (ART. 68, LEY 906 DE 2004).'"
        />
        <ListItem
          :content="'RECUERDE QUE AL PRESENTAR UNA DENUNCIA, USTED SE ENCUENTRA BAJO LA GRAVEDAD DE JURAMENTO. EN CASO DE FALTAR A LA VERDAD, PODRÍA INCURRIR EN LA COMISIÓN DE LA CONDUCTA TIPIFICADA EN EL ART. 69, LEY 906 DE 2004.'"
        />
        <ListItem
          :content="'AL DAR CLICK EN EL BOTÓN SIGUIENTE PASO, USTED DECLARA QUE ACEPTA Y ENTIENDE LA INFORMACIÓN AQUÍ EXPUESTA.'"
        />
      </ul>

      <Title
        title="¿QUÉ DEBE TENER EN CUENTA PARA USAR EL SISTEMA?"
        :icon="['fas', 'laptop']"
      />
      <ul class="list-inside text-justify pb-12 px-10">
        <ListItem
          :content="'REGISTRE TODA LA INFORMACIÓN REQUERIDA. LOS CAMPOS RESALTADOS EN COLOR ROJO Y/O CON ASTERISCO (*) SON OBLIGATORIOS.'"
        />
        <ListItem
          :content="'PARA DESPLAZARSE ENTRE LAS PANTALLAS UTILICE LOS BOTONES SIGUIENTE PASO Y PASO ANTERIOR.'"
        />
        <ListItem
          :content="'EN CASO QUE LO REQUIERA, SELECCIONE EL BOTÓN AYUDA (?) UBICADO EN LA PARTE SUPERIOR DERECHA DE LA PANTALLA.'"
        />
        <ListItem
          :content="'EN LOS CAMPOS CON LISTAS DESPLEGABLES, USTED PODRÁ ESCRIBIR LAS PRIMERAS LETRAS DE LA PALABRA QUE ESTÁ BUSCANDO, PARA QUE EL SISTEMA MUESTRE LAS OPCIONES QUE COINCIDEN CON SU BÚSQUEDA.'"
        />
        <ListItem
          :content="'ANTES DE DAR CLIC EN EL BOTÓN FINALIZAR REVISE EL RESUMEN, EL CUAL CONTIENE TODA LA INFORMACIÓN REGISTRADA POR USTED. PARA REALIZAR ALGUNA MODIFICACIÓN, REGRESE HASTA LA SECCIÓN CORRESPONDIENTE UTILIZANDO EL BOTÓN PASO ANTERIOR.'"
        />
      </ul>
      <Title
        title="¿QUÉ PASA DESPUÉS DE FINALIZAR EL REGISTRO DE LA INFORMACIÓN?"
        :icon="['fas', 'clock']"
      />
      <ul class="list-inside text-justify pb-12 px-10">
        <ListItem
          :content="'UNA VEZ SE DA CLIC EN EL BOTÓN FINALIZAR, EL SISTEMA CREARÁ LA NOTICIA CRIMINAL Y LE ASIGNARÁ UN NÚMERO ÚNICO DE 21 DÍGITOS, EL CUAL SERÁ NOTIFICADO AL CORREO ELECTRÓNICO QUE USTED SUMINISTRÓ. ASÍ MISMO, USTED PODRÁ DESCARGAR COPIA DE SU DENUNCIA EN FORMATO PDF.'"
        />
        <ListItem
          :content="'CON EL NÚMERO ÚNICO DE NOTICIA CRIMINAL, USTED PODRÁ CONSULTAR EL ESTADO DE SU DENUNCIA (ACTIVO O INACTIVO) Y LOS DATOS DE CONTACTO DEL FISCAL ASIGNADO A SU CASO, LLAMANDO A LA LÍNEA 122 O INGRESANDO A LA PÁGINA WWW.FISCALIA.GOV.CO, OPCIÓN CONSULTE SU DENUNCIA.'"
        />
      </ul>
    </div>
    <div class="flex items-center justify-center">
      <!-- <NuxtLink to="/user">
        <button class="btn-rounded-blue">
          <font-awesome-icon
            :icon="['fa', 'chevron-left']"
            class="text-base mr-2 self-center"
          />
          Paso Anterior
        </button>
      </NuxtLink> -->
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
import ListItem from '@/components/ListItem.vue'
import Title from '@/components/Title.vue'

export default {
  components: {
    ListItem,
    Title,
  },
}
</script>

<style>
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
