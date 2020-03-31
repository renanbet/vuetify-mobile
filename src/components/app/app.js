import AuthMixin from '@/shared/mixins/auth.mixin'
import BottomNav from '@/components/bottomnav'
import Toolbar from '@/components/toolbar'

export default {
  name: 'app',
  mixins: [
    AuthMixin
  ],
  components: {
    BottomNav,
    Toolbar
  },
  props: {},
  data () {
    return {
      show: false
    }
  },
  computed: {},
  mounted () {
    let user = this.getUser()
    if (user) {
      this.show = true
    }
  },
  methods: {
    logout () {
      this.removeUser()
      this.$router.push('/')
    }
  },
  watch: {
    $route: function (to, from) {
      if (/login/.test(to.name)) {
        this.show = false
      }

      if (/login/.test(from.name)) {
        this.show = true
      }
    }
  }
}
