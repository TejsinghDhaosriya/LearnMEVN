use tej
show collections
db.employee.find()
db.employee.find(

    {"Name":"Tejsingh","Age":"21"}//here , is and operator means name is tej and age is 21
    )
db.employee.find(
  {
      $or : [{"Name":"Tejsingh"},{"Age":"13"}]//or operator 
  })
db.employee.find(
  {"Name":"Tejsingh", $or: [{"Age": "21"},{"Age": "23"}]}
  )