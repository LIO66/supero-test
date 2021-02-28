$(document).ready(function(){
  
 // variables
 const name=$('#inputName')
    const email=$('#inputEmail')
    const website=$('#inputWebsite')
    const image=$('#inputImage')
    const gender=$('input[name=gridRadios]:checked')
    



$('#form').submit(function(e) {
  e.preventDefault();
  addNewRow();
});
// adding user to table
function addNewRow(){
    
    var skills = "";
    $.each($("input[name='skill']:checked"), function(){
        skills+=" " + $(this).val()

    });
    $('#table1').append(` </tr>
  <tr>
      <td>
        <div>${name.val()}</div>      
            <div>${gender.val()}</div> 
           <div>${email.val()}</div> 
         <div>${website.val()}</div> 
        <div>${skills}</div> 
      </td>
      <td>
<a href=${image.val()} target="_blank"><img src=${image.val()} width="150"/></a>
      </td>
      
    </tr>`);
    clearValue()

}
// clearing all field on form submit or clear button click
  clearValue=() => {

    name.val('')
    email.val('')
    website.val('')
    image.val('')
}

});