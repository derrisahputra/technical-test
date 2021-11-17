var data = [
  {
    type: "Foo",
    year: 1995
  }, 
  {
    type: "Bar",
    year: 1993
  },
  {
    type: "Foobar",
    year: 2000
  }
  ]
  
  function sort() {
    data.sort((a,b) => {
      return a.year - b.year;
    })
    
    console.log(data)
  }

  sort();
