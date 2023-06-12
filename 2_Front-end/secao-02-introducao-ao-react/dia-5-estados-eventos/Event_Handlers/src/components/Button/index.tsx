function Button() {

function handleClick() {
    alert('Meu primeiro event handler com React')
  }

  return (
    <button onClick={ handleClick }>
      Clique em mim!
    </button>
  )
}

export default Button;
