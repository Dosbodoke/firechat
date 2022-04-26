import './LayoutContainer.css'

function LayoutContainer (props) {
    return (
        <main className='container'>
            {props.children}
        </main>
    )
}

export default LayoutContainer