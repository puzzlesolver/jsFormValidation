/* JavaScript file which validates a simple html form.
   User must enter the right information in the form otherwise JavaScript will throw an error where the wrong information was entered.
   Validates each single field in the form one by one and it also includes a reset button which clears the fields.
*/

function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 
        
function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DC2","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA",
        "MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH",
        "NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN",
        "TX","UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        }

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function isAgeValid(dateString) {
    var age = getAge(dateString);
    if (age >= 12 && age <= 18)
        return true;
    return false;
}

// source: jquerybyexample.net
function isValidDate(txtDate)
{
  var currVal = txtDate;
  if(currVal == '')
    return false;
  //Declare Regex 
  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
  var dtArray = currVal.match(rxDatePattern); // is format OK?
  if (dtArray == null)
     return false;
  //Checks for mm/dd/yyyy format.
  dtMonth = dtArray[1];
  dtDay= dtArray[3];
  dtYear = dtArray[5];
  if (dtMonth < 1 || dtMonth > 12)
      return false;
  else if (dtDay < 1 || dtDay> 31)
      return false;
  else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
      return false;
  else if (dtMonth == 2)
  {
     var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
     if (dtDay> 29 || (dtDay ==29 && !isleap))
          return false;
  }
  return true;
}
      
// copied from stackoverflow.com      
function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        }                
                   
