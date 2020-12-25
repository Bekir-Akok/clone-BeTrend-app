const Filterbutton = (props) => {
    return (
        <div className="filter-btn">
            <button type="button">{props.name}</button>
            <i class="fas fa-angle-down"></i>   
        </div>
    )
}


export default Filterbutton