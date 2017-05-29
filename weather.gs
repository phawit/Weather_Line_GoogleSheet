var ss = SpreadsheetApp.openById('1x3DLh6ljvsSObuWCqPWhidLB-abE3eRX5QWUFSSX5VA');
var sheet = ss.getSheetByName('Data');
var menu = ss.getSheetByName('Menu');

 

function doGet(e){
  var tag = e.parameters.tag;
  var val = e.parameter.value;
  var rain = e.parameter.rain;
  var read = e.parameter.read;
  
 
   
  if (read !== undefined){
    return ContentService.createTextOutput(menu.getRange('H1').getValue());
  }
  //-------------------------------------------------------------------
  var row = sheet.getLastRow() + 1;
    
  var now = Utilities.formatDate(new Date(), 'Asia/Bangkok', "dd/MM/yy'*****'hh:mm a");
    
    
  
  var range = sheet.getRange("C" + row);    var retval = range.setValue(val).getValue();
  sheet.getRange("A" + row).setValue(row -1).getValue();
  sheet.getRange("B" + row).setValue(now).getValue();
  sheet.getRange("D" + row).setValue(tag).getValue();
  sheet.getRange("E" + row).setValue(rain).getValue();
  
  menu.getRange('B1').setValue(Utilities.formatDate(new Date(), 'Asia/Bangkok', "dd/MM/yy"));
  menu.getRange('D1').setValue(Utilities.formatDate(new Date(), 'Asia/Bangkok', "hh:mm:ss a"));
  
  
  
  
  
  
  
  
  
  
  
  
  
  //----------------------------------------------------------------
  if (retval == e.parameter.value)
    return ContentService.createTextOutput("Successfully wrote: " + e.parameter.value + "\ninto spreadsheet.");
  else
    return ContentService.createTextOutput("Unable to write into spreadsheet.\nCheck authentication and make sure the cursor is not on cell 'A2'." + retval + ' ' + e.parameter.value);
}


