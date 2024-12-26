function ButtonClickEvent() {
    const handleClick = (e) => { e.target.textContent = "OUCH! ;[" }

    const buttonInnerText = 'Click Me ;>';
 return(
    <button onDoubleClick={(e) => handleClick(e)}>{buttonInnerText}</button>
 )
}

export default ButtonClickEvent

