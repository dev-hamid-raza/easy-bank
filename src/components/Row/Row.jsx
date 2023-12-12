
function Row(props) {
    const style = {
        display: 'flex',
        alignItems: 'center'
    }
    return (
        <div className="row" style={style}>
            {props.children}
        </div>
    )
}
export default Row