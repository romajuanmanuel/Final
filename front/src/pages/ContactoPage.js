import {useState} from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm ={
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg,setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]:value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }




    return (
        <div className="container mt-5">
            <h2>Formulario de contacto</h2>
            <form className="row g-3" action="/contacto" method="post" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" required  name="nombre" value={formData.nombre} onChange={handleChange}/>
                </div>
                <div className="col-md-8">
                    <label for="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" required name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label for="telefono" className="form-label">Numero de Telefono</label>
                    <input type="text" className="form-control" id="telefono" placeholder="(0223) 155-555555" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </div>
                <div className="col-md-12">
                    <label for="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="3" required name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
        </div>
    );
}

export default ContactoPage;