<template>
  <div>
    <div @click="show()">
      GÖKHAN
      <modal name="hello-world" :width="1350" :height="150" :pivotY="0.1">
        <div class="orta" style="margin-top: 15px;">
          <div class="logo col-md-3" style=" margin-top: 30px;">
            <a href="/" title="Okuoku.com">
              <img src="resimler/logo.png" />
            </a>
          </div>
        </div>
        <div class="arama col-md-5" style="width: 100%;margin-top: 4px;">
          <input type="search" placeholder="Ara..." />
          <a class="send" style="float:right;margin-top:-2px">
            <i class="fa fa-search"></i>
          </a>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>

export default {
  name: "VModalSearch",
  components: {
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>


<style scoped>
.orta .arama {
  padding-left: 10px;
  width: 100%px;
  padding-right: 10px;
  margin: 0 auto;
}
.arama input[type="search"] {
  width: calc(100% - 53px);
  padding-left: 15px;
  padding-right: 15px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.arama select {
  width: 29%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #febf00;
  color: #fff;
  text-transform: uppercase;
  position: relative;
}

.arama .send {
  width: 53px;
  background-color: #febf00;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  top: 2px;
  cursor: pointer;
}

.arama .send i {
  padding-top: 8px;
  font-size: 1.5em;
}

.arama .send,
.arama input[type="search"],
.arama select {
  height: 42px;
  display: inline-block;
  margin-left: 0;
  border: 2px solid #fdcb32;
  border-radius: 2px;
  margin-right: -6px;
}
</style>