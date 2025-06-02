import './button.css'

const Button = ({label}) => {
    const showButtonLabel = () => {
        alert(`A label do botão é "${label}"`)   
    }
    
    return <button onClick={showButtonLabel}>{label}</button>
}

export {Button}