<template>
    <div class="vld-parent" style="bacground-color:red;">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"
        color="orange"
        background-color="#ECFB8B"
        opacity="1"></loading>
    </div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        data() {
            return {
                isLoading: true,
                fullPage: true
            }
        },
        components: {
            Loading
        },created(){
            setTimeout(() => {
                  this.isLoading = false
                },3000)
        }
    }
</script>