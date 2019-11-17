<template>
  <div>
    <VueLoading />
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner />
      <Header />
    </div>
<Navbar />
    <div>
      <p>Current page: {{ currentPage }}</p>
      <v-pagination
        v-model="currentPage"
        :page-count="totalPages"
        :classes="bootstrapPaginationClasses"
        :labels="paginationAnchorTexts"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import vPagination from "vue-plain-pagination";

export default {
  name: "Pagination",
  components: { vPagination },
  data() {
    return {
      currentPage: 1,
      totalPages: 30,
      bootstrapPaginationClasses: {
        ul: "pagination",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link"
      },
      paginationAnchorTexts: {
        first: "İlk",
        prev: "<<",
        next: ">>",
        last: "Son"
      }
    };
  }
};
</script>