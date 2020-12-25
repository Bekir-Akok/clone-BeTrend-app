import Filterbutton from './Filterbutton'

const Filter = () => {
    
    const filterButton = [{name:"Gender"},
        {name:"Category"},
        {name:"Brands"},
        {name:"Color"},
        {name:"Body Size"},
        {name:"Material"},
        ]

    return (
        <div className="filter-main">
            <div className="filter-up">
                <h1><a href="#">Category Filter</a><p>(.....Product List)</p></h1>
                <select>
                    <option selected>Filter I</option>
                    <option selected>Filter II</option>
                    <option selected>Filter III</option>
                    <option selected>Filter IV</option>
                    <option selected>Filter V</option>
                    <option selected>Filter VI</option>
                </select>
            </div>
            <div className="filter-down">
                {filterButton.map((filterBtn, i) => (
                    <Filterbutton key={i} name={filterBtn.name}/>
                ) )}
                
            </div>
        </div>
    )  
}


export default Filter