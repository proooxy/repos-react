import React, {useState} from "react"
import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from "./styles"

export default function Main(){

    const [newRepo, setNewRepo] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        console.log(newRepo);

    }
    
    function handleinputChange(e) {
        setNewRepo(e.target.value)

    }
    return(
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositorios
                
            </h1>

            <Form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Adicionar Repositorio"
                value={newRepo}
                onChange={handleinputChange}
                />

                <SubmitButton >
                    <FaPlus color="#fff" size={14}></FaPlus>
                </SubmitButton>
            </Form>
        </Container>
    )
}