function CreateAccount(){
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [name, setName]           = React.useState('');
  const [email, setEmail]         = React.useState('');
  const [password, setPassword]   = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),6000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setCanSubmit(false);
  }

  function onChange(event, field) {
    setCanSubmit(true);
    if (field === 'name') setName(event);
    if (field === 'email') setEmail(event);
    if (field === 'password') setPassword(event);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => onChange(e.currentTarget.value, 'name')} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => onChange(e.currentTarget.value, 'email')}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => onChange(e.currentTarget.value, 'password')}/><br/>
              {canSubmit ? (<button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>):(<></>)}
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}