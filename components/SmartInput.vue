<template>
  <div>
    <input
      v-if="type === 'number'"
      :id="id"
      :name="name"
      class="field"
      type="number"
    />
    <input
      v-else-if="type === 'string'"
      :id="id"
      :name="name"
      class="field"
      type="text"
    />
    <input v-else :id="id" :name="name" class="field" type="text" />
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
