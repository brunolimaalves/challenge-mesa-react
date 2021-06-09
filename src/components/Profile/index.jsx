import React, { useEffect, useState } from 'react'
import { Card, Avatar, Row, Col, Skeleton, List, Image , message} from 'antd'
import FormProfile from './form'
import axios from 'axios'

import './style.css'

const Profile = () => {

    const [ profile , setProfile] = useState({})

    const [ editing , setEditing] = useState(false)

    const handleToggleButton = () => setEditing(!editing)

    const handleLabelButtonCard =  editing ? 'Cancel' : 'Edit'  

    useEffect( () => {setEditing(true); load()} , [])

    const data = [
        {title: 'Name' , description: `${profile.first_name} ${profile.last_name}`  },
        {title: 'E-mail', description: profile.email},
    ]

    const load = () => axios.get('https://reqres.in/api/users/2')
        .then( response => {
            setEditing(false)
            const { data } = response.data
            console.log(data)
            setProfile(data)
        }).catch( error => {
            message.error('User not found!');
        })      
    
    return (
        <>
            <Card title="Profile"  extra={<a href="#" onClick={ () => handleToggleButton()}> {handleLabelButtonCard} </a>} 
                className='card'>
                { !profile.id ?
                <Skeleton />
                :
                <>
                <Row>
                    <Col xs={24} sm={8} md={8} lg={8} xl={10} style={{textAlign: 'center'}}>
                        <Avatar
                            size={128}
                            src={<Image src={profile.avatar} />}
                        />
                        <div style={{textAlign: 'center'}}>{profile.first_name}</div>
                    </Col>
                    <Col xs={24} sm={16} md={16} lg={16} xl={14}>
                        { !editing ?
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                        : <FormProfile profile={profile} />
                        }
                    </Col>
                </Row>
                <Row>

                </Row>
                </>
            }
            </Card>
        </>

    )
}

export default Profile; 