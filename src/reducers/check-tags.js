export function checkTags(someTextFromInput){
  let x = someTextFromInput.value;
  x = x.replace(/</gi, '');
  x = x.replace(/>/gi, '');
  someTextFromInput.value = x;
}
