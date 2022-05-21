import './style.css'

export default function Success(){
    return (
        <div className='success-container'>
            <h1>Parabéns!!</h1>
            <p className='message'>Você mandou muito bem!</p>

            <p className='success'>Acertos:</p>
            <span>6/10</span>

            <div className='buttons'>
                <button>Tentar novamente</button>
                <button>Home</button>
            </div>
        </div>
        )
}