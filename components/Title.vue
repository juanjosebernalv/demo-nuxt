<template>
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
      <font-awesome-icon :icon="icon" class="text-2xl mr-2 self-center" />
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    icon: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>
