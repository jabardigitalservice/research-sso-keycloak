<template>
  <div class="container">
    <div>
      <h1 class="title">
        Protected Page
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
