$(document).ready(function() {
    // Save button to save CPT code record search
    $(".toSave").on("click", function(event) {
    
     var dataRow = $(this).closest('tr').prop('class','cptRow').fadeOut(500);
    
     var cpt = dataRow[0].cells[0].innerText;
     var providerName = dataRow[0].cells[1].innerText;
     var providerAddress = dataRow[0].cells[2].innerText;
     var providerCharged = dataRow[0].cells[3].innerText;
     var medicareAllowed = dataRow[0].cells[4].innerText;
     var medicarePaid = dataRow[0].cells[5].innerText;
     var nationalAverage = dataRow[0].cells[6].innerText;

     var newSavedSearch = {
      cpt: cpt,
      providerName: providerName,
      providerAddress: providerAddress,
      providerCharged: providerCharged,
      medicareAllowed: medicareAllowed,
      medicarePaid: medicarePaid,
      nationalAverage: nationalAverage
     };

     // Delete in production
     console.log(newSavedSearch);
   
     // Send the POST request
     $.ajax("/savedSearches", {
         type: "POST",
         data: newSavedSearch
       }).then(
         function() {
           console.log("Search result saved");
           // Reload the page to get the updated list
            // location.reload();
         }
       );
     });
});




