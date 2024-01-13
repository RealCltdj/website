<script setup>

</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <h1 class="display-4">Welcome to My Webpage</h1>
          <h3><i class="bi bi-link"></i> Links <i class="bi bi-link"></i></h3>
          <div class="vstack gap-2 w-25 m-auto">
            <a type="button" class="btn btn-danger" href="http://www.youtube.com/@cltdj"><font-awesome-icon :icon="['fa-brands', 'youtube']" /> YouTube</a>
            <a type="button" class="btn btn-success" href="https://github.com/RealCltdj"><font-awesome-icon :icon="['fa-brands', 'github']" /> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
