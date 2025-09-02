// Part 1 Functions
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Hello from Part 1!',
      timestamp: new Date().toISOString()
    })
  };
};

module.exports.test1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Test Function 1 working!',
      part: 'part1'
    })
  };
};

module.exports.test2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Test Function 2 working!',
      part: 'part1'
    })
  };
};

// Part 2 Functions
module.exports.helloPart2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Hello from Part 2!',
      timestamp: new Date().toISOString()
    })
  };
};

module.exports.testPart2_1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Part 2 Function 1 working!',
      part: 'part2'
    })
  };
};

module.exports.testPart2_2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Part 2 Function 2 working!',
      part: 'part2'
    })
  };
};

// Part 3 Functions
module.exports.helloPart3 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Hello from Part 3!',
      timestamp: new Date().toISOString()
    })
  };
};

module.exports.testPart3_1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Part 3 Function 1 working!',
      part: 'part3'
    })
  };
};

module.exports.testPart3_2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Part 3 Function 2 working!',
      part: 'part3'
    })
  };
};