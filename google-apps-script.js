const SPREADSHEET_ID = "1KSGUOUYPNwa7aNtJdDXkjVbLjYt0WkRt9rBfZ1dO0wU";
const TRANS_SHEET = "المعاملات";
const SETTINGS_SHEET = "الإعدادات";

function doGet(e){return handleRequest(e);}
function doPost(e){const params=JSON.parse(e.postData.contents||"{}");return handleRequest(e,params);}

function handleRequest(e,postParams){
  const p=postParams||e.parameter;
  let result;
  try{
    if(p.action==="getTransactions")result=getTransactions();
    else if(p.action==="addTransaction")result=addTransaction(p);
    else if(p.action==="updateTransaction")result=updateTransaction(p);
    else if(p.action==="deleteTransaction")result=deleteTransaction(p);
    else if(p.action==="getEmployees")result=getEmployees();
    else if(p.action==="getEmployeePhone")result=getEmployeePhone(p.name);
    else if(p.action==="addEmployee")result=addEmployee(p);
    else if(p.action==="updateEmployee")result=updateEmployee(p);
    else if(p.action==="getSections")result=getSections();
    else if(p.action==="getInspectionData")result=getInspectionData(p.sheetId);
    else if(p.action==="updateWorkerAttendance")result=updateWorkerAttendance(p);
    else if(p.action==="updateWorkerPayment")result=updateWorkerPayment(p);
    else if(p.action==="clearInspectionData")result=clearInspectionData(p);
    else if(p.action==="archiveInspectionData")result=archiveInspectionData(p);
    else if(p.action==="getWorkerInspectionSummary")result=getWorkerInspectionSummary(p);
    else if(p.action==="updateWorkerDailySalary")result=updateWorkerDailySalary(p);
    else if(p.action==="addWorkerToInspection")result=addWorkerToInspection(p);
    else if(p.action==="getStorageRecords")result=getStorageRecords();
    else if(p.action==="deleteStorageRecord")result=deleteStorageRecord(p);
    else result={success:false,error:"Unknown action"};
  }catch(err){result={success:false,error:err.message};}
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}