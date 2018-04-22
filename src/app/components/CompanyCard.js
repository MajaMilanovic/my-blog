import React from "react"
const CompanyCard = (props) => {
    const { company } = props
    
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>Company</h3>
                        <p>name: { company.name }</p>
                        <p>slogan: { company.slogan }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CompanyCard }