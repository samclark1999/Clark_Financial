function Deposit(){
  const ctx = React.useContext(UserContext);
  const [number, setNumber]         = React.useState('');
  const [balance, setBalance]       = React.useState(`Balance: ${ctx.users[0].balance}`);
  const [show, setShow]             = React.useState(true);
  const [status, setStatus]         = React.useState('');
  const [canSubmit, setCanSubmit]   = React.useState(false);

  function validate(field){ 
      if (!field || field<0) {
        setStatus('Error: Please enter a valid amount')        
        setTimeout(() => setStatus(''),6000);
        return false;
      }
      setStatus('');
      return true;
  }

  function handleCreate(){  
    if (!validate(parseInt(number)))     
    return;    
    ctx.users[0].balance += parseInt(number);
    handleBalance();
    setShow(false);
  }     

  function handleBalance(){  
    setBalance(`Balance: ${ctx.users[0].balance}`); 
  }

  function clearForm(){ 
    setNumber('');
    setShow(true);
    setCanSubmit(false);
  }

  function onChange(event){ 
    setNumber(event);
    setCanSubmit(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Deposit"
      title={balance} 
      status={status}
      body={show ? ( 
        <>
        <br/>
        Amount to deposit:
        <input type="input" id="number" value={number} onChange={e => onChange(e.currentTarget.value)}></input> {/* input field */}
        <br/><br/>
        {canSubmit ? (<button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>):(<></>)} {/* deposit button */}
        </>
      ):( 
        <>
        <br/><br/>
        <h5>Success!</h5>
        <br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
        </>
      )}
    />  
  )
}
