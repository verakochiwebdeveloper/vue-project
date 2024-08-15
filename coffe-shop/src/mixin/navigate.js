export const navigate = {
    method: {
    navigate(id) {
      this.$router.push({name: this.name, params:{id: id}})
    }
  }
}