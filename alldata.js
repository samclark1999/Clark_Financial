function AllData(){
  const ctx = React.useContext(UserContext);
  let text = handleUser();
  
  function handleUser() {
    let array = [];
    for (let x in ctx.users) {
      array[x] =
      <>
        Name: {ctx.users[x].name} <br/>
        Email: {ctx.users[x].email} <br/>
        Password: {ctx.users[x].password} <br/>
        Balance: ${ctx.users[x].balance} <br/><br/>
      </>
    }
    return array;
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="User Information"
      text={text}
    />
  ); 
}