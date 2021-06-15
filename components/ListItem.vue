<template>
  <li class="pt-8">
    <font-awesome-icon
      :icon="['far', 'check-circle']"
      class="text-base mr-2 self-center text-primary animate-bounce"
    />
    {{ content }}
  </li>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
