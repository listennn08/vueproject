<template>
    <div>
        <div class="custom-control custom-checkbox">
            <input
                type="checkbox"
                class="custom-control-input"
                :id="getID"
                :checked="item.done"
                @change="handleChange"/>
            <label :for="getID" class="custom-control-label"></label>
            <label :for="getID">{{ item.content }}</label>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        computed: {
            getID() {
                // 為了解決 input 與 label 對應的 id
                // 暫時解法.. 不知道有沒有更簡單的方法哩..
                // 使用 ES6 String Template
                // ES5: "custom_" + Math.floor(Math.random() * 9999).toString();
                return `cumton_${Math.floor(Math.random() * 9999)}`;
            }
        },
        methods: {
            handleChange($event) {
                this.$emit('toggleTodo', {
                    key: this.item.key,
                    checked: $event.target.checked
                });
            }
        }
    }
</script>
