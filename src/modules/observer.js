export const observer = {
  next: e => console.log(e),
  error: e => console.error(e),
  complete: () => console.log('complete')
};