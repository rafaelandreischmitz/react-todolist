import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

const primaryColor = '#F2BF2F';
const darkColor = '#171717';
const blackColor = '#000';
const whiteColor = '#fff';
const placeholderColor = '#999';
const defaultFont = 'Montserrat, sans-serif';

const screenMd = '768px';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
    body{
        background-color: ${darkColor};
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

    ::selection {
        background-color: ${darkColor};
        color: ${primaryColor};
    }

    #root{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        div{
            width: 100%;
            justify-content: center;
            display: flex;
        }

        @media(max-width: ${screenMd}){
            padding: 0 1rem;
        }
    }

    .anotherPageLink{
        text-decoration: none;
        color: #fff;
        margin-top: 2rem;
        text-transform: uppercase;
        font-size: 14px;
        transition: 0.4s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            color: ${primaryColor};
            transition: 0.4s;
        }

        svg{
            width: 15px;
            margin-right: 0.25rem;
        }
    }

    button{
        outline: none;
        user-select: none;
    }

    .navButtons{
        display: flex;
        justify-content: center;

        ul{
            padding: 0;
            margin: 0;

            button{
                outline: none;
                user-select: none;
                cursor: pointer;
                justify-content: center;
                display: flex;
                color: ${darkColor};
                font-weight: 600;
                border: none;
                border-radius: 25px;
                font-size: 1rem;
                padding: 0.7rem 1rem;
                text-transform: uppercase;
                position: relative;
                overflow: hidden;
                z-index: 1;
                transition: 0.4s;
                background-color: ${whiteColor};

                @media(min-width: ${screenMd}){
                    &:hover{
                        color: ${whiteColor};
                        padding: 0.7rem 1.6rem;

                        span{
                            transform: translateY(-40%) scale(2);
                        }
                    }

                    span{
                        position: absolute;
                        width: 25%;
                        height: 100%;
                        background-color: ${primaryColor};
                        transform: translateY(150%);
                        border-radius: 50%;
                        left: calc((var(--n) - 1) * 25%);
                        transition: 0.4s;
                        transition-delay: calc((var(--n) - 1) * 0.1s);
                        z-index: -1;
                        --n: 1;

                        &:nth-child(2){
                            --n: 2;
                        }
                        
                        &:nth-child(3){
                            --n: 3;
                        }

                        &:nth-child(4){
                            --n: 4;
                        }
                    }
                }
            }
        }
    }


    form{
        width: 20%;
        font-family: ${defaultFont};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div{
            justify-content: flex-start!important;
        }

        .formButton{
            margin-top: 1rem
        }
    }

    label{
        position: absolute;
        margin-top: -9px;
        margin-left: 8px;
        font-family: ${defaultFont};
        background-color: ${darkColor};
        color: ${primaryColor};
        padding: 0 5px;
        font-size: 14px;
    }

    input, select{
        font-family: ${defaultFont};
        margin-bottom: 1rem;
        border: 2px solid ${primaryColor};
        border-radius: 4px;
        height: 35px;
        font-size: 14px;
        background-color: ${darkColor};
        padding: 0 0.5rem;
        user-select: none;
        color: ${whiteColor};
        outline: none;
        width: 100%;
        transition: 0.4s;

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active{
             -webkit-box-shadow: 0 0 0 30px ${darkColor} inset!important;
             -webkit-text-fill-color: white!important;
        }

        option{
            color: ${whiteColor};
        }
        
        &::placeholder{
            color: ${placeholderColor};
        }

        &:hover,
        &:focus{
            box-shadow: 6px 0 0 0 ${primaryColor};
            transition: 0.4s;
        }
    }

    div{
        width: 100%;
    }

    .title{
        font-family: ${defaultFont};
        text-transform: uppercase;
        color: ${primaryColor};
        font-weight: 600;
        margin-bottom: 1rem;

        h1{
            margin: 0;
        }
    }


    .list{
        list-style: none;
        padding: 0;
        margin: 0;
        width: 50%;
        
        li{
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.3rem;
            background-color: ${blackColor};
            border-radius: 4px;
            padding: 1rem;
            margin-bottom: 1rem;
            transition: 0.4s;

            &:hover{
                transform: scale(1.02);
                transition: 0.4s;
            }

            &:last-child{
                margin-bottom: 0;
            }

            div{
                display: flex;
                align-items: center;
                width: 20%!important;

                &:first-child{
                    justify-content: flex-start!important;
                }

                &:nth-child(2){
                    width: 60%!important;
                }

                &:nth-child(3){
                    justify-content: flex-end!important;
                }

                strong, a, button{
                    display: flex;
                    justify-content: center;
                }
                a{
                    width: 65%;
                    color: ${whiteColor};
                }
     
                button{
                    border: none;
                    transition: 0.4s;
                    padding: 0.5rem 0.75rem;
                    border-radius: 4px;
                    cursor: pointer;
                    color: ${darkColor};

                    svg{
                        width: 20px;
                        height: 20px;
                    }

                    &:first-child{
                        background-color: ${primaryColor};
                    }

                    &:last-child{
                        margin-left: 0.5rem;
                        background-color: #c4202b;
                    }

                    &:hover{
                        background-color: ${whiteColor};
                        color: ${darkColor};
                        transition: 0.4s;
                    }
                }

                strong{
                    min-width: 11%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    div{
                        width: 15px!important;
                        height: 15px!important;
                        margin-left: 0.5rem;

                        svg{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    &[value='A fazer']{
                        color: #c4202b;
                    }

                    &[value='Fazendo']{
                        color: ${primaryColor};
                    }

                    &[value='Finalizada']{
                        color: ${primaryColor};
                        filter: grayscale(1);
                        opacity: 0.4;
                    }
                }
            }
        }
    }

    @media(max-width: ${screenMd}){
        form{
            width: 75%;
        }

        .list{
            width: 100%;

            li{
                flex-direction: column;

                div{
                    width: 100%!important;
                    justify-content: center!important;
                    align-items: center!important;

                    &:first-child, &:nth-child(2), &:nth-child(3){
                        width: 100%;
                        justify-content: center!important;
                        align-items: center!important;
                    }
                    
                    &:nth-child(2){
                        margin: 1rem 0;
                        width: 100%!important;
                    }
                
                    button{
                        padding: 0.5rem 0;
                        width: 50%;
                    }
                }
            }
        }
    }
`

export const Todoscontainer = styled.div `
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    align-items: center;
    flex-direction: column;

    .createTodos{
        margin-top: 2rem;
    }

    .changeStatusModal{
        position: fixed;
        z-index: 9999;
        align-items: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.75);

        .changeStatusDiv{
            width: 50%!important;
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: ${darkColor};

            h2{
                color: white;
                text-align: center;
                margin: 0;
            }

            form{
                width: 40%;
                justify-content: center;
                align-items: center;

                .inputForm{
                    margin: 2rem 0;
                    padding: 0;
                    height: 35px;
                }
            }

            .modalForm{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
            }

            .closeModal{
                outline: none;
                position: absolute!important;    
                right: 25%;
                top: 30%;
                user-select: none;
                cursor: pointer;
                justify-content: center;
                display: flex;
                color: ${whiteColor};
                opacity: 0.5;
                font-size: 10px;
                font-weight: 500;
                border: none;
                border-radius: 5px;
                height: 25px
                width: 25px;
                font-size: 1rem;
                padding: 0.25rem;
                margin: 0.5rem;
                text-transform: uppercase;
                position: relative;
                overflow: hidden;
                z-index: 1;
                transition: 0.4s;
                background-color: transparent;

                svg{
                    width: 25px;
                    height: 25px;
                }

                &:hover{
                    opacity: 1;
                    transition: 0.4s;
                    background-color: ${primaryColor};
                    border-radius: 10px;
                }
            }
        }
    }

    @media(max-width: ${screenMd}){
        .changeStatusModal .changeStatusDiv{
            width: 100%!important;

            form{
                width: 65%;
            }
        }

        .closeModal{
            right: 0%!important;
            top: 30%!important;
        }
    }
`;