"use client"
import styled from "styled-components";
import { FilterByType } from "./filter-bar-type";

interface FilterProps{

}

const FilterContainer = styled.div`
    padding: 36px 160px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
`
export function FilterBar(props: FilterProps){
    return(
    <>
        <FilterContainer>
            <FilterByType></FilterByType>
        </FilterContainer>
    </>
    )
}