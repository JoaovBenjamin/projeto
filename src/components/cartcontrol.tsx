import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./shopping-bag";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete-color);
    border-radius: 100%;
    padding: 0px 5px;
    font-size: 10px;
    color: white;
    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CartControl(){
    const {value} = useLocalStorage('cart-items')
    return(
        <>
            <Container>
                <CartIcon></CartIcon>
                {value.length && <CartCount>{value.length}</CartCount>}
            </Container>
        </>
    )
}