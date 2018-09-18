fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for(let i = 0; i< collection.length; i++){
          callback(collection[i], i, collection)
        }
      }else{
        for(const key in collection){
          callback(collection[key], key, collection)
        }
      }
    return collection
    },

    map: function(collection, callback) {
      if (Array.isArray(collection)){
        let new_array = [ ]
        for(let i = 0; i< collection.length; i++){
          new_array.push(callback(collection[i], i, collection))
        }
        return new_array
      }else{
        let new_obj = Object.assign({}, collection)
        let array = [ ]
        for(const key in collection){
          //debugger

          new_obj[key] = callback(collection[key], key, collection)
          array.push(new_obj[key])
        }
        return array
      }

    },

    reduce: function(collection, callback, acc) {
      if (acc != undefined){

      let accumulation = acc
      for (var i = 0; i < collection.length; i++) {

        accumulation = callback(accumulation, collection[i], collection)

      }
      return accumulation
    }else{
      let accumulation = 0
      for (var i = 0; i < collection.length; i++) {

        accumulation = callback(accumulation, collection[i], collection)

      }
      return accumulation

    }
    },

    find: function(collection, predicate){
      for (var i = 0; i < collection.length; i++) {

        if (predicate(collection[i])){
          return collection[i]
          break
        }
      }
    },
    filter: function(collection, predicate){
      let new_array = [ ]
      for (var i = 0; i < collection.length; i++) {

        if (predicate(collection[i])){
          new_array.push(collection[i])
        }
      }
      return new_array
    },
    size: function(collection){
      if (Array.isArray(collection)){
        let size = 0
        for (var i = 0; i < collection.length; i++) {
          size +=1
        }
        return size
      }else{
        let size = 0
        for (const key in collection){
          size +=1
        }
        return size
      }
    },
    first: function(array, n){
      if (n!== undefined){
        return array.slice(0,n)
      }else{
        return array[0]
      }
    },

    last: function(array,n){
      if (n!== undefined){
        return array.slice(array.length-n)
      }else{
        return array[array.length-1]
      }
    },

    compact: function(array){
      let false_array = [false, null, 0, "", undefined, NaN]
      let new_array = [ ]
      for (var i = 0; i < array.length; i++) {
        if (false_array.includes(array[i])===false){
          new_array.push(array[i])
        }
      }
      return new_array


    },

    sortBy: function(array, callback){
      new_array = array.slice()
      return new_array.sort(function (a,b){
        return callback(a)-callback(b)

      })
    },

    uniq: function(array, isSorted, callback){
      if (callback === undefined){
        let uniq_array = []

        for (var i = 0; i < array.length; i++) {
            if (!uniq_array.includes(array[i])){
              uniq_array.push(array[i])
          }

        }
      return uniq_array
    }else{
      let uniq_array = []
      for (var i = 0; i < array.length; i++) {
        let uniq_callback_array = uniq_array.map(callback)
          if (!uniq_callback_array.includes(callback(array[i]))){
            uniq_array.push(array[i])
        }

      }
    return uniq_array

    }

    },

    keys: function(object){
      let new_array = [ ]
      for(const key in object){
        new_array.push(key)
      }
      return new_array

    },

    values: function(object){
      let new_array = [ ]
      for (const key in object){
        new_array.push(object[key])
      }
      return new_array
    },

    flatten: function(array, shallow){
      let flat_array = [ ]


      function flatten(array){

        for (var i = 0; i < array.length; i++) {
          if (typeof(array[i]) === "object"){
            flatten(array[i])
          }else{
            flat_array.push(array[i])
          }
        }


      }


      if (shallow=== undefined){
        flatten(array)
        return flat_array


      }else{
        for (var i = 0; i < array.length; i++) {
          if (typeof(array[i])!== "object"){
            flat_array.push(array[i])

          }else{
            for (let y = 0; y<array[i].length; y++){
              flat_array.push(array[i][y])
           }
          }
      }
      return flat_array
      }

    },

    functions: function(object) {
      let new_array = [ ]
      for (const key in object){
        if (typeof(object[key])==="function"){
          new_array.push(key)
        }

      }
      return new_array
    },


  }
})()

fi.libraryMethod()
