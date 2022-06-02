export class EmployeeService {
  static employeeList = [
    {
      "id": 1,
      "name": "Ryan",
      "username": "aryan",
      "email": "ryan@email.com",
      "isSelected": false
    },
    {
      "id": 2,
      "name": "Jeff",
      "username": "jeffdelaney",
      "email": "jeffdelaney@gg.com",
      "isSelected": false
    },
    {
      "id": 3,
      "name": "Brad",
      "username": "bradtraversy",
      "email": "bradtraversy@code.com",
      "isSelected": false
    },
    {
      "id": 4,
      "name": "Dev Ed",
      "username": "eddie",
      "email": "devEd@dev.com",
      "isSelected": false
    },
  ];

  static getAllEmployees() {
    return this.employeeList;
  }
}