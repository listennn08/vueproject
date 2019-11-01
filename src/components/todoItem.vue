<template>
  <div>
    <li>
      <div v-if="!updateMode">
        <label>
          <input
            type="checkbox"
            :checked="item.done"
            @change="toggleTodo( item.key )">
            {{ item.content }}
        </label>
        <button class="btn btn-xs btn-primary" @click="showEditMode">
          <font-awesome-icon icon="pencil-alt" />
        </button>
      </div>
      <div v-if="updateMode">
        <input
          class="edit-input"
          v-focus="updateMode"
          placeholder="edit Todo.."
          :value="item.content"
          @keyup.enter="actionEdit"
          @blur="cancelEdit"
          @keyup.esc="cancelEdit">
      </div>
    </li>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: {
    item: Object
  },
  data () {
    return {
      updateMode: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus();
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo',
      'updateTodo',
    ]),
    showEditMode () {
      this.updateMode = true;
    },
    actionEdit (e) {
      const userChange = e.target.value.trim();
      console.log('userChange', this.item.key, userChange);
      this.updateTodo({
        key: this.item.key,
        change: userChange,
      });
      this.updateMode = false;
    },
    cancelEdit (e) {
      e.target.value = this.item.title;
      this.updateMode = false;
    }
  }
}
</script>
<style>
  .edit-input {
    line-height: 1em;
  }
</style>
