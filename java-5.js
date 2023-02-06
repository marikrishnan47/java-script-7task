const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];
  
 let name=users.map(function(value){
   return value.first_name+value.last_name;
 });
  document.write (name)
  
  