import styled from "styled-components";
import { SearchIcon } from "./search-loupe";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    border: none;
    border-radius: 8px;
    background-color: var(--bg-secondery);
    padding: 10px 16px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
`
const InputContainer = styled.div`
    position: relative;
    width: 352px;
    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function PrimaryInputSearchIcon(props: InputProps){
    return(
        <div>
            <InputContainer>
                <PrimaryInput {...props}></PrimaryInput>
                <SearchIcon></SearchIcon>           
            </InputContainer>
        </div>
    )
}

