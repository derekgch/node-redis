const mockData = [
'js','bs','some other stuff'
]

const generateMockData = (redisSetKeyFn) =>{
  mockData.forEach((data,index) =>{
    for(let i = 0; i < 10; i++) {
      redisSetKeyFn(`${data}-${index}-${i}`, `${data}-${index}-${i}-data`)
    }
  })
}

exports.generateMockData = generateMockData;