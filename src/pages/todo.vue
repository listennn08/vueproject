<template>
    <div class="container">
        <h1>vue & vuex Todo List example</h1>
        <hr/>
        <div class="row">
            <div class="input-group col-md-4">
                <input
                    type="text"
                    placeholder="add Todo.."
                    v-model="newTodo"
                    @keyup.enter="actionAddTodo"/>
                <span class="input-group-btn">
                    <button class="btn btn-success" @click="actionAddTodo">
                        <font-awesome-icon icon="plus"/>
                    </button>
                </span>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2>Todo List:</h2>
                <ol>
                    <todoItem v-for="(item, index) in todoList" :item="item" :key="index"/>
                </ol>
                <!--
                    <li v-for="(item, index) in todoList" :key="index">
                        <label>
                            <input
                                type="checkbox"
                                :checked="item.done"
                                @change="toggleTodo( item.key )"/>
                                {{ item.content}}
                        </label>
                        <button
                            class="btn btn-xs btn-danger"
                            @click="deleteTodo( item.key )">
                            <font-awesome-icon icon="trash"/>
                        </button>
                    </li> -->
            </div>
            <div class="col-md-6">
                <h2>Done List:</h2>
                <ol>
                    <li v-for="(item, index) in doneList" :key="index">
                    <!-- <label>
                            <input
                                type="checkbox"
                                :checked="item.done"
                                @change="toggleTodo(
                            item.key )"/>
                            {{ item.content }}
                        </label> -->
                        <customCheckbox
                            :item="item"
                            @toggleTodo="toggleTodo"/>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import todoItem from '../components/todoItem.vue';
    import customCheckbox from '../components/customCheckbox.vue'
    export default {
        components: {
            todoItem,
            customCheckbox
        },
        data () {
            return {
                newTodo: ''
            }
        },
        computed:{
            ...mapGetters({
                todoList: 'getTodo',
                doneList: 'getDone'
            })
        },
        methods: {
            ...mapActions(['toggleTodo', 'deleteTodo']),
            actionAddTodo() {
                this
                    .$store
                    .dispatch('addTodo', this.newTodo);
                this.newTodo = '';
            }
        }
    }
</script>
