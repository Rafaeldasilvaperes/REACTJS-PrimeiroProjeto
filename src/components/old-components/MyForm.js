import './MyForm.module.css';
import { useState } from 'react';

export const MyForm = ({user}) => {
  // 3 - Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');


  // Primeira maneira de receber inputs do forms
  const handleName = (e) => {
    setName(e.target.value)
  }

  // Evento para submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário!", {name, email, bio, role})
    setName("")
    setEmail("")
    setBio("")
  }

  return (
    <>
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Digite o seu nome"
          value={name}
          onChange={handleName} 
          />
        </div>
        {/* 2 - label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input 
          type="email" 
          name="email" 
          placeholder="Digite o seu E-mail" 
          value={email}
          // Segunda maneira, direto no input
          onChange={(e) => setEmail(e.target.value)}
          
          />
        </label>
        {/* Textarea com REACT */}
        <label>
          <span>Bio:</span>
          <textarea 
          name="bio" 
          placeholder='Descrição' 
          onChange={(e) => setBio(e.target.value)} 
          value={bio}></textarea>
        </label>
        {/* SELECT  */}
        <label>
          <span>Opções:</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}