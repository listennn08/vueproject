<template>

    <div>
        <!--
            router-link 就像
            <a href="/c2f">CtoF</a>
            :to 裡面是物件形式，描述要轉跳的目的與需要帶的參數
            目的：考可以用 path 或 name
            在 main.js router 我們是這樣設定的：
            {
                path: '/hello',
                name: 'hello',
                component: Hello
            },
        -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <a href="#" class="navbar-brand">Matt</a>
            <ul id="expandNav" class="navbar-nav mr-2">
                <li class="nav-item active">
                    <router-link :to="{name: 'hello'}">首頁</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'c2f'}">溫度轉換</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'learnComponent'}">Component</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'count'}">計數器</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'calculator'}">計算機</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'todo'}">TodoList</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'countdown'}">倒數計時器</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'convert'}">大寫金額轉換</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'rateConvert'}">匯率試算</router-link>
                </li>
                <li class="nav-item active">
                    <router-link :to="{name: 'Taiwan'}">天氣地圖</router-link>
                </li>
                <!--<li class="nav-item active">
                    <router-link :to="{name: 'UnloadPage'}">UnloadPage</router-link>
                </li>-->
            </ul>
            <ul id="dropdownNav" class="nav nav-pills">
                <li class="nav-item dropdown">
                    <button class="btn btn-outline-success dropdown-toggle" data-toggle="dropdown"><font-awesome-icon icon="bars"/></button>
                    <div class="dropdown-menu dropdown-menu-right text-center">
                        <router-link class="dropdown-item" :to="{name: 'c2f'}">溫度轉換</router-link>
                        <router-link class="dropdown-item" :to="{name: 'learnComponent'}">Component</router-link>
                        <router-link class="dropdown-item" :to="{name: 'count'}">計數器</router-link>
                        <router-link class="dropdown-item" :to="{name: 'calculator'}">計算機</router-link>
                        <router-link class="dropdown-item" :to="{name: 'todo'}">TodoList</router-link>
                        <router-link class="dropdown-item" :to="{name: 'countdown'}">倒數計時器</router-link>
                        <router-link class="dropdown-item" :to="{name: 'rateConvert'}">匯率試算</router-link>
                        <router-link class="dropdown-item" :to="{name: 'Taiwan'}">天氣地圖</router-link>
                    </div>
                </li>
            </ul>
        </nav>

        <!-- 轉跳後所載入的 component 最後會顯示在此 -->
        <router-view></router-view>

    </div>
</template>
<style lang="scss">
    @import '~bootstrap/scss/bootstrap.scss';
</style>
<style>
    nav ul li {
        display: inline;
        margin: 5px;
        padding: 2px;
    }
    body {
        letter-spacing: 1px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "微軟正黑體", "Microsoft JhengHei";
    }

    @media (min-width: 996px) {
        #dropdownNav {
            display: none;
        }
    }
    @media (max-width: 996px) {
        #expandNav {
            display: none;
        }
        #dorpdownNav {
            display: inline;
        }
    }
</style>
