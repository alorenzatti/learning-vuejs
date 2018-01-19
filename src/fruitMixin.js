export const fruitMixin = {
  data : function() {
    return {
      text : 'Hello there!',
      fruits : ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },

  computed : {
    filteredFruits : function() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      })
    }
  },

  created : function() {
    console.log("CREATED")
  }
}
