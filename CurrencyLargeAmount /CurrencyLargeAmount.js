// computeAmount().thousand(55).lacs(45).crores(43).lacs(14).crores(23).thousand(1).value()

function computeAmount() {
    let total = 0;
  
    const api = {
      thousand(n) {
        total += n * 1_000;
        return api;
      },
      lacs(n) {
        total += n * 100_000;
        return api;
      },
      crores(n) {
        total += n * 10_000_000;
        return api;
      },
      value() {
        return total;
      }
    };
  
    return api;
}

const result = computeAmount()
  .thousand(55)
  .lacs(45)
  .crores(43)
  .lacs(14)
  .crores(23)
  .thousand(1)
  .value();

console.log(result);  // Outputs the computed numeric value

// #Output
// thousand(55) = 55,000
// lacs(45)     = 4,500,000
// crores(43)   = 430,000,000
// lacs(14)     = 1,400,000
// crores(23)   = 230,000,000
// thousand(1)  = 1,000
// ----------------------------------
// Total        = 666,956,000



// ✅ Code Explained

// This function initializes a local variable total to keep track of the accumulated amount.
// We define an api object with methods (thousand, lacs, crores, and value) that can be chained.

// 💰 thousand(n)
// Multiplies the input n by 1,000 and adds it to total.
// Returns the api object to allow chaining.
// For example: .thousand(55) adds 55,000 to total.

// 💰 lacs(n)
// Multiplies n by 100,000 and adds to total.
// Returns api for chaining.

// 💰 crores(n)
// Multiplies n by 10,000,000 and adds to total.
// Also returns api.

// 🔚 value()
// Final method in the chain that returns the computed amount.

// 🔄 Returning the API
// computeAmount() returns the api object, enabling chaining like computeAmount().thousand(1).value().



  
