<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="nav-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collaspe" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Project name</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <form class="navbar-form navbar-right">
          <slot name="right">
          </slot>
        </form>
      </div>
    </div>
  </nav>
</template>
