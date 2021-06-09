import React from 'react'
import { useAuthDataContext } from "../helpers/AuthProvider";
import { Card, Typography } from 'antd'



const { Paragraph } = Typography;

const Home = () => {

    return (
        <>
            <Card title="Home"  extra={<a href="#">More</a>} className='card'>
                <Paragraph>
                    Implementar uma aplicação web (Front-end) que mostre os locais mais próximos do usuário em formato de mapa e lista.
                    <br />
                    ● O usuário da aplicação poderá entrar com uma conta já existente ou cadastrar uma nova conta para efetuar o login através de e-mail e senha.
                    <br />
                    ● A aplicação deve ter as funcionalidades de visualizar perfil, editar perfil e logout.
                    <br />
                    ● A integração dessa parte de autenticação e perfil deve utilizar a API REST do REQ|RES (https://reqres.in/).
                    <br />
                    ● A busca de locais próximos ao usuário deve utilizar a API REST do Google Places (https://cloud.google.com/maps-platform/places/).
                    <br />
                    ● O usuário poderá salvar os locais em favoritos e avaliar, com rating e comentário, para que outros usuários vejam o histórico de avaliação do local.
                </Paragraph>
            </Card>
        </>

    )
}

export default Home;