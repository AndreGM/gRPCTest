// var greets = require('../server/protos/greet_pb')
// var service = require('../server/protos/greet_grpc_pb')

var calc= require('../server/protos/calculator_pb')
var calcService = require('../server/protos/calculator_grpc_pb')
var grpc = require('grpc')

function callGreeting(){
  console.log("Hello fron client");
  // create service client
  var client = new service.GreetServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  )
  //create our request
  var request = new greets.GreetRequest()

  //create a protocol buffer greet message
  var greeting = new greets.Greeting()
  greeting.setFirstName("Andre")
  greeting.setLastName("Gomes")

  //set the Greeting
  request.setGreeting(greeting)

  client.greet(request, (error, response) => {
    if(!error){
      console.log("Greeting Response: ", response.getResult());
    }else{
      console.error(error);
    }
  })
}

function callSum(){
   // create service client
   var client = new calcService.CalculatorServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  )

  var sumRequest = new calc.SumRequest()

  sumRequest.setFirstNumber(10)
  sumRequest.setSecondNumber(20)

  client.sum(sumRequest, (error, response) => {
    if(!error){
      console.log(sumRequest.getFirstNumber() + " + " + sumRequest.getSecondNumber() +
      " = " + response.getSumResult());
    }else{
      console.error(error)
    }
  })
}
function main(){
  callSum();
  // callGreeting();
}
main()