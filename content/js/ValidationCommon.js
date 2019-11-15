var dtCh="/"; var minYear=1900; var maxYear=2100; function isInteger(s) { var i; for (i=0; i<s.length; i++) { var c=s.charAt(i); if (((c<"0")||(c>"9"))) return false; } return true; } function stripCharsInBag(s, bag) { var i; var returnString=""; for (i=0; i<s.length; i++) { var c=s.charAt(i); if (bag.indexOf(c)==-1) returnString+=c; } return returnString; } function daysInFebruary(year) { return (((year%4==0)&&((!(year%100==0))||(year%400==0)))? 29:28); } function validateEmail(email) { if (email.length<=0) { return true; } var splitted=email.match("^(.+)@(.+)$"); if (splitted==null) return false; if (splitted[1]!=null) { var regexp_user=/^\"?[\w-_\.]*\"?$/; if (splitted[1].match(regexp_user)==null) return false; } if (splitted[2]!=null) { var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/; if (splitted[2].match(regexp_domain)==null) { var regexp_ip=/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/; if (splitted[2].match(regexp_ip)==null) return false; } return true; } return false; } function validEmail(inputvalue) { var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; if (pattern.test(inputvalue)) { return true; } else { return false; } } function TextCheckTimer(name, length) { setTimeout(function () { return removeExtraBigText(name, length) }, 30); } function removeExtraBigText(TextBoxID, Length) { var str=TextBoxID.value; if (str.length>=Length) { str=str.substring(0, Length); TextBoxID.value=str; return false; } } function CheckTestBoxlength(TxtBoxID, Length) { var str=TxtBoxID.value; if (TxtBoxID.value.length>=Length) { str=str.substring(0, Length); TxtBoxID.value=str; } } function removeExtraText(TxtBoxID, Length) { var str=TxtBoxID.value; if (TxtBoxID.value.length>=Length) { TxtBoxID.value=""; TxtBoxID.value=str.substring(0, Length-1); return false; } } function ChkIsValidPage(TxtDetails) { var Message=TxtDetails.value; Message=Message.replace(/^\s+/, ""); Message=Message.replace(/\s+$/, ""); if (Message.length==0) { TxtDetails.focus(); return false; } else { return true; } } function ChkIsDropDown(ComboBox) { var intselectid=ComboBox.options[ComboBox.selectedIndex].value; if (intselectid=='0') { ComboBox.focus(); return false; } return true; } function ValidateForm(dt, strdate) { if (isDate(dt, strdate)==false) { return false } return true } function DaysArray(n) {
  for (var i=1; i<=n; i++) {
    this[i]=31
    if (i==4||i==6||i==9||i==11) { this[i]=30 } if (i==2) { this[i]=29 }
  } return this
} function isDate(dtStr, strdate) {
  var daysInMonth=DaysArray(12)
  var pos1=dtStr.indexOf(dtCh)
  var pos2=dtStr.indexOf(dtCh, pos1+1)
  var strDay=dtStr.substring(0, pos1)
  var strMonth=dtStr.substring(pos1+1, pos2)
  var strYear=dtStr.substring(pos2+1)
  strYr=strYear
  if (strDay.charAt(0)=="0"&&strDay.length>1) strDay=strDay.substring(1)
  if (strMonth.charAt(0)=="0"&&strMonth.length>1) strMonth=strMonth.substring(1)
  for (var i=1; i<=3; i++) { if (strYr.charAt(0)=="0"&&strYr.length>1) strYr=strYr.substring(1) } month=parseInt(strMonth)
  day=parseInt(strDay)
  year=parseInt(strYr)
  if (pos1==-1||pos2==-1) {
    OpenModelPopupForAlertBox("Please select a valid date in "+strdate)
    return false
  } if (strMonth.length<1||month<1||month>12) {
    OpenModelPopupForAlertBox("Please select a valid month in "+strdate)
    return false
  } if (strDay.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>daysInMonth[month]) {
    OpenModelPopupForAlertBox("Please select a valid day in "+strdate)
    return false
  } if (strYear.length!=4||year==0||year<minYear||year>maxYear) {
    OpenModelPopupForAlertBox("Please select a valid 4 digit year between "+minYear+" and "+maxYear+" in "+strdate)
    return false
  } if (dtStr.indexOf(dtCh, pos2+1)!=-1||isInteger(stripCharsInBag(dtStr, dtCh))==false) {
    OpenModelPopupForAlertBox("Please select a valid date in "+strdate)
    return false
  } return true
} function ConfirmInactive(msg) { var alertMsg="Are you sure, You want to deactivate this "; if (msg!=null) { alertMsg=alertMsg+msg+"?"; } return confirm(alertMsg); } function ConfirmDelete(msg) { var alertMsg="Are you sure, You want to delete this "; if (msg!=null) { alertMsg=alertMsg+msg+"?"; } return confirm(alertMsg); } var ConcatenateSymbol='¶'; var winopen; function OpenPopUpWindow(url, name, menubar, resizable, scrollbars, toolbar, height, width) {
  if (height>600) height=600; var properties="toolbar = "+toolbar+", height = "+height; properties=properties+", width="+width+", menubar="+menubar+", resizable="+resizable+",scrollbars="+scrollbars; var leftprop, topprop, screenX, screenY, cursorX, cursorY, padAmt; if (navigator.appName=="Microsoft Internet Explorer") { screenY=window.screen.height; screenX=window.screen.width; } else {
    screenY=window.outerHeight
    screenX=window.outerWidth
  } var left=parseInt((screen.availWidth/2)-(width/2)); var top=parseInt((screen.availHeight/2)-(height/2)); var leftvar=(screenX-width)/2; var rightvar=(screenY-height)/2; if (navigator.appName=="Microsoft Internet Explorer") { leftprop=leftvar; topprop=rightvar; } else { leftprop=(leftvar-pageXOffset); topprop=(rightvar-pageYOffset); } properties=properties+", left = "+left; properties=properties+", top = "+top; try { if (winopen!=null&&winopen&&winopen.open&&!winopen.closed) { winopen.close(); } } catch (e) { } winopen=window.open(url, name, properties); if (winopen==null||typeof (winopen)=="undefined") { OpenModelPopupForAlertBox("The popup's have been blocked in your browser.\n so you may not be able to view correct functionality.\n Please disable the popup blocking."); } else { winopen.focus(); }
} function CheckTestBoxlength(TxtBoxID, Length) { var str=TxtBoxID.value; if (TxtBoxID.value.length>=Length) { str=str.substring(0, Length); TxtBoxID.value=str; } } function TextCheckTimer(name, length) { setTimeout(function () { return removeExtraBigText(name, length) }, 30); } function removeExtraBigText(TextBoxID, Length) { var str=TextBoxID.value; if (str.length>=Length) { str=str.substring(0, Length); TextBoxID.value=str; return false; } } function OpenPopup(ModalPopupDiv, MaskedDiv, top, left, ModalPopupDivHeight, MaskedDivWidth, MaskedDivHeight) { ModalPopupDiv.style.visibility='visible'; ModalPopupDiv.style.display=''; ModalPopupDiv.style.top=top; ModalPopupDiv.style.left=left; ModalPopupDiv.style.height=ModalPopupDivHeight; MaskedDiv.style.display=''; MaskedDiv.style.visibility='visible'; MaskedDiv.style.top='0px'; MaskedDiv.style.left='0px'; MaskedDiv.style.width=MaskedDivWidth; MaskedDiv.style.height=MaskedDivHeight; return false; } function ClosePopup(ModalPopupDiv, MaskedDiv) { MaskedDiv.style.display='none'; ModalPopupDiv.style.display='none'; } function checkDouble(evt, strValue) { var iKeyCode=(evt.which)? evt.which:event.keyCode; if (iKeyCode<=46||iKeyCode>57||iKeyCode==47) { if (iKeyCode==46) { var is_dot=strValue.indexOf('.'); if (is_dot==-1) { return true; } else { iKeyCode=0; return false; } } else if (iKeyCode!=8&&iKeyCode!=13&&iKeyCode!=9) { return false; } else if (iKeyCode==8||iKeyCode==9) { return true; } else { iKeyCode=0; return false; } } return true; } function checkInteger(evt, strValue) { var iKeyCode=(evt.which)? evt.which:event.keyCode; if (iKeyCode<=47||iKeyCode>57||iKeyCode==47) { if (iKeyCode!=8&&iKeyCode!=13&&iKeyCode!=9) { return false; } else if (iKeyCode==8||iKeyCode==9) { return true; } else { iKeyCode=0; return false; } } return true; } function SelectSingleRadiobuttonInGridView(rdBtnID) { var rduser=$(document.getElementById(rdBtnID)); rduser.closest('TR').addClass('SelectedRowStyle'); rduser.checked=true; var list=rduser.closest('table').find("INPUT[type='radio']").not(rduser); list.attr('checked', false); list.closest('TR').removeClass('SelectedRowStyle'); } function CheckMobile(mobileno) { if (mobileno.length<10||mobileno.trim().indexOf('0')==0) { return false; } return true; } function checkfiles(fileUploadControl) {
  var fup=document.getElementById(fileUploadControl.id); var fileName=fup.value; var ext=fileName.substring(fileName.lastIndexOf('.')+1); var largefName=fileName.replace(ext, ''); if (ext.toUpperCase()=="JPEG"||ext.toUpperCase()=="JPG"||ext.toUpperCase()=="GIF"||ext.toUpperCase()=="PNG"||ext.toUpperCase()=="BMP"||ext.toUpperCase()=="BMP"||ext.toUpperCase()=="PDF"||ext.toUpperCase()=="DOC"||ext.toUpperCase()=="DOCX"||ext.toUpperCase()=="XLS"||ext.toUpperCase()=="XLSX"||ext.toUpperCase()=="TXT"||ext.toUpperCase()=="ZIP"||ext.toUpperCase()=="RAR") {
    var fileSize; fileSize=fup.files[0].size
    fileSize=fileSize/1048576; if (fileSize>1) { OpenModelPopupForAlertBox('File size cannot be greater than 1 MB or 1024 KB'); window.setTimeout(function () { fup.value=''; fup.focus(); }, 5); window.setTimeout(function () { if (fup.value!='') { ClearBrowseContent(); } }, 6); return false; } return true;
  } else { OpenModelPopupForAlertBox("Upload .jpg,.jpeg, .gif, .bmp, .txt, .pdf, .doc, .docx, .xls, .xlsx, .rar, .zip only"); window.setTimeout(function () { fup.value=''; fup.focus(); }, 5); window.setTimeout(function () { if (fup.value!='') { ClearBrowseContent(); } }, 6); return false; }
} function checkfilesForImageOnly(fileUploadControl) {
  var fup=document.getElementById(fileUploadControl.id); var fileName=fup.value; var ext=fileName.substring(fileName.lastIndexOf('.')+1); var largefName=fileName.replace(ext, ''); if (ext.toUpperCase()=="JPEG"||ext.toUpperCase()=="JPG"||ext.toUpperCase()=="PNG"||ext.toUpperCase()=="BMP") {
    var fileSize; fileSize=fup.files[0].size
    fileSize=fileSize/1048576; if (fileSize>1) { OpenModelPopupForAlertBox('File size cannot be greater than 1 MB or 1024 KB'); window.setTimeout(function () { fup.value=''; fup.focus(); }, 5); window.setTimeout(function () { if (fup.value!='') { ClearBrowseContent(); } }, 6); return false; } return true;
  } else { OpenModelPopupForAlertBox("Upload .jpg, .jpeg, .png, .bmp only"); window.setTimeout(function () { fup.value=''; fup.focus(); }, 5); window.setTimeout(function () { if (fup.value!='') { ClearBrowseContent(); } }, 6); return false; }
} function togglePasswordFieldClicked(passwordField) { var value=passwordField.val(); if (passwordField.attr('type')=='password') { passwordField.attr('type', 'text'); } else { passwordField.attr('type', 'password'); } passwordField.val(value); } function validateMobile(field, rules, i, options) {
  var userinput=field.val(); if (userinput.length<10) { return "Minimum 10 digits allowed!"; }
  var pattern=/^(\+|\d)[0-9]{7,16}$/;
  if (!pattern.test(userinput)) { return "Enter valid mobile number!"; }
  pattern=/^(\d)\1+$/
  if (pattern.test(userinput)) { return "Enter valid mobile number!"; }
} function validateContact(field, rules, i, options) {
  var userinput=field.val(); if (userinput.length<10) { return "Minimum 10 digits allowed!"; } var pattern=/^(\+|\d)[0-9]{7,16}$/;
  if (!pattern.test(userinput)) { return "Enter valid number!"; } pattern=/^(\d)\1+$/
  if (pattern.test(userinput)) { return "Enter valid number!"; }
}