$(document).ready( function() {
    var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(24);
    
    elementHandle[0] = $('[name="program"]');
    elementHandle[1] = $('[name="parent_fname"]');
    elementHandle[2] = $('[name="parent_lname"]');
    elementHandle[3] = $('[name="rel_to_child"]');
    elementHandle[4] = $('[name="address1"]');
    elementHandle[5] = $('[name="city"]');
    elementHandle[6] = $('[name="state"]');
    elementHandle[7] = $('[name="zip"]');
    elementHandle[8] = $('[name="area_code"]');
    elementHandle[9] = $('[name="prefix"]');
    elementHandle[10] = $('[name="phone"]');
    elementHandle[11] = $('[name="cell_area_code"]');
    elementHandle[12] = $('[name="cell_prefix"]');
    elementHandle[13] = $('[name="cell_phone"]');
    elementHandle[14] = $('[name="email"]');
    elementHandle[15] = $('[name="child_fname"]');
    elementHandle[16] = $('[name="child_lname"]');
    elementHandle[17] = $('[name="file"]');
    elementHandle[18] = $('[name="gender"]');
    elementHandle[19] = $('[name="dob"]');
    elementHandle[20] = $('[name="sec"]');
    elementHandle[21] = $('[name="sec_area_code"]');
    elementHandle[22] = $('[name="sec_prefix"]');
    elementHandle[23] = $('[name="sec_phone"]');
    
function isValidData() {
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please select a program from above menu");
            elementHandle[0].focus();
            return false;
            }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[1].focus();
            return false;
            }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[2].focus();            
            return false;
            }
        if(isEmpty(elementHandle[3].val())) {
            elementHandle[3].addClass("error");
            errorStatusHandle.text("Please select the relationship to child");
            elementHandle[3].focus();
            return false;
            }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[4].focus();            
            return false;
            }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[5].focus();            
            return false;
            }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[6].focus();            
            return false;
            }
        if(!isValidState(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[6].focus();            
            return false;
            }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[7].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
            }
        if(elementHandle[7].val().length != 5) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[7].focus();            
            return false;
            }
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your area code");
            elementHandle[8].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[8].focus();            
            return false;
            }
        if(elementHandle[8].val().length != 3) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[8].focus();            
            return false;
            }   
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your phone number prefix");
            elementHandle[9].focus();            
            return false;
            }           
        if(!$.isNumeric(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[9].focus();            
            return false;
            }
        if(elementHandle[9].val().length != 3) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[9].focus();            
            return false;
            }
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter the last four digits of your phone number");
            elementHandle[10].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[10].focus();            
            return false;
            }
        if(elementHandle[10].val().length != 4) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[10].focus();            
            return false;
            }
        if(isEmpty(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("Please enter your area code");
            elementHandle[11].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[11].focus();            
            return false;
            }
        if(elementHandle[11].val().length != 3) {
            elementHandle[11].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[11].focus();            
            return false;
            }   
        if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter your cellphone number prefix");
            elementHandle[12].focus();            
            return false;
            }           
        if(!$.isNumeric(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("The cellphone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[12].focus();            
            return false;
            }
        if(elementHandle[12].val().length != 3) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("The cellphone number prefix must have exactly three digits")
            elementHandle[12].focus();            
            return false;
            }
        if(isEmpty(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please enter the last four digits of your cellphone number");
            elementHandle[13].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("The cellphone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[13].focus();            
            return false;
            }
        if(elementHandle[13].val().length != 4) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("The cellphone number must have exactly four digits")
            elementHandle[13].focus();            
            return false;
            }
        if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please enter your email address");
            elementHandle[14].focus();            
            return false;
            }            
        if(!isValidEmail(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The email address appears to be invalid,");
            elementHandle[14].focus();            
            return false;
            }
        if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter the first name of the child");
            elementHandle[15].focus();
            return false;
            }
        if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("Please enter the last name of the child");
            elementHandle[16].focus();
            return false;
            }
        if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("Please upload a photo of the child");
            elementHandle[17].focus();
            return false;
            }
        if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Please select the gender of the child");
            elementHandle[18].focus();
            return false;
            }
        if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter the birthday date of the child");
            elementHandle[19].focus();
            return false;
            }
        if(!isValidDate(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The birthday date you entered is not a valid date");
            elementHandle[19].focus();            
            return false;
            }
        if(!isAgeValid(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Child must be in the range of 12 and 18 years old");
            elementHandle[19].focus();            
            return false;
            }
        if(isEmpty(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Please enter a secondary contact name for emergency purposes");
            elementHandle[20].focus();            
            return false;
            }
        if(isEmpty(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("Please enter your area code");
            elementHandle[21].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[21].focus();            
            return false;
            }
        if(elementHandle[21].val().length != 3) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[21].focus();            
            return false;
            }   
        if(isEmpty(elementHandle[22].val())) {
            elementHandle[22].addClass("error");
            errorStatusHandle.text("Please enter your phone number prefix");
            elementHandle[22].focus();            
            return false;
            }           
        if(!$.isNumeric(elementHandle[22].val())) {
            elementHandle[22].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[22].focus();            
            return false;
            }
        if(elementHandle[22].val().length != 3) {
            elementHandle[22].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[22].focus();            
            return false;
            }
        if(isEmpty(elementHandle[23].val())) {
            elementHandle[23].addClass("error");
            errorStatusHandle.text("Please enter the last four digits of your phone number");
            elementHandle[23].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[23].val())) {
            elementHandle[23].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[23].focus();            
            return false;
            }
        if(elementHandle[23].val().length != 4) {
            elementHandle[23].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[23].focus();            
            return false;
            }
        return true;
        }       

elementHandle[0].focus();
   
   
// HANDLERS

// on blur, if the user has entered valid data, the error message
// should no longer show.
    elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[1].on('blur', function() {
        if(isEmpty(elementHandle[1].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[2].on('blur', function() {
        if(isEmpty(elementHandle[2].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[3].on('blur', function() {
        if(isEmpty(elementHandle[3].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[4].on('blur', function() {
        if(isEmpty(elementHandle[4].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[5].on('blur', function() {
        if(isEmpty(elementHandle[5].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[6].on('blur', function() {
        if(isEmpty(elementHandle[6].val()))
            return;
        if(isValidState(elementHandle[6].val())) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        });
    
    elementHandle[7].on('blur', function() {
        if(isEmpty(elementHandle[7].val()))
            return;
        if($.isNumeric (elementHandle[7].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[8].on('blur', function() {
        if(isEmpty(elementHandle[8].val()))
            return;
        if($.isNumeric (elementHandle[8].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[9].on('blur', function() {
        if(isEmpty(elementHandle[9].val()))
            return;
        if($.isNumeric (elementHandle[9].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[10].on('blur', function() {
        if(isEmpty(elementHandle[10].val()))
            return;
        if($.isNumeric (elementHandle[10].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[11].on('blur', function() {
        if(isEmpty(elementHandle[11].val()))
            return;
        if($.isNumeric (elementHandle[11].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[12].on('blur', function() {
        if(isEmpty(elementHandle[12].val()))
            return;
        if($.isNumeric (elementHandle[12].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[13].on('blur', function() {
        if(isEmpty(elementHandle[13].val()))
            return;
        if($.isNumeric (elementHandle[13].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[14].on('blur', function() {
        if(isEmpty(elementHandle[14].val()))
            return;
        if(isValidEmail(elementHandle[14].val())) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
            }
        });
    
    elementHandle[15].on('blur', function() {
        if(isEmpty(elementHandle[15].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[16].on('blur', function() {
        if(isEmpty(elementHandle[16].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[17].on('blur', function() {
        if(isEmpty(elementHandle[17].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[18].on('blur', function() {
        if(isEmpty(elementHandle[18].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[19].on('blur', function() {
        if(isEmpty(elementHandle[19].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[20].on('blur', function() {
        if(isEmpty(elementHandle[20].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
        });
    
    elementHandle[21].on('blur', function() {
        if(isEmpty(elementHandle[21].val()))
            return;
        if($.isNumeric (elementHandle[21].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[22].on('blur', function() {
        if(isEmpty(elementHandle[22].val()))
            return;
        if($.isNumeric (elementHandle[22].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
    
    elementHandle[23].on('blur', function() {
        if(isEmpty(elementHandle[23].val()))
            return;
        if($.isNumeric (elementHandle[23].val())){
              $(this).removeClass("error");
              errorStatusHandle.text("");
              }
        });
//keyup, calls the appropriate function after the user releases the key       

//convert the state nomenclature from lower-case characters to upper-case characters
    elementHandle[6].on('keyup', function() {
        elementHandle[6].val(elementHandle[6].val().toUpperCase());
        });
        
//move to focus from area-code textbox to prefix textbox
    elementHandle[8].on('keyup', function() {
        if(elementHandle[8].val().length == 3)
            elementHandle[9].focus();
            });

//move the focus from prefix textbox to phone last four-digit textbox           
    elementHandle[9].on('keyup', function() {
        if(elementHandle[9].val().length == 3)
            elementHandle[10].focus();
            });
 
 //move the focus from cellphone area-code textbox to cellphone prefix textbox   
    elementHandle[11].on('keyup', function() {
        if(elementHandle[11].val().length == 3)
            elementHandle[12].focus();
            });
 
//move the focus from cellphone prefix textbox to cellphone last four-digit textbox           
    elementHandle[12].on('keyup', function() {
        if(elementHandle[12].val().length == 3)
            elementHandle[13].focus();
            });

//move the focus from secondary phone area code textbox to secondary phone prefix textbox    
    elementHandle[21].on('keyup', function() {
        if(elementHandle[21].val().length == 3)
            elementHandle[22].focus();
            });
 
//move the focus from secondary phone  prefix textbox to secondary phone last four-digit textbox         
    elementHandle[22].on('keyup', function() {
        if(elementHandle[22].val().length == 3)
            elementHandle[23].focus();
            });    

//submit button   
    $(':submit').on('click', function() {
        for(var i=0; i < elementHandle.length; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        return isValidData();
        });
        
//Clear button 
    $(':reset').on('click', function() {
        for(var i=0; i < elementHandle.length; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        });                                       
});
