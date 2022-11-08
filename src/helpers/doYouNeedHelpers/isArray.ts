export function isArray(testObject: any): testObject is Array<any> {
  return typeof testObject.length === "number";
}
