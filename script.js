document.addEventListener("DOMContentLoaded", function() {
   console.log("working")

  
   const url = "https://catfact.ninja/breeds"
   fetch(url).then(function(response) {
         return response.json();
       }).then(function(data) {
        console.log(data);


        let breed = ""
        let coat = ""
        let country = ""
        

       const putOnPage = () => {
            let theCat = `${breed}, ${country}, ${coat}`
            let catWrap = window.document.getElementsByClassName("catWrap")[0];
            let p = document.createElement("p")
            p.append(theCat)
            catWrap.append(p)
            
       }

        data.data.map( x => {
            breed = x.breed;
            coat = x.coat;
            country = x.country;
            putOnPage();
        })

     
       }).catch(function() {
            console.log("Booo");
       });
  });
   
