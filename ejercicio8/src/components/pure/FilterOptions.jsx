import React from 'react'
import FilterContainer from '../containers/FilterContainer'

const FilterOptions = () => {
    return (
        <div className='filters'>
            <FilterContainer filter='SHOW_ALL'>
                ALL
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLETED
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>
        </div>
    )
}

export default FilterOptions

