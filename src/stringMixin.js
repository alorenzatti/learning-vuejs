export const stringMixin = {

  computed : {

    reverse : function() {
      return this.text.split("").reverse().join("")
    },

    wordLength : function() {
      return this.text + " (" + this.text.length + ")"
    }
  }
}
