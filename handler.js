module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Part 1!' })
  };
};

module.exports.test1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Test Function 1 working!' })
  };
};

module.exports.test2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Test Function 2 working!' })
  };
};