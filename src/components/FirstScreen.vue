<template>
    <div class="acilisEkrani" id="silinecek">
        <div id="gifEkran">
            <div id="durum">&nbsp;</div>
        </div>
    </div>
    
</template>

<script>
        setTimeout(function () { document.getElementById('silinecek').remove(); }, 3000);
    export default {
  name: "FirstScreen"
};
</script>
<style scoped>

</style>