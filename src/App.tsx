import Mybutton from './components/MyButton'

function App() {
    const handleClick = () => {
        console.log(1231)
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Mybutton onClick={handleClick}>董鑫</Mybutton>
        </div>
    )
}

export default App
