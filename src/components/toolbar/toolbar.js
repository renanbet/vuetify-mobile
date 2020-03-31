export default {
  name: 'toolbar',
  components: {},
  props: [],
  data () {
    return {
      showMenu: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    doNothing () {
    },
    logout () {
      this.$emit('logout')
    }
  }
}
