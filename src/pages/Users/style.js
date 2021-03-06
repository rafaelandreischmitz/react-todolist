import styled from 'styled-components';

const primaryColor = '#F2BF2F';
const darkColor = '#171717';
const blackColor = '#000';
const whiteColor = '#fff';
const placeholderColor = '#999';
const defaultFont = 'Montserrat';

const screenMd = '768px';

export const Userscontainer = styled.div `

    align-items: center;
    flex-direction: column;

    .createUsers{
        margin-top: 2rem;
    }

    .editUser{
        display: flex;
        flex-direction: column; 
        margin-top: 1rem;

        .divFormEditUser{
            flex-direction: column;
        }
    }
    #__lpform_user, #__lpform_password{
        display: none;
    }
    .editUserModal{
        position: fixed;
        z-index: 9999;
        align-items: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.75);

        .editUsersDiv{
            width: 50%!important;
            height: 50%;
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
                top: 25%;
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

    .listUsers{
        li{
            div{
                word-break: break-all;

                &:first-child{
                    width: 45%!important;
                    margin-right: 0.5rem;
                }
                &:nth-child(2){
                    width: 45%!important;
                    margin-right: 0.5rem;
                }
                &:nth-child(3){
                    width: 15%!important;
                }
                a{
                    width: 100%;
                    justify-content: left;
                }
            }
        }
    }


    @media(max-width: ${screenMd}){
        .editUserModal .editUsersDiv{
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