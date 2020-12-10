<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <a class="button is-white" @click="$router.back()">
        </a>
      </div>
      <div class="level-item">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li v-for="(item, i) in crumbs" :key="i" class="inline">
              <nuxt-link :to="item.path">
                {{ item.name }}
              </nuxt-link> >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      const crumbs = []
      this.$route.matched.map((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        crumb.name = '' + (item.name || item.path)

        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: '' + item.name.replace(/-[^-]*$/, '')
            })


            crumb.path = this.$route.path
            crumb.name = '' + this.$route.params.slug, [
              crumb.path.match(/[^/]*$/)[0]
            ]


          }
          crumb.classes = 'is-active'
        }
        console.log(crumb);
  if(this.$route.params.slug != null){
        crumbs.push(crumb)
  }

      })




    console.log(crumbs);
      return crumbs
    }
  }
}
</script>
<style>

</style>
