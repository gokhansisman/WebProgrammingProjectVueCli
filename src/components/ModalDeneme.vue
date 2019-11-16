<template>
  <div @click="openModal()">OpenModal</div>
</template>

<script>
export default {
  name: 'ModalDeneme',
  data () {
    return {
      time: 0,
      duration: 5000
    }
  },
  methods: {
    openModal () {
      this.$modal.show({
        template: `<b>{{time}}</b>
        <div>Gokhan</div>`,
        props: ['time']
      }, {
        time: this.time
      }, {
        width: 300,
        height: 300
      }, {
        'before-open': this.beforeOpen,
        'before-close': this.beforeClose
      })
    },
    beforeOpen () {
     // console.log(event)
      // Set the opening time of the modal
      this.time = Date.now()
    },
    beforeClose (event) {
      //console.log(event)
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.stop()
      }
    }
  }
}
</script>