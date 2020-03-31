import AuthMixin from '@/shared/mixins/auth.mixin'

export default {
  name: 'login',
  components: {},
  mixins: [
    AuthMixin
  ],
  props: [],
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {

  },
  mounted () {
    this.removeUser()
    this.username = 'user'
  },
  methods: {
    login () {
      let user = {
        name: this.username,
        role: this.username,
        fullName: this.username
      }
      this.saveUser(user)
      let home = this.username === 'admin' ? '/admin' : '/home'
      
      this.$router.push(home)
    }
  }
}
