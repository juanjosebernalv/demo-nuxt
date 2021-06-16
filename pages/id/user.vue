<template>
  <div>
    <Title title="DATOS DE LA PERSONA" :icon="['fa', 'user']" />
    <div class="flex w-full container mb-20">
      <div class="w-full bg-white rounded shadow-lg p-8 mx-4 md:mx-auto">
        <!-- <div
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
        </div> -->
        <form action="/" method="post">
          <div
            v-for="section in sections"
            :key="'section-' + section.title"
            class="flex flex-col"
          >
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
              <h1>{{ section.title }}</h1>
            </div>
            <div class="flex flex-col md:grid md:grid-cols-3">
              <div
                v-for="item in section.items"
                :key="'div-' + item.jsonField + item.order"
                class="field-group mb-4"
              >
                <label class="field-label" :for="item.jsonField">{{
                  item.label
                }}</label>
                <!-- <input
                  :id="item.jsonField"
                  :name="item.jsonField"
                  class="field md:mr-2"
                  type="text"
                /> -->
                <SmartInput
                  :id="item.jsonField"
                  :name="item.jsonField"
                  :type="item.dataType"
                />
              </div>
            </div>
          </div>

          <!-- <div class="field-group mb-4 md:w-1/2">
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
          </div> -->
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

    <!-- {{
        todos
      }}
      $store
      <pre>

      {{ sections }}
      </pre> -->
    <!-- <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
      </li>
    </ul> -->
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
<script>
import { mapMutations } from 'vuex'

import SmartInput from '@/components/SmartInput.vue'

export default {
  components: {
    SmartInput,
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
    sections() {
      const abcs =
        this.$store.state.abcs.persons[0].nextForm.criminalNews.factDetails.abcs
      const sectionsArray = [
        ...new Set(
          abcs
            .filter((person) => person.jsonObject === 'persons')
            .map((group) => group.GROUP_label)
        ),
      ]
      const filterArray = sectionsArray.map((section) => ({
        title: section,
        items: [...abcs.filter((item) => item.GROUP_label === section)],
      }))
      return filterArray
    },
  },
  methods: {
    addTodo(event) {
      this.$store.commit('todos/add', event.target.value)
      event.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
    removeTodo(todo) {
      this.$store.commit('todos/remove', todo)
    },
    getUserData() {},
  },
}
</script>
