function isArray(testObject: any): testObject is Array<any> {
  return testObject.length === "number";
}
