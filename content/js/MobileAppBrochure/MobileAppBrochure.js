$(document).ready(function () {
  var varMobileAppBrochure={
    MAB_Name: "",
    MAB_SchoolName: "",
    MAB_Mobile: "",
    MAB_EmailID: "",
    PPCB_TelePhoneNo: "",
    PPCB_TotalStudent: "",
    Type: "",
    MAB_Enquirer: "",
    MAB_City: "",
  }
  $("#submitMobileAppBrochure").bind("click", function () {
    var valid=$("#formMobileAppBrochure").validationEngine('validate');
    if (valid) {
      debugger
      var callingURL=window.location.pathname;
      var callingPage=callingURL.substring(callingURL.lastIndexOf('/')+1);
      callingPage=callingPage.replace(/[\W_]/g, '');
      varMobileAppBrochure.MAB_Name=$('#name').val();
      varMobileAppBrochure.MAB_SchoolName=$('#schoolname').val();
      varMobileAppBrochure.MAB_Mobile=$('#number').val();
      varMobileAppBrochure.MAB_EmailID=$('#email').val();
      varMobileAppBrochure.PPCB_TelePhoneNo=$('#telephoneno').val();
      varMobileAppBrochure.PPCB_TotalStudent=$('#totalstudent').val();
      varMobileAppBrochure.Type=callingPage;
      varMobileAppBrochure.MAB_Enquirer=$('#enquirer').val();
      varMobileAppBrochure.MAB_City=$('#city').val();
      var data=JSON.stringify(varMobileAppBrochure);
      ServerRequest(MethodNameSchoolA2Z.SaveMobileAppBrochure, data, OnSuccessMobileAppBrochure, OnErrorMobileAppBrochure)
    } else {
      $("#formMobileAppBrochure").validationEngine()
    }
    return !1
  });
  $("#submitMFPMobileAppBrochure").bind("click", function () {
    debugger
    var valid=$("#formMFPMobileAppBrochure").validationEngine('validate');
    if (valid) {
      var callingURL=window.location.pathname;
      var callingPage=callingURL.substring(callingURL.lastIndexOf('/')+1);
      callingPage=callingPage.replace(/[\W_]/g, '');
      varMobileAppBrochure.MAB_Name=$('#name').val();
      varMobileAppBrochure.MAB_SchoolName=$('#schoolname').val();
      varMobileAppBrochure.MAB_Mobile=$('#number').val();
      varMobileAppBrochure.MAB_EmailID=$('#email').val();
      varMobileAppBrochure.PPCB_TelePhoneNo=$('#telephoneno').val();
      varMobileAppBrochure.PPCB_TotalStudent=$('#totalstudent').val();
      varMobileAppBrochure.Type=callingPage;
      varMobileAppBrochure.MAB_Enquirer=$('#enquirer').val();
      varMobileAppBrochure.MAB_City=$('#city').val();
      var data=JSON.stringify(varMobileAppBrochure);
      ServerRequest(MethodNameSchoolA2Z.SaveMobileAppBrochure, data, OnSuccessMFPMobileAppBrochure, OnErrorMobileAppBrochure)
    } else {
      $("#formMFPMobileAppBrochure").validationEngine()
    }
    return !1
  })
});

function OnSuccessMobileAppBrochure(result) {
  debugger;
  switch (result.SingleResult.m_Item1) {
    case ResultCode.Success:
      var fileURL=result.SingleResult.m_Item2;
      var index=fileURL.lastIndexOf("/")+1;
      var filename=fileURL.substr(index);
      downloadURI(fileURL, filename);
      BootstrapDialog.show({
        title: 'Thank you',
        message: 'Thank you for submitting this form.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      $('#formMobileAppBrochure')[0].reset();
      break;
    case ResultCode.AlreadyExist:
      BootstrapDialog.show({
        title: 'Already exists',
        message: 'You have already filled this form.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      break;
    case ResultCode.Error:
      BootstrapDialog.show({
        title: 'Error',
        message: 'There is some error in form submission.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      break;
    case ResultCode.EmailSendFailed:
      BootstrapDialog.show({
        title: 'Information',
        message: 'There is some error in email send.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      break
  }
}

function OnSuccessMFPMobileAppBrochure(result) {
  debugger;
  switch (result.SingleResult.m_Item1) {
    case ResultCode.Success:
      var fileURL=result.SingleResult.m_Item2;
      var index=fileURL.lastIndexOf("/")+1;
      var filename=fileURL.substr(index);
      BootstrapDialog.show({
        title: 'Thank you',
        message: 'Thank you for submitting this form.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      $('#formMFPMobileAppBrochure')[0].reset();
      break;
    case ResultCode.AlreadyExist:
      BootstrapDialog.show({
        title: 'Already exists',
        message: 'You have already filled this form.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      break;
    case ResultCode.Error:
      BootstrapDialog.show({
        title: 'Error',
        message: 'There is some error in form submission.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      break;
    case ResultCode.EmailSendFailed:
      BootstrapDialog.show({
        title: 'Information',
        message: 'There is some error in email send.',
        closable: !1,
        buttons: [{
          label: 'OK',
          action: function (dialogRef) {
            dialogRef.close()
          }
        }]
      });
      break
  }
}

function OnErrorMobileAppBrochure(error) {
  BootstrapDialog.show({
    title: 'Error',
    message: error,
    closable: !1,
    buttons: [{
      label: 'OK',
      action: function (dialogRef) {
        dialogRef.close()
      }
    }]
  })
}

function downloadURI(uri, name) {
  try {
    $("#downloadFileLink").attr("href", uri);
    $("#downloadFileLink").attr("download", name);
    var click_ev=document.createEvent("MouseEvents");
    click_ev.initEvent("click", !0, !0);
    document.getElementById("downloadFileLink").dispatchEvent(click_ev)
  } catch (err) {
    BootstrapDialog.show({
      title: 'Error',
      message: err.message,
      closable: !1,
      buttons: [{
        label: 'OK',
        action: function (dialogRef) {
          dialogRef.close()
        }
      }]
    })
  }
}