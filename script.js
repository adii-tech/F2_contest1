/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const mapEmployeeNames = arr.map(function(employee){
      if(employee.profession === "developer"){
          return employee.name
      }    
     })
     console.log(mapEmployeeNames)
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(employee) {
      if(employee.profession === "developer"){
         console.log(employee.name);
      }
  });
  }
  
  function addData() {
    //Write your code here, just console.log
    const employee= {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(employee);
    console.log(arr);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const array = arr.filter(function (employee) {
      return employee.profession !== 'admin';
     });
     console.log(array);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const array2 = [ 
       { id: 5, name: "Aditya", age: "23", profession: "COE" },
       { id: 6, name: "Omkar", age: "22", profession: "Businessman" },
       { id: 7, name: "Akash", age: "24", profession: "Tester" },
      ];

    const array3 = arr.concat(array2);

    console.log(array3);
  }