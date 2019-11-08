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
    
}
</script>
<style scoped>
.acilisEkrani{
        background-color: #fff;
        position: fixed;
        z-index: 2147483647;
        width: 100%;
        height: 100%;
        
}
#gifEkran {
    background-color: #fff;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1.0E+29;
}
#durum {
    background-image: url(../assets/okuoku.gif);
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    width: 100%;
}
.durum {
    font-size: 12px;
    color: #fff;
    font-weight: bolder;
    padding: 3px;
}

</style>
