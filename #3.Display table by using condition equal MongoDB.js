use tej  //select database
show collections //show tables or collection
db.employee.insert({"Name":"Vinod","Age":"19"})//adding element in json like format
db.employee.find() //select * from empolyee
db.employee.find().pretty()//organized manner select not in use
db.employee.findOne()//print 1st row or documents 
db.employee.find(
{"Name":"Tejsingh"})//select * from employee where name = "tejsingh"

db.employee.find(
{
    "Age":{$gt:"21"}})  //print employee whose age  is greater than 21,here gt=greather than
db.employee.find(
{
    "Age":{$gte:"21"}//greater than and equal to
})
db.employee.find(
{
    "Age":{$lt:"26"}//less than 
})
db.employee.find({
    "Age":{$ne:"21"}//not equal
})