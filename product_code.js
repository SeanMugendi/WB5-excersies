function parsePartCode(partCode) {
    const regex = /^(\w+):(\w+)-(\w+)$/;
    const matches = partCode.match(regex);
  
    if (matches) {
      return {
        supplierCode: matches[1],
        productNumber: matches[2],
        size: matches[3]
      };
    } else {
      console.log("Invalid part code format.");
    }
  }
  
  let partCode1 = "XYZ:1234-L";
  let part1 = parsePartCode(partCode1);
  
  console.log("Supplier: " + part1.supplierCode + ", Product Number: " + part1.productNumber + ", Size: " + part1.size);
